import getDataFrom from './request'
import { formatTrack } from './tracks'

const getPlaylistTracks = async (playlistId: string): Promise<PlaylistTrack> => {
  const playlistTracks = await getDataFrom(`/playlists/${playlistId}/tracks`)
  
  const tracks = playlistTracks.items.map(({ track }: any) => {
    if (track?.id)
      return formatTrack(track)
  })

  return {
    total: playlistTracks.total,
    tracks
  }
}

const getUserPlaylists = async (): Promise<PlaylistT[]> => {
  const userPlaylists = await getDataFrom('/me/playlists?limit=50')

  return userPlaylists.items.map((playlist: any): PlaylistT => {
    return {
      id: playlist.id,
      img: playlist.images[0].url,
      name: playlist.name,
      desc: playlist.description,
      owner: {
        id: playlist.owner.id, 
        name: playlist.owner.display_name,
      }
    }
  }) as PlaylistT[]
}

export {
  getPlaylistTracks,
  getUserPlaylists
}