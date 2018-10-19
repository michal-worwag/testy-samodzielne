const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
  describe('normal hill', () => {
    it('should return 86 points', () => {
      const actual = calculateDistancePoints(111, 'normal', 98);

      const expected = '86';

      assert.equal(actual, expected);
    });
    it('should return 77 points', () => {
      const actual = calculateDistancePoints(106.5, 'normal', 98);

      const expected = '77';

      assert.equal(actual, expected);
    });
    it('should return 65 points', () => {
      const actual = calculateDistancePoints(100.5, 'normal', 98);

      const expected = '65';

      assert.equal(actual, expected);
    });
    it('should return 61 points', () => {
      const actual = calculateDistancePoints(98.5, 'normal', 98);

      const expected = '61';

      assert.equal(actual, expected);
    });
    it('should return 24 points', () => {
      const actual = calculateDistancePoints(80, 'normal', 98);

      const expected = '24';

      assert.equal(actual, expected);
    });
  });

  describe('big hill', () => {
    it('should return 85.2 points', () => {
      const actual = calculateDistancePoints(134, 'big', 120);

      const expected = '85.2';

      assert.equal(actual, expected);
    });
    it('should return 83.4 points', () => {
      const actual = calculateDistancePoints(133, 'big', 120);

      const expected = '83.4';

      assert.equal(actual, expected);
    });
    it('should return 69.9 points', () => {
      const actual = calculateDistancePoints(125.5, 'big', 120);

      const expected = '69.9';

      assert.equal(actual, expected);
    });
    it('should return 61.8 points', () => {
      const actual = calculateDistancePoints(121, 'big', 120);

      const expected = '61.8';

      assert.equal(actual, expected);
    });
    it('should return 37.5 points', () => {
      const actual = calculateDistancePoints(107.5, 'big', 120);

      const expected = '37.5';

      assert.equal(actual, expected);
    });
  });

  describe('mamut hill', () => {
    it('should return 153 points', () => {
      const actual = calculateDistancePoints(227.5, 'mamut', 200);

      const expected = '153';

      assert.equal(actual, expected);
    });
    it('should return 151.2 points', () => {
      const actual = calculateDistancePoints(226, 'mamut', 200);

      const expected = '151.2';

      assert.equal(actual, expected);
    });
    it('should return 146.4 points', () => {
      const actual = calculateDistancePoints(222, 'mamut', 200);

      const expected = '146.4';

      assert.equal(actual, expected);
    });
    it('should return 120.6 points', () => {
      const actual = calculateDistancePoints(200.5, 'mamut', 200);

      const expected = '120.6';

      assert.equal(actual, expected);
    });
    it('should return 84 points', () => {
      const actual = calculateDistancePoints(170, 'mamut', 200);

      const expected = '84';

      assert.equal(actual, expected);
    });
  });
})