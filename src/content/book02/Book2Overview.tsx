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
    [ 'This is the overview of Book II.' ],
  ],
];

const pageData = textPageData(name, title, paragraphs);

export default pageData;
