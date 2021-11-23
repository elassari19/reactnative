const second  = 1000,
      minute  = second * 60,
      hours   = minute * 60,
      days    = hours  * 24,
      weeks   = days   * 7,
      month   = days   * 30,
      years   = days   * 364;

const times = (time) => {
  return time >= years
        ? `${Math.floor(time / years)} years ago`
        : time >= month
        ? `${Math.floor(time / month)} months ago`
        : time >= weeks
        ? `${Math.floor(time / weeks)} weeks ago`
        : time >= days
        ? `${Math.floor(time / days)} days ago`
        : time >= hours
        ? `${Math.floor(time / hours)} hours ago`
        : time >= minute
        ? `${Math.floor(time / minute)} minutes ago`
        : `soon`;
}

export default times