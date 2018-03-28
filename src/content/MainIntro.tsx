import {
  anchor,
  italic,
  ParagraphList,
} from '../paragraph';

const mailLink = {
  text: 'info@hereslookingateuclid.com',
  url: 'mailto:info@hereslookingateuclid.com',
};

const intro: ParagraphList = [
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

export default intro;
