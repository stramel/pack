import {Writable, Readable} from 'stream';
import {WriteStream, ReadStream} from 'fs';

export type Stdout = Writable | WriteStream;
export type Stdin = Readable | ReadStream;
export type Package = {
  name: string;
  version: string;
};

export type Tree = {
  name: string;
  children?: Trees;
  hint?: string;
  hidden?: boolean;
  color?: string;
};

export type Trees = Array<Tree>;

export type ReporterSpinner = {
  tick: (name: string) => void;
  end: () => void;
};

export type ReporterSpinnerSet = {
  spinners: Array<ReporterSetSpinner>;
  end: () => void;
};

export type ReporterSetSpinner = {
  clear: () => void;
  setPrefix: (current: number, prefix: string) => void;
  tick: (msg: string) => void;
  end: () => void;
};