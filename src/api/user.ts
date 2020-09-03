import getDataFrom from './request'
import { convertTime, formatDate } from '../helpers/functions'

const getUser = async (): Promise<any> => await getDataFrom('/me')

const getFollowingArtistsNb = async (): Promise<any> => {
  const followingArtistNb = await getDataFrom('/me/following?type=artist')

  return followingArtistNb.artists.items.length
}

const getUserPlaylistsNb = async (userId: string): Promise<number> => {
  const userPlaylists = await getDataFrom(`/users/${userId}/playlists`)

  return userPlaylists.total
}

const getRecentlyPlayed = async (): Promise<any> => {
  const lastPlayed = await getDataFrom('/me/player/recently-played')

  return lastPlayed.items.map((lastPlayedTrack: any): Track => {
    const { id, artists, name, album, duration_ms, external_urls } = lastPlayedTrack.track

    return {
      id,
      author: artists.map((a: any /*Spotify Artist */) => a.name).join(', '),
      name,
      album: album.name,
      duration: convertTime(duration_ms),
      img: album.images[0].url,
      url: external_urls?.spotify,
      lastTimePlayed: formatDate(lastPlayedTrack.played_at)
    }
  }) as Track[]
}

export {
  getFollowingArtistsNb,
  getUser,
  getUserPlaylistsNb,
  getRecentlyPlayed
}