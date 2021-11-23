import { HomeStack, ExploreStack, SubscribStack, LibraryStack } from '../stackScreens';
import { Icons } from "../../assets/Icons"

const { arrow, threeDots, home, explore, subscrib, library, youtube, notification, search, account } = Icons.path

const tabScreenData = {
  tabScreen: [
    {
      name: 'Home',
      icon: home,
      component: HomeStack
    },
    {
      name: 'Explore',
      icon: explore,
      component: ExploreStack
    },
    {
      name: 'Subscrib',
      icon: subscrib,
      component: SubscribStack
    },
    {
      name: 'Library',
      icon: library,
      component: LibraryStack
    },
  ],
  headerLeft: {
    name: 'Youtube',
    icon: youtube,
    viewBox: '-50 -60 300 300',
    color: '#d00',
    width: 50,
    height: 35
  },
  headerRight: [
    {
      name: 'notification',
      icon: notification,
      viewBox: '',
      width: 40
    }, 
    {
      name: 'search',
      icon: search,
      viewBox: '',
      width: 40
  
    }, 
    {
      name: 'account',
      icon: account,
      viewBox: '0 0 55 55',
      width: 40
    }
  ],
  channelHeader: {
    left: {
      name: 'Notification',
      icon: arrow,
      viewBox: '1 0 20 20',
      rotate: 90,
      width: 30,
    },
    right: [
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
}

export default tabScreenData;