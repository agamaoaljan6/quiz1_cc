module.exports = timeStamp => {
  const minutes = 1000 * 60;
  const m = Math.floor(timeStamp - minutes);
  const h = Math.floor(m / 60);
  const d = Math.floor(h / 24);
  let day = '';

  switch (timeStamp) {
    case (d >= 1):
      return day `${d} Days ago`;
      break;
    case (h >= 1):
      return day `${h} Hours ago`;
      break;
    case (m >= 1):
      return day `${m} Minutes ago`;
      break;
    default:
      return 'Just now'
  }
}
