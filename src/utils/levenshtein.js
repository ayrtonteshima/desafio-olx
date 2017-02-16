import R from 'ramda';

const rangeToIndex = R.compose(R.inc, R.length);

const getMatrixBase = R.useWith(R.prepend, [
  R.compose(R.range(0), rangeToIndex),
  R.compose(R.aperture(1), R.range(1), rangeToIndex)
]);

const getPrevValue = (matrix, i, j) => matrix[i - 1][j - 1];

const getPenality = (matrix, i, j) => (Math.min.apply(null, [
  matrix[i - 1][j - 1],
  matrix[i][j - 1],
  matrix[i - 1][j]
]) + 1);

const getDistanceWords = (matrixBase, a, b, handleOnTrue, handleOnFalse) => {
  const newMatrix = R.clone(matrixBase);
  let i;
  let j;
  for (i = 1; i <= b.length; i += 1) {
    for (j = 1; j <= a.length; j += 1) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        newMatrix[i][j] = handleOnTrue(newMatrix, i, j);
      } else {
        newMatrix[i][j] = handleOnFalse(newMatrix, i, j);
      }
    }
  }
  return newMatrix[b.length][a.length];
};

export default R.curry((a, b) => {
  if (a.length === 0) return b.length;
  if (b.length === 0) return a.length;

  const matrixBase = getMatrixBase(a, b);

  return getDistanceWords(matrixBase, a, b, getPrevValue, getPenality);
});