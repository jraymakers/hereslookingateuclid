import {
  textPageData,
} from '../page';
import {
  anchor,
  italic,
  ParagraphList,
} from '../paragraph';

const name = 'introduction';
const title = 'Introduction';

const mailLink = {
  text: 'info@hereslookingateuclid.com',
  url: 'mailto:info@hereslookingateuclid.com',
};

const paragraphs: ParagraphList = [
  [
    [ `An online adaptation of Euclid's `, italic('Elements'), `.` ],
  ],
  [
    [ 'Currently a work in progress.' ],
  ],
  [
    [ 'For more details, contact ', anchor(mailLink), '.' ],
  ],
];

const pageData = textPageData(name, title, paragraphs);

export default pageData;
