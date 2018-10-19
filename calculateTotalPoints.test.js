const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
  describe('normal hill', () => {
    it('should return 131.8', () => {
        const actual = calculateTotalPoints(111, 'normal', 98, [19.0, 19.5, 19.0, 19.0, 19.0], 3.2, -14.4);

        const expected = '131.8';

        assert.equal(actual, expected);
    });

    it('should return 125.9', () => {
        const actual = calculateTotalPoints(106.5, 'normal', 98, [18.5, 18.5, 18.5, 19.0, 19.0], 6.4, -13.5);

        const expected = '125.9';

        assert.equal(actual, expected);
    });

    it('should return 60.8', () => {
        const actual = calculateTotalPoints(80, 'normal', 98, [15.0, 15.5, 16.0, 15.5, 16.0], 0, -10.2);

        const expected = '60.8';

        assert.equal(actual, expected);
    });
  });

  describe('big hill', () => {
    it('should return 137.3', () => {
        const actual = calculateTotalPoints(134, 'big', 120, [19.0, 20.0, 19.5, 19.0, 18.5], 0, -5.4)

        const expected = '137.3';

        assert.equal(actual, expected);
    });

    it('should return 134.8', () => {
        const actual = calculateTotalPoints(133, 'big', 120, [18.5, 18.5, 19.0, 19.0, 19.0], 0, -5.1)

        const expected = '134.8';

        assert.equal(actual, expected);
    });

    it('should return 105.7', () => {
        const actual = calculateTotalPoints(121, 'big', 120, [17.5, 17.5, 17.5, 17.5, 17.5], 0, -8.6)

        const expected = '105.7';

        assert.equal(actual, expected);
    })
  });
  describe('mamut hill', () => {
    it('should return 208.3', () => {
        const actual = calculateTotalPoints(227.5, 'mamut', 200, [18.0, 18.5, 17.5, 18.5, 18.5], 8.7, -8.4);

        const expected = '208.3';

        assert.equal(actual, expected);
    });

    it('should return 179.5', () => {
        const actual = calculateTotalPoints(208.5, 'mamut', 200, [17.5, 17.5, 17.5, 17.0, 17.0], 0, -2.7);

        const expected = '179.5';

        assert.equal(actual, expected);
    });

    it('should return 126.9', () => {
        const actual = calculateTotalPoints(170, 'mamut', 200, [16.0, 15.5, 14.5, 16.0, 16.0], 0, -4.6);

        const expected = '126.9';

        assert.equal(actual, expected);
    });
  });
});