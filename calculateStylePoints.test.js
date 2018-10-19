const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');

describe('calculateStylepoints', () => {
    it('should return 55 points', () => {
      const actual = calculateStylePoints([18.0, 18.5, 17.5, 18.5, 18.5]);

      const expected = '55';

      assert.equal(actual, expected);
    });

    it('should return 55.5 points', () => {
      const actual = calculateStylePoints([18.5, 19.0, 18.5, 18.5, 18.0]);

      const expected = '55.5';

      assert.equal(actual, expected);
    });

    it('should return 48 points', () => {
      const actual = calculateStylePoints([15.5, 15.5, 17.0, 16.5, 16.0]);

      const expected = '48';

      assert.equal(actual, expected);
    });

    it('should return 47 points', () => {
      const actual = calculateStylePoints([15.5, 16.5, 15.5, 15.5, 16.0]);

      const expected = '47';

      assert.equal(actual, expected);
    });

    it('should return 52.5 points', () => {
      const actual = calculateStylePoints([17.5, 17.5, 17.5, 17.5, 17.0 ]);

      const expected = '52.5';

      assert.equal(actual, expected);
    });
  });
