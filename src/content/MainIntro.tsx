import {
  leafPageData,
  textPageItem,
} from '../page';
import {
  anchor,
  italic,
  ParagraphList,
} from '../paragraph';

const name = 'introduction';

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

const pageData = leafPageData(name, 'Introduction', [
  textPageItem(paragraphs),
]);

export default pageData;
