import { Icons } from "../../../assets/Icons";
import Yt_channel from '../yt_channel'
import Yt_notification from '../yt_notification'
import Yt_search from '../yt_search'
import Yt_account from '../yt_account'

const { search, arrow, threeDots } = Icons.path;

const notificationData = {
  StackScreens: [
    {
      name: 'channel',
      component: Yt_channel,
      headerShown: false,
    },
    {
      name: 'notification',
      component: Yt_notification,
      headerShown: false,
    },
    {
      name: 'search',
      component: Yt_search,
      headerShown: false,
    },
    {
      name: 'account',
      component: Yt_account,
      headerShown: false,
    },
  ],
  headerLeft: {
    name: 'Notification',
    icon: arrow,
    viewBox: '1 0 20 20',
    rotate: 90,
    width: 30,
  },
  headerRight: [
    {
      name: 'search',
      icon: search,
      viewBox: '',
      width: 40
  
    }, 
    {
      name: 'threeDots',
      icon: threeDots,
      viewBox: '0 0 25 25',
      rotate: 90,
      width: 40
    }
  ]
}

export default notificationData;