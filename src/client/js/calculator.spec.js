import * as calculator from './calculator.js';

describe('Math operations', function() {
  describe('Sum operation', function() {
    it('should return 3 for 3 + null', function() {
      const result = calculator.sum(3, null);
      expect(result).toEqual(3);
    });

    it('should return 5 for 2 + 3', function() {
      const result = calculator.sum(2, 3);
      expect(result).toEqual(5);
    });
  });

  describe('Sum operation', function() {
    it('should return 1 for 3 - 2', function() {
      const result = calculator.subtract(3, 2);
      expect(result).toEqual(1);
    });
  });
});
