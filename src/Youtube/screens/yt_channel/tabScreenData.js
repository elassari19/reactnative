import { Home, Videos, Playlists, Community, Channels, About } from './channel'
const tabScreenData= [
  {
    name: 'HOME',
    navigate: 'channel_home',
    component: Home
  },
  {
    name: 'VIDEO',
    navigate: 'channel_video',
    component: Videos
  },
  {
    name: 'PLAYLIST',
    navigate: 'channel_playlist',
    component: Playlists
  },
  {
    name: 'COMMUNITY',
    navigate: 'channel_community',
    component: Community
  },
  {
    name: 'CHANNEL',
    navigate: 'channel_channels',
    component: Channels
  },
  {
    name: 'ABOUT',
    navigate: 'channel_about',
    component: About
  },
]

export default tabScreenData;