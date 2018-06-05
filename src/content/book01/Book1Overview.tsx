import {
  textPageData,
} from '../../page';
import {
  ParagraphList,
} from '../../paragraph';

const name = 'overview';
const title = 'Overview';

const paragraphs: ParagraphList = [
  [
    [ 'The basic principles of geometry in a flat plane.' ],
  ],
];

const pageData = textPageData(name, title, paragraphs);

export default pageData;
