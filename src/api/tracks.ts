import getDataFrom from './request'
import { convertTime } from '../helpers/functions'

const formatTrack = (track: any /*Spotify Track */): Track => {
  const { id, artists, name, album, duration_ms, external_urls } = track

  return {
    id,
    author: artists.map((a: any /*Spotify Artist */) => a.name).join(', '),
    name,
    album: album.name,
    duration: convertTime(duration_ms),
    img: album.images[0].url,
    url: external_urls.spotify || ''
  }
}

/* User's Top Tracks */
const getUserTopTracks = async (type: TimeRange, max: number = 50): Promise<Track[]> => {
  const userTopTracks = await getDataFrom(`/me/top/tracks?limit=${max}&time_range=${type}_term`)

  return userTopTracks.items.map(formatTrack) as Track[]
}

export {
  formatTrack,
  getUserTopTracks
}