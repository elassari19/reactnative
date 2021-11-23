
const handleStringLength = (string,stringLength=50,suffixEnd='...') => {
  return string.length > stringLength ? string.slice(0, stringLength)+suffixEnd : string
}

export default handleStringLength;