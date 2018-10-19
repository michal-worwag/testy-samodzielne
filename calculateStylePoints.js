const calculateStylePoints = (styleNotes) => {
  if (styleNotes.length = 5) {
    let orderedStylePoints = styleNotes.sort(function(a, b) {
      return a - b;
    });
    const [ ,second, third, fourth, ] = orderedStylePoints;
    return second + third + fourth;
  } else {
    return 'There must be 5 notes from the judges'
  }
};

module.exports = calculateStylePoints;