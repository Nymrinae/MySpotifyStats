type User = {
  name: string,
  profilePicture: string,
  followers: number,
  following: number,
  nbPlaylists: number
}

type Track = {
  id: string,
  author: string,
  album: string,
  duration: string,
  name: string,
  img: string,
  url: string,
  lastTimePlayed?: string
}

type Artist = {
  id: string,
  name: string,
  img: string
}

type PlaylistT = {
  id: string,
  img: string,
  name: string,
  desc: string,
  owner: {
    id: string,
    name: string,
  }
}

type PlaylistTrack = {
  total: number,
  tracks: Track[]
}

type NavbarItem = {
  title: string,
  icon: string,
  path: string
}

type TopType = 'artist' | 'track'
type TimeRange = 'short' | 'medium' | 'long'
type DisplayType = 'inline' | 'rounded'
type ButtonActionType = 'login' | 'logout'
type ButtonDisplayType = 'button' | 'icon'