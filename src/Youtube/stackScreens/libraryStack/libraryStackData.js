import { 
  Yt_library,
  Yt_channel,
  Yt_history,
  Yt_yourVideos,
  Yt_download,
  Yt_yourMovies,
  Yt_watchLater,
  Yt_newPlaylist,
  Yt_likedVideos,
  yt_playVideo,
  Yt_videoActions,
  Yt_playlist
 } from "../../screens";
import { Yt_comments } from "../../Yt-components";

const libraryStackData = [
  {
    name: 'library',
    component: Yt_library,
    header: false
  },
  {
    name: 'channel',
    component: Yt_channel,
    header: false
  },
  {
    name: 'history',
    component: Yt_history,
    header: false
  },
  {
    name: 'video',
    component: yt_playVideo,
    header: false
  },
  {
    name: 'yourVideos',
    component: Yt_yourVideos,
    header: false
  },
  {
    name: 'download',
    component: Yt_download,
    header: false
  },
  {
    name: 'yourMovies',
    component: Yt_yourMovies,
    header: false
  },
  {
    name: 'watchLater',
    component: Yt_watchLater,
    header: false
  },
  {
    name: 'newPlaylist',
    component: Yt_newPlaylist,
    header: false
  },
  {
    name: 'likedVideos',
    component: Yt_playlist,
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

export default libraryStackData;