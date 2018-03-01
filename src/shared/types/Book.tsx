import { Proposition } from './Proposition';

export type Book = {
  propositions: ReadonlyArray<Proposition>;
}

export type Books = ReadonlyArray<Book>;

export type BookProp = {
  readonly bookNum: number;
  readonly propNum: number;
};
