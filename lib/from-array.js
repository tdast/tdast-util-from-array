import td from 'tdastscript';

export default function fromArray(array, options = {}) {
  if (!Array.isArray(array) || !(array[0] instanceof Object)) {
    return td('table');
  }

  const columnValues = Object.keys(array[0]);
  const columns = options.columns
    ? options.columns.map((column) => td('column', column))
    : columnValues.map((columnValue) => td('column', columnValue));

  return td('table', [
    td('row', columns),
    ...array.map((row) => td('row', Object.values(row))),
  ]);
}
