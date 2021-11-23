import { Icons } from "../../../assets/Icons"

const { history, unPlaylist, download, share, forbidden, remove, report, delete_ } = Icons.path

const actions = [
  {
    icon: history,
    label: 'Save to Watch Later',
    view: '0 0 25 25'
  },
  {
    icon: unPlaylist,
    label: 'Save to playlist',
    view: '0 0 25 25'
  },
  {
    icon: download.d2,
    label: 'Download video',
    view: '0 0 50 50'
  },
  {
    icon: share,
    label: 'Share',
    view: '0 0 25 25'
  },
  {
    icon: forbidden,
    label: 'Not interested',
    view: '0 0 25 25'
  },
  {
    icon: remove,
    label: 'Don\'t recommend channel',
    view: '0 0 25 25'
  },
  {
    icon: report,
    label: 'Report',
    view: '0 0 25 25'
  },
];

export default actions;