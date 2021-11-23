import { Icons } from "../../../assets/Icons";

const commentActionData = [
  {
    title: 'Report',
    icon: Icons.path.report,
    onPress: ()=>console.log('Report')
  },
  {
    title: 'Cancel',
    icon: Icons.path.delete_,
    onPress: ()=>console.log('goBack')
  },
]

const filterActionData = [
  {
    title: 'Top commnets',
    onPress: ()=>console.log('top')
  },
  {
    title: 'Newes first',
    onPress: ()=>console.log('new')
  },
]

export {
  commentActionData,
  filterActionData
};