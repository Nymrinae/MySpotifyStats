import express from 'express'
import axios from 'axios'
import querystring from 'querystring'
// @ts-ignore
import cookieParser from 'cookie-parser'

const app = express()
const spotifyAuthStateKey = 'spotify_auth_state'
const REDIRECT_BASE_URL = process.env.NODE_ENV === 'production' ? 'myspotifystats.netlify.app' : 'http://localhost:3000'

const generateRandomString = (length: number): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  return [...Array(length)].reduce(e => e + chars[~~(Math.random() * chars.length)], '')
};

app.use(cookieParser())

app.use('/login', (req, res) => {
  const state = generateRandomString(16);
  const scope = 'user-read-private user-read-email user-read-recently-played user-top-read user-follow-read user-follow-modify playlist-read-private playlist-read-collaborative playlist-modify-public';
  
  res.cookie(spotifyAuthStateKey, state);
  res.redirect('https://accounts.spotify.com/authorize?' +
    querystring.stringify({
      response_type: 'code',
      client_id: process.env.SPOTIFY_CLIENT_ID,
      scope,
      redirect_uri: `${REDIRECT_BASE_URL}/callback`,
      state
    }
  ))
})

app.use('/callback', async (req, res) => {
  const { code, state } = req.query
  const storedState = req.cookies[spotifyAuthStateKey]

  if (!state || state !== storedState) {
    // Handle Error Front-side instead of throwing a simple state in query
    return res.redirect('/' + querystring.stringify({ error: 'missing_state' }))
  }

  res.clearCookie(spotifyAuthStateKey)

  const options = {
    code: (code as string),
    redirect_uri: `${REDIRECT_BASE_URL}/callback`,
    grant_type: 'authorization_code'
  }

  const headers = {
    'Authorization': 'Basic ' + (Buffer.from(`${process.env.SPOTIFY_CLIENT_ID}:${process.env.SPOTIFY_CLIENT_SECRET}`).toString('base64'))
  }

  try {
    const response = await axios.post('https://accounts.spotify.com/api/token', querystring.stringify(options), { headers })
    const { access_token, refresh_token } = response.data

    res.redirect(`${REDIRECT_BASE_URL}/?access_token=${access_token}&refresh_token=${refresh_token}`)
  } catch(e) {
    console.error(e)
  }
})

export default app