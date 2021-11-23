/*
  this commponent recieve value as an array =>
  (
  border | borderWidth | borderColor | borderRudius / padding / margin
  )
  and return array after handle the values wish recieved (arrays)
*/

const handleShorts = (shortArray, short) => {

  // check if the value is exist
  let type3 = typeof shortArray[3] !== 'object';
  let type2 = typeof shortArray[2] !== 'object';
  let type1 = typeof shortArray[1] !== 'object';
  let type0 = typeof shortArray[0] !== 'object';

  // handle the input values
  let i3 = type3 ? shortArray[3] : type1 ? shortArray[1] : type0 ? shortArray[0] : null;
  let i2 = type2 ? shortArray[2] : type0 ? shortArray[0] : null;
  let i1 = type1 ? shortArray[1] : type0 ? shortArray[0] : null;
  let i0 = type0 ? shortArray[0] : null;

  // hendle the output
  return typeof short !== 'object' && short !== 'undefined'
  ? [short,short,short,short]
  : [i0,i1,i2,i3];
  
}

export default handleShorts
