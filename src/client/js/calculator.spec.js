import * as calculator from './calculator.js';

describe('Math operation:', function() {
  describe('Sum', function() {
    it('should return 3 for 3 + null', function() {
      const result = calculator.sum(3, null);
      expect(result).toEqual(3);
    });

    it('should return 5 for 2 + 3', function() {
      const result = calculator.sum(2, 3);
      expect(result).toEqual(5);
    });
  });

  describe('Subtract', function() {
    it('should return 1 for 3 - 2', function() {
      const result = calculator.subtract(3, 2);
      expect(result).toEqual(1);
    });
  });

  describe('Divide', function() {
    it('should return 0.5 for 2 / 4', function() {
      const result = calculator.divide(2, 4);
      expect(result).toEqual(0.5);
    });
  });

  describe('Multiply', function() {
    it('should return 6 for 2 * 3', function() {
      const result = calculator.multiply(2, 3);
      expect(result).toEqual(6);
    });
  });
});
