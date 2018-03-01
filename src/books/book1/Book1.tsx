import { Book } from '../../shared/types';

import book1Prop1 from './Book1Prop1';
import book1Prop2 from './Book1Prop2';

const book: Book = {
  propositions: [
    (book1Prop1),
    (book1Prop2),
  ]
};

export default book;
