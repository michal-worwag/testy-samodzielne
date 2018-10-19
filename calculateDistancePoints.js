const calculateDistancePoints = (distance, hillSize, kPoint) => {
  let totalDistancePoints;
  switch(true) {
    case (hillSize == 'normal'):
      totalDistancePoints = 60 + (2 * (distance - kPoint));
      return totalDistancePoints;
    break;

    case (hillSize == 'big'):
      totalDistancePoints = 60 + (1.8 * (distance - kPoint));
      return totalDistancePoints;
    break;

    case (hillSize == 'mamut'):
      totalDistancePoints = 120 + (1.2 * (distance - kPoint));
      return totalDistancePoints;
    break;

    default:
      return 'Ooops we do not have any other hills';
  }
};

module.exports = calculateDistancePoints;