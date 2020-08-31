import getDataFrom from './request'
import { convertTime, formatDate } from '../helpers/functions'

const getUser = async (): Promise<any> => await getDataFrom('/me')

const getFollowingArtistsNb = async (): Promise<any> => {
  const followingArtistNb = await getDataFrom('/me/following?type=artist')

  return followingArtistNb.artists.items.length
}

const getRecentlyPlayed = async (): Promise<any> => {
  const lastPlayed = await getDataFrom('/me/player/recently-played')

  return lastPlayed.items.map((lastPlayedTrack: any): Track => {
    const track = lastPlayedTrack.track

    return {
      id: track.id,
      author: track.artists[0].name,
      name: track.name,
      album: track.album.name,
      duration: convertTime(track.duration_ms),
      img: track.album.images[0].url,
      url: track.external_urls?.spotify,
      lastTimePlayed: formatDate(lastPlayedTrack.played_at)
    }
  }) as Track[]
}

export {
  getUser,
  getFollowingArtistsNb,
  getRecentlyPlayed
}