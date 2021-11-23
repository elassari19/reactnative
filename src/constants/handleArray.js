/*
  recieve array (padding or margin)
  return new array
*/

const handleArray = (array) => {

  // check if the value is exist
  let type3 = typeof array[3] == 'number';
  let type2 = typeof array[2] == 'number';
  let type1 = typeof array[1] == 'number';
  let type0 = typeof array[0] == 'number';

  // handle the input values
  let i3 = type3 ? array[3] : type1 ? array[1] : type0 ? array[0] : null;
  let i2 = type2 ? array[2] : type0 ? array[0] : null;
  let i1 = type1 ? array[1] : type0 ? array[0] : null;
  let i0 = type0 ? array[0] : null;

  return [i0,i1,i2,i3];
}

export default handleArray;