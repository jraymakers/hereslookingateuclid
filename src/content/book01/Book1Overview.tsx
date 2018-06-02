import {
  leafPageData,
  textPageItem,
} from '../../page';
import {
  ParagraphList,
} from '../../paragraph';

const name = 'overview';

const paragraphs: ParagraphList = [
  [
    [ 'The basic principles of geometry in a flat plane.' ],
  ],
];

const pageData = leafPageData(name, 'Overview', [
  textPageItem(paragraphs),
]);

export default pageData;
