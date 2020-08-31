import getDataFrom from './request'

const formatArtist = (artist: any /*Spotify Artist */): Artist => {
  return {
    id: artist.id,
    name: artist.name,
    img: artist.images[0].url
  }
}

const getArtist = async (artistId: string): Promise<any> => await getDataFrom(`/artists/${artistId}`)

/* User's Top Artists */
const getUserTopArtists = async (type: TimeRange, max: number = 50): Promise<Artist[]> => {
  const userTopArtists = await getDataFrom(`/me/top/artists?limit=${max}&time_range=${type}_term`)

  return userTopArtists.items.map(formatArtist) as Artist[]
}

export {
  getArtist,
  getUserTopArtists
}