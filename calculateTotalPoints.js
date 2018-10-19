const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
  const stylePoints = calculateStylePoints(styleNotes);

  const totalSum = distancePoints + stylePoints + windFactor + gateFactor;
  const total = Math.round(totalSum * 10) / 10;

  return total;
}

module.exports = calculateTotalPoints;