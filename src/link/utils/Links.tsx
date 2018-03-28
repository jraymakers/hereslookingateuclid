import {
  Paragraph,
} from '../../paragraph';
import {
  StepsAndDiagram,
} from '../../stepsAndDiagram';

import {
  LinkInfo,
  SubtitledLinkInfo,
} from '../types/LinkInfo';

import {
  // axiomNavText,
  // axiomTitle,
  bookTitle,
  commonNotionNavText,
  commonNotionTitle,
  definitionNavText,
  definitionTitle,
  introductionText,
  postulateNavText,
  postulateTitle,
  propositionNavText,
  propositionTitle,
} from './Text';
import {
  // axiomUrl,
  bookContentsUrl,
  bookIntroUrl,
  commonNotionStepUrl,
  commonNotionUrl,
  definitionUrl,
  mainIntroUrl,
  postulateUrl,
  propositionUrl,
} from './Urls';

export const mainIntroLink: LinkInfo = {
  text: introductionText,
  url: mainIntroUrl,
};

// export function axiomNavLink(bookName: string, pageName: string): LinkInfo {
//   return {
//     text: axiomNavText(bookName, pageName),
//     url: axiomUrl(bookName, pageName),
//   };
// }

// export function axiomTitleLink(bookName: string, stepsAndDiagram: StepsAndDiagram): SubtitledLinkInfo {
//   return {
//     text: axiomTitle(stepsAndDiagram.name),
//     subtitle: stepsAndDiagram.summary,
//     url: axiomUrl(bookName, stepsAndDiagram.name),
//   };
// }

export function bookIntroLink(bookName: string): LinkInfo {
  return {
    text: introductionText,
    url: bookIntroUrl(bookName),
  };
}

export function bookTitleContentsLink(bookName: string): LinkInfo {
  return {
    text: bookTitle(bookName),
    url: bookContentsUrl(bookName),
  };
}

export function bookTitleIntroLink(bookName: string): LinkInfo {
  return {
    text: bookTitle(bookName),
    url: bookIntroUrl(bookName),
  };
}

export function commonNotionNavLink(bookName: string, pageName: string): LinkInfo {
  return {
    text: commonNotionNavText(bookName, pageName),
    url: commonNotionUrl(bookName, pageName),
  };
}

export function commonNotionTitleLink(bookName: string, stepsAndDiagram: StepsAndDiagram): SubtitledLinkInfo {
  return {
    text: commonNotionTitle(stepsAndDiagram.name),
    subtitle: stepsAndDiagram.summary,
    url: commonNotionUrl(bookName, stepsAndDiagram.name),
  };
}

export function definitionNavLink(bookName: string, pageName: string): LinkInfo {
  return {
    text: definitionNavText(bookName, pageName),
    url: definitionUrl(bookName, pageName),
  };
}

export function definitionTitleLink(bookName: string, stepsAndDiagram: StepsAndDiagram): SubtitledLinkInfo {
  return {
    text: definitionTitle(stepsAndDiagram.name),
    subtitle: stepsAndDiagram.summary,
    url: definitionUrl(bookName, stepsAndDiagram.name),
  };
}

export function postulateNavLink(bookName: string, pageName: string): LinkInfo {
  return {
    text: postulateNavText(bookName, pageName),
    url: postulateUrl(bookName, pageName),
  };
}

export function postulateTitleLink(bookName: string, stepsAndDiagram: StepsAndDiagram): SubtitledLinkInfo {
  return {
    text: postulateTitle(stepsAndDiagram.name),
    subtitle: stepsAndDiagram.summary,
    url: postulateUrl(bookName, stepsAndDiagram.name),
  };
}

export function propositionNavLink(bookName: string, pageName: string): LinkInfo {
  return {
    text: propositionNavText(bookName, pageName),
    url: propositionUrl(bookName, pageName),
  };
}

export function propositionTitleLink(bookName: string, stepsAndDiagram: StepsAndDiagram): SubtitledLinkInfo {
  return {
    text: propositionTitle(stepsAndDiagram.name),
    subtitle: stepsAndDiagram.summary,
    url: propositionUrl(bookName, stepsAndDiagram.name),
  };
}
