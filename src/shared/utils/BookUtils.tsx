import {
  Book,
  BookProp,
  Books,
  Proposition,
} from '../types';

export function validBook(books: Books, bookNum: number): boolean {
  return bookNum >= 1 && bookNum <= books.length;
}

export function validBookProp(books: Books, bookProp: BookProp): boolean {
  return !!getProposition(books, bookProp);
}

export function getBook(books: Books, bookNum: number): Book | null {
  return books[bookNum - 1] || null;
}

export function getProposition(books: Books, bookProp: BookProp): Proposition | null {
  const { bookNum, propNum } = bookProp;
  const book = getBook(books, bookNum);
  return book && book.propositions[propNum - 1] || null;
}

export function getPrevBookProp(books: Books, bookProp: BookProp): BookProp | null {
  const { bookNum, propNum } = bookProp;
  const book = getBook(books, bookNum);
  if (!book) {
    return null;
  }
  if (propNum > 1) {
    return {
      bookNum: bookNum,
      propNum: propNum - 1,
    };
  }
  if (bookNum <= 1) {
    return null;
  }
  const prevBookNum = bookNum - 1;
  const prevBook = getBook(books, prevBookNum);
  if (!prevBook) {
    return null;
  }
  return {
    bookNum: prevBookNum,
    propNum: prevBook.propositions.length,
  };
}

export function getNextBookProp(books: Books, bookProp: BookProp): BookProp | null {
  const { bookNum, propNum } = bookProp;
  const book = getBook(books, bookNum);
  if (!book) {
    return null;
  }
  if (propNum < book.propositions.length) {
    return {
      bookNum: bookNum,
      propNum: propNum + 1,
    };
  }
  if (bookNum >= books.length) {
    return null;
  }
  const nextBookNum = bookNum + 1;
  const nextBook = getBook(books, nextBookNum);
  if (!nextBook) {
    return null;
  }
  return {
    bookNum: nextBookNum,
    propNum: 1,
  };
}
