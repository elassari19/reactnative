import { Yt_account, Yt_notification, Yt_search, Yt_voice } from "./screens";

const rootStackScreen = [
  {
    name: 'notification',
    component: Yt_notification,
    header: false
  },
  {
    name: 'search',
    component: Yt_search,
    header: false
  },
  {
    name: 'account',
    component: Yt_account,
    header: false
  },
  {
    name: 'voice',
    component: Yt_voice,
    header: false
  },
]

export default rootStackScreen;
