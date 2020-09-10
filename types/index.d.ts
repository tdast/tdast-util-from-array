import { Data, Table } from 'tdast-types';

interface Column {
  value: any;
  data?: Data;
  dataType?: string;
  label?: string;
}

interface Options {
  columns?: Column[];
}

export default function fromArray(array: any[], options?: Options): Table;
