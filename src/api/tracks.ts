import getDataFrom from './request'
import { convertTime } from '../helpers/functions'

const formatTrack = (track: any /*Spotify Track */): Track => {
  return {
    id: track.id,
    author: track.artists.map((a: any /*Spotify Artist */) => a.name).join(' ft. '),
    name: track.name,
    album: track.album.name,
    duration: convertTime(track.duration_ms),
    img: track.album.images[0].url,
    url: track.external_urls.spotify || ''
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