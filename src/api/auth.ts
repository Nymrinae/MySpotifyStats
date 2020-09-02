import querystring from 'querystring'
import Vue from 'vue'

const spotifyAuthStateKey = 'spotify_auth_state'
const REDIRECT_BASE_URL = process.env.NODE_ENV === 'production' ? 'http://myspotifystats.netlify.app' : 'http://localhost:3000'

const generateRandomString = (length: number): string => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'

  return [...Array(length)].reduce(e => e + chars[~~(Math.random() * chars.length)], '')
}

const getHashParams = (): any => {
  const hashParams: { [key: string]: string } = {}
  const regex: RegExp = /([^&;=]+)=?([^&;]*)/g
  let elem = undefined
  const hash: string = window.location.hash.substring(1)

  while (elem = regex.exec(hash)) {
    hashParams[elem[1]] = decodeURIComponent(elem[2])
  }

  return hashParams
}

const getSpotifyAuthURL = (spotifyClientID: string): string => {
  const state = generateRandomString(16);
  const scope = 'user-read-private user-read-email user-read-recently-played user-top-read user-follow-read user-follow-modify playlist-read-private playlist-read-collaborative playlist-modify-public';

  Vue.$cookies.set(spotifyAuthStateKey, state)

  return 'https://accounts.spotify.com/authorize?' + querystring.stringify({
    response_type: 'token',
    client_id: spotifyClientID,
    scope,
    redirect_uri: REDIRECT_BASE_URL,
    state
  })
}

export {
  getHashParams,
  getSpotifyAuthURL
}