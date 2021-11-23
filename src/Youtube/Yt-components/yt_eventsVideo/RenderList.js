import React from 'react';
import { Icons, SvgIconPressable } from '../../../assets/Icons'
import { ViewLayout, Text } from '../../../layout'

const { like, liked, disLike, disLiked, inPlaylist, unPlaylist, share, chat, download } = Icons.path;


const dataOfIconsEvents = [
  {
    name: 'liked',
    activeLabel: 'liked',
    desActiveLabel: 'like',
    activeIcon: liked,
    disactiveIcons: like,
  },
  {
    activeLabel: 'disLiked',
    desActiveLabel: 'disLike',
    name: 'disLiked',
    activeIcon: disLiked,
    disactiveIcons: disLike,
  },
  {
    activeLabel: 'live chat',
    desActiveLabel: 'live chat',
    name: 'chat',
    viewBox: '0 0 100 100',
    activeIcon: chat,
    disactiveIcons: chat,
  },
  {
    name: 'share',
    activeLabel: 'shared',
    desActiveLabel: 'share',
    activeIcon: share,
    disactiveIcons: share,
  },
  {
    name: 'download',
    activeLabel: 'downloaded',
    desActiveLabel: 'download',
    viewBox: '0 0 50 50',
    activeIcon: download.d2,
    disactiveIcons: download.d2,
  },
  {
    name: 'playlist',
    activeLabel: 'saved',
    desActiveLabel: 'save',
    viewBox: '0 0 25 25',
    activeIcon: inPlaylist,
    disactiveIcons: unPlaylist,
  },
]

const RenderList = ({ state, setstate }) => {

  const handleState = (name) => {

    name === 'liked' 
    ? setstate({...state, [name]: !state[name], disLiked: false })
    :name === 'disLiked'
    ? setstate({...state, [name]: !state[name], liked: false })
    : setstate({...state, [name]: !state[name]});
  }

  return dataOfIconsEvents.map((item, index)=>{

    const { activeIcon, disactiveIcons, name, activeLabel, desActiveLabel } = item;

    return <ViewLayout
      key={index}
      dimensions={[70]}
      flexFeatures={[1, , 'center', 'center']}
    >

      <SvgIconPressable
        onPress={()=>handleState(name)}
        width={60}
        height={24}
        svg={ state[name] ? activeIcon : disactiveIcons }
        viewBox={item.viewBox}
        color={'#000d'}
      />

      <Text
        font={[11, 300, 'center']}
      >
        { state[name] ? activeLabel : desActiveLabel }
      </Text>

    </ViewLayout>

  }

  )
}

export default RenderList;