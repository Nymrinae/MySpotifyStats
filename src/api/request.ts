import Vue from 'vue'
import axios from 'axios'

const SPOTIFY_BASE_URL = 'https://api.spotify.com/v1'

const getDataFrom = async (path: string): Promise<any> => {
  try {
    const res = await axios.get(SPOTIFY_BASE_URL + path, {
      headers: {
        // @ts-ignore
        'Authorization': 'Bearer ' + Vue.$cookies.get('spotifyAccessToken')
      }
    })

    return res.data
  } catch (e) {
    throw new Error(e)
  }
}

export default getDataFrom