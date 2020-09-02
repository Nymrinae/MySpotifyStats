import Vue from 'vue'
import { Middleware } from '@nuxt/types'

const authMiddleware : Middleware = ({ redirect }: any) => {
  const spotifyAccessToken = Vue.$cookies.isKey('spotifyAccessToken')

  if (!spotifyAccessToken) {
    return redirect('/')
  }
}

export default authMiddleware