import { Yt_comments, Yt_channel, Yt_home, yt_playVideo, Yt_videoActions, Yt_playlist } from "../../screens";

const homeStackData = [
  {
    name: 'home',
    component: Yt_home,
    header: false
  },
  {
    name: 'channel',
    component: Yt_channel,
    header: false
  },
  {
    name: 'video',
    component: yt_playVideo,
    header: false
  },
  {
    name: 'actions',
    component: Yt_videoActions,
    header: false
  },
  {
    name: 'comments',
    component: Yt_comments,
    header: false
  },
  {
    name: 'playlist',
    component: Yt_playlist,
    header: false
  },

]

export default homeStackData;