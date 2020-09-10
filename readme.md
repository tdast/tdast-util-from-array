# tdast-util-from-array

[**tdast**][tdast] utility to transform a JS array into tdast.

---

## Install

```sh
npm install tdast-util-from-array
```

## Use

```js
import fromArray from 'tdast-util-from-array';

const array = [
  { column1: 1, column2: 'two', column3: 3, column4: null },
  { column1: null, column2: 'two', column3: 33, column4: 'four' },
];

expect(fromArray(array)).toEqual({
  type: 'table',
  children: [
    {
      type: 'row',
      index: 0,
      children: [
        {
          type: 'column',
          index: 0,
          value: 'column1',
        },
        {
          type: 'column',
          index: 1,
          value: 'column2',
        },
        {
          type: 'column',
          index: 2,
          value: 'column3',
        },
        {
          type: 'column',
          index: 3,
          value: 'column4',
        },
      ],
    },
    {
      type: 'row',
      index: 1,
      children: [
        {
          type: 'cell',
          columnIndex: 0,
          rowIndex: 1,
          value: 1,
        },
        {
          type: 'cell',
          columnIndex: 1,
          rowIndex: 1,
          value: 'two',
        },
        {
          type: 'cell',
          columnIndex: 2,
          rowIndex: 1,
          value: 3,
        },
        {
          type: 'cell',
          columnIndex: 3,
          rowIndex: 1,
          value: null,
        },
      ],
    },
    {
      type: 'row',
      index: 2,
      children: [
        {
          type: 'cell',
          columnIndex: 0,
          rowIndex: 2,
          value: null,
        },
        {
          type: 'cell',
          columnIndex: 1,
          rowIndex: 2,
          value: 'two',
        },
        {
          type: 'cell',
          columnIndex: 2,
          rowIndex: 2,
          value: 33,
        },
        {
          type: 'cell',
          columnIndex: 3,
          rowIndex: 2,
          value: 'four',
        },
      ],
    },
  ],
});
```

## API

### `fromArray(array[, options])`

#### Interface
```ts
function fromArray(array: any[], options?: Options): Table
```

Transforms a JS array into a tdast tree.

Created `Row`, `Column` and `Cell` nodes are automatically assigned relevant row/column indices.

Infers and creates columns from object keys if not explicitly specified.  Columns can be explicitly specified in `options`, affording more structure to the tdast `Column` nodes.

#### Example

```js
const array = [
  { column1: 1, column2: 'two', column3: 3, column4: null },
  { column1: null, column2: 'two', column3: 33, column4: 'four' },
];

const options = {
  columns: [
    {
      label: 'Column 1',
      data: { category: 'A' },
      dataType: 'number',
      value: 'column1',
    },
    {
      label: 'Column 2',
      data: { category: 'B' },
      dataType: 'string',
      value: 'column2',
    },
    {
      label: 'Column 3',
      data: { category: 'A' },
      dataType: 'number',
      value: 'column3',
    },
    {
      label: 'Column 1',
      data: { category: 'B' },
      dataType: 'mixed',
      value: 'column4',
    },
  ],
};

expect(fromArray(array, options)).toEqual({
  type: 'table',
  children: [
    {
      type: 'row',
      index: 0,
      children: [
        {
          type: 'column',
          index: 0,
          label: 'Column 1',
          data: { category: 'A' },
          dataType: 'number',
          value: 'column1',
        },
        {
          type: 'column',
          index: 1,
          label: 'Column 2',
          data: { category: 'B' },
          dataType: 'string',
          value: 'column2',
        },
        {
          type: 'column',
          index: 2,
          label: 'Column 3',
          data: { category: 'A' },
          dataType: 'number',
          value: 'column3',
        },
        {
          type: 'column',
          index: 3,
          label: 'Column 1',
          data: { category: 'B' },
          dataType: 'mixed',
          value: 'column4',
        },
      ],
    },
    {
      type: 'row',
      index: 1,
      children: [
        {
          type: 'cell',
          columnIndex: 0,
          rowIndex: 1,
          value: 1,
        },
        {
          type: 'cell',
          columnIndex: 1,
          rowIndex: 1,
          value: 'two',
        },
        {
          type: 'cell',
          columnIndex: 2,
          rowIndex: 1,
          value: 3,
        },
        {
          type: 'cell',
          columnIndex: 3,
          rowIndex: 1,
          value: null,
        },
      ],
    },
    {
      type: 'row',
      index: 2,
      children: [
        {
          type: 'cell',
          columnIndex: 0,
          rowIndex: 2,
          value: null,
        },
        {
          type: 'cell',
          columnIndex: 1,
          rowIndex: 2,
          value: 'two',
        },
        {
          type: 'cell',
          columnIndex: 2,
          rowIndex: 2,
          value: 33,
        },
        {
          type: 'cell',
          columnIndex: 3,
          rowIndex: 2,
          value: 'four',
        },
      ],
    },
  ],
});
```

#### Related interfaces
```ts
interface Column {
  value: any;
  data?: Data;
  dataType?: string;
  label?: string;
}

interface Options {
  columns?: Column[];
}
```

<!-- Definitions -->
[tdast]: https://github.com/tdast/tdast
