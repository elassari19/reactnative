/*
  recieve time by millisecond then
  convert it to date (name of day or day and month)
*/

const stringDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const today = new Date().setHours(0,0,0,0);

const second  = 1000,
      minute  = second * 60,
      hours   = minute * 60,
      day     = hours  * 24,
      weeks   = day    * 7,
      years   = day    * 364;

// convert time from millisecond to string date ( Sun Nov 21 2021 )
const convert = (number) => new Date(number).toString().slice(0,15).split(' ');

// detecte the date
const calculateDays = (millisecond) => {

  // calculate the time passed by millisecond
  let calculateTime = today - millisecond;

  // return the correct date 
  return calculateTime > years
        ? `${convert(millisecond)[2]} ${convert(millisecond)[1]} ${convert(millisecond)[3]}` 
        : calculateTime > weeks
        ? `${convert(millisecond)[2]} ${convert(millisecond)[1]}` 
        : calculateTime > day * 2
        ? `${stringDays.filter(item=> item.includes(convert(millisecond)[0]))[0]}` 
        : millisecond < today
        ? 'Yesterday'
        : 'Today';
}

export default calculateDays

