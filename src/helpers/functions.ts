import navbarItems from '@/config/navbarItems'
import { RouteConfig } from '@nuxt/types/config/router'

export const convertTime = (time: number) => {
  time = time / 60000

  const min = Math.round(time)
  const sec = Math.round(60 * (time % 1))

  return `${min}:${sec.toString().padStart(2, '0')}`
}

export const formatDate = (date: Date): string => {
  const lastPlayedDate = new Date(date)
  const day = lastPlayedDate.toString().split(' ').slice(1, 3).join(' ')
  const time = lastPlayedDate.toLocaleTimeString()
  const hour = time.split(':').slice(0, 2).join(':')
  const dayMoment = time.split(' ')[1]

  return `${day} at ${hour} ${dayMoment}`
}

export const handleCurrentRoute = (newRoute: RouteConfig, oldRoute: RouteConfig, isMobile: boolean): void => {
  const findPath = (route: RouteConfig): string => {
    return navbarItems.find(r => r.name === route.name?.split('-')[0])!.path
  }
  const newRoutePath = findPath(newRoute)
  const oldRoutePath = findPath(oldRoute)

  if (newRoutePath != oldRoutePath) {
    document.getElementById(newRoutePath)!.classList.add(`navbar${isMobile ? 'Mobile' : ''}ItemActive`)
    document.getElementById(oldRoutePath)!.classList.remove(`navbar${isMobile ? 'Mobile' : ''}ItemActive`)
  }
}