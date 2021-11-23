import { Yt_channel, Yt_subscrib, yt_playVideo, Yt_videoActions, Yt_playlist, Yt_allSubscribCannels } from "../../screens";
import { Yt_comments } from "../../Yt-components";

const subscribStackData = [
  {
    name: 'subscrib',
    component: Yt_subscrib,
    header: false
  },
  {
    name: 'video',
    component: yt_playVideo,
    header: false
  },
  {
    name: 'channel',
    component: Yt_channel,
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
  {
    name: 'subscribed',
    component: Yt_allSubscribCannels,
    header: false
  },
]

export default subscribStackData;