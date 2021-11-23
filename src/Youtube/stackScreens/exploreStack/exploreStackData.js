import { 
  Yt_channel,
  Yt_explore,
  yt_playVideo,
  Yt_comments,
  Yt_shorts,
  Yt_camera,
} from '../../screens';

const exploreStackData = [
  {
    name: 'explore',
    component: Yt_explore,
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
    name: 'short_comment',
    component: Yt_comments,
    header: false
  },
  {
    name: 'sound_shorts',
    component: Yt_shorts,
    header: false
  },
  {
    name: 'short_camera',
    component: Yt_camera,
    header: false
  },
]

export default exploreStackData;