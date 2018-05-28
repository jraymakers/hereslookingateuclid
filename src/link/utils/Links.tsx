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
  bookTitle,
  commonNotionNavText,
  commonNotionRefText,
  commonNotionTitle,
  definitionNavText,
  definitionRefText,
  definitionTitle,
  introductionText,
  postulateNavText,
  postulateRefText,
  postulateTitle,
  propositionNavText,
  propositionRefText,
  propositionTitle,
} from './Text';
import {
  bookIntroUrl,
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

export function bookIntroLink(bookName: string): LinkInfo {
  return {
    text: introductionText,
    url: bookIntroUrl(bookName),
  };
}

export function bookTitleIntroLink(bookName: string): LinkInfo {
  return {
    text: bookTitle(bookName),
    url: bookIntroUrl(bookName),
  };
}

export function commonNotionNavLink(bookName: string, pageName: string, stepName?: string): LinkInfo {
  return {
    text: commonNotionNavText(bookName, pageName),
    url: commonNotionUrl(bookName, pageName, stepName),
  };
}

export function commonNotionRefLink(bookName: string, pageName: string, stepName?: string): LinkInfo {
  return {
    text: commonNotionRefText(bookName, pageName),
    url: commonNotionUrl(bookName, pageName, stepName),
  };
}

export function commonNotionTitleLink(bookName: string, stepsAndDiagram: StepsAndDiagram): SubtitledLinkInfo {
  return {
    text: commonNotionTitle(stepsAndDiagram.name),
    subtitle: stepsAndDiagram.summary,
    url: commonNotionUrl(bookName, stepsAndDiagram.name),
  };
}

export function definitionNavLink(bookName: string, pageName: string, stepName?: string): LinkInfo {
  return {
    text: definitionNavText(bookName, pageName),
    url: definitionUrl(bookName, pageName, stepName),
  };
}

export function definitionRefLink(bookName: string, pageName: string, stepName: string): LinkInfo {
  return {
    text: definitionRefText(bookName, stepName),
    url: definitionUrl(bookName, pageName, stepName),
  };
}

export function definitionTitleLink(bookName: string, stepsAndDiagram: StepsAndDiagram): SubtitledLinkInfo {
  return {
    text: definitionTitle(stepsAndDiagram.name),
    subtitle: stepsAndDiagram.summary,
    url: definitionUrl(bookName, stepsAndDiagram.name),
  };
}

export function postulateNavLink(bookName: string, pageName: string, stepName?: string): LinkInfo {
  return {
    text: postulateNavText(bookName, pageName),
    url: postulateUrl(bookName, pageName, stepName),
  };
}

export function postulateRefLink(bookName: string, pageName: string, stepName?: string): LinkInfo {
  return {
    text: postulateRefText(bookName, pageName),
    url: postulateUrl(bookName, pageName, stepName),
  };
}

export function postulateTitleLink(bookName: string, stepsAndDiagram: StepsAndDiagram): SubtitledLinkInfo {
  return {
    text: postulateTitle(stepsAndDiagram.name),
    subtitle: stepsAndDiagram.summary,
    url: postulateUrl(bookName, stepsAndDiagram.name),
  };
}

export function propositionNavLink(bookName: string, pageName: string, stepName?: string): LinkInfo {
  return {
    text: propositionNavText(bookName, pageName),
    url: propositionUrl(bookName, pageName, stepName),
  };
}

export function propositionRefLink(bookName: string, pageName: string, stepName?: string): LinkInfo {
  return {
    text: propositionRefText(bookName, pageName),
    url: propositionUrl(bookName, pageName, stepName),
  };
}

export function propositionTitleLink(bookName: string, stepsAndDiagram: StepsAndDiagram): SubtitledLinkInfo {
  return {
    text: propositionTitle(stepsAndDiagram.name),
    subtitle: stepsAndDiagram.summary,
    url: propositionUrl(bookName, stepsAndDiagram.name),
  };
}
