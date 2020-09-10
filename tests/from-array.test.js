import fromArray from '../lib/from-array';

describe(fromArray, () => {
  it('should transform empty array to empty tree', () => {
    expect(fromArray([])).toEqual({
      type: 'table',
      children: [],
    });
  });

  it('should transform invalid inputs to empty tree', () => {
    expect(fromArray()).toEqual({
      type: 'table',
      children: [],
    });
    expect(fromArray(null)).toEqual({
      type: 'table',
      children: [],
    });
    expect(fromArray({ a: 1 })).toEqual({
      type: 'table',
      children: [],
    });
    expect(fromArray(['a', 'b'])).toEqual({
      type: 'table',
      children: [],
    });
  });

  it('should transform array of objects to tdast', () => {
    expect(
      fromArray([
        { column1: 1, column2: 'two', column3: 3, column4: null },
        { column1: null, column2: 'two', column3: 33, column4: 'four' },
      ]),
    ).toEqual({
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
  });

  it('should apply column properties with options.columns', () => {
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
    expect(
      fromArray(
        [
          { column1: 1, column2: 'two', column3: 3, column4: null },
          { column1: null, column2: 'two', column3: 33, column4: 'four' },
        ],
        options,
      ),
    ).toEqual({
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
  });
});
