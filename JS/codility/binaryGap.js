function binaryGap(integerNumber) {
  const binaryNumber = integerNumber.toString(2);
  const result = [...binaryNumber].reduce(
    (acc, item) => {
      if (item === '0' && acc.max !== null) {
        acc.current = acc.current + 1;
      }
      if (item === '1') {
        acc.max = Math.max(acc.max || 0, acc.current);
        acc.current = 0;
      }
      return acc;
    },
    { current: 0, max: null }
  );
  return result.max;
}
binaryGap(44);
