import React, { useState } from 'react'
import { ReadMoreCard, Yt_avatar } from '..';
import { Icons, SvgIcon, SvgIconPressable } from '../../../assets/Icons'
import { ConvertNumbers } from '../../../constants';
import { Text, ViewLayout } from '../../../layout';

const { threeDots, like, liked, disLike, disLiked, chat } = Icons.path;
const comments = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit id, autem ea sed modi dolorum pariatur hic, aliquid eos voluptate, excepturi ratione optio incidunt inventore aperiam. Eveniet aspernatur in sint.';

const index = ({ onPress }) => {

  const [likedByOwnChannel, setlikedByOwnChannel] = useState(true);
  const [likingState, setLikingState] = useState({liking: false, disliking: false})
  const [text, setText] = useState(false)

  return (
    <ViewLayout
      padding={[8,3,5,5]} margin={[5]}
      borderWidth={[1]} borderColor={['#0002']} borderRadius={[20]}
    >

      {/* user avatar + name */}
      <ViewLayout flexFeatures={[1, 'row',, 'center']} padding={[,,,10]}>

        <Yt_avatar source={require('../../../assets/account.jpg')} width={24} height={24} />
        <Text font={[11]} colored={[, '#000a']} padding={[,,,5]}> user name & time </Text>

      </ViewLayout>

      {/* comment */}
      <ViewLayout flexFeatures={[, 'row', 'center']} padding={[5]}>

        {/* content of comment */}
        <ReadMoreCard content={comments} />

        {/* icon 'three dots' handle the report */}
        <ViewLayout flexFeatures={[,,,, 'end']}>
          <SvgIconPressable svg={threeDots} rotate={90} onPress={onPress} />
        </ViewLayout>

      </ViewLayout>

      {/* comment events */}
      <ViewLayout flexFeatures={[, 'row', , 'center']} padding={[5,,,20]}>

        <SvgIconPressable
          onPress={()=>setLikingState({liking: !likingState.liking, disliking: false})}
          svg={likingState.liking ? liked : like}
          width={20} viewBox={'0 0 30 30'} color={'#000d'}
        />
        <Text padding={[, 20, , ]}>{ConvertNumbers(88)}</Text>

        <SvgIconPressable
          onPress={()=>setLikingState({liking: false, disliking: !likingState.disliking})}
          svg={likingState.disliking ? disLiked : disLike}
          width={20} viewBox={'0 0 30 30'} color={'#000d'}
        />
        <Text padding={[, 20, , ]}>{ConvertNumbers(21)}</Text>

        <SvgIcon svg={chat}  width={20} viewBox={'0 0 120 120'} color={'#000d'} />
        <Text padding={[, 20, , ]}>{ConvertNumbers(11)}</Text>

        {
          likedByOwnChannel && <Yt_avatar source={require('../../../assets/account.jpg')} width={15} height={15} />
        }

      </ViewLayout>

    </ViewLayout>
  )
}

export default index
