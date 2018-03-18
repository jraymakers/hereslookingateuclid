import {
  Paragraph,
} from '../../paragraph';
import {
  StepsAndDiagram
} from '../../stepsAndDiagram';

import {
  LinkInfo,
  SubtitledLinkInfo,
} from '../types/LinkInfo';

import {
  introductionText,
  bookTitle,
  defGroupNavText,
  defGroupTitle,
  propNavText,
  propTitle,
} from './Text';
import {
  bookContentsUrl,
  bookIntroUrl,
  defGroupUrl,
  mainIntroUrl,
  propUrl,
} from './Urls';

export const mainIntroLink: LinkInfo = {
  text: introductionText,
  url: mainIntroUrl
};

export function bookIntroLink(bookName: string): LinkInfo {
  return {
    text: introductionText,
    url: bookIntroUrl(bookName)
  };
}

export function bookTitleContentsLink(bookName: string): LinkInfo {
  return {
    text: bookTitle(bookName),
    url: bookContentsUrl(bookName)
  };
}

export function bookTitleIntroLink(bookName: string): LinkInfo {
  return {
    text: bookTitle(bookName),
    url: bookIntroUrl(bookName)
  };
}

export function defGroupNavLink(bookName: string, defGroupName: string): LinkInfo {
  return {
    text: defGroupNavText(bookName, defGroupName),
    url: defGroupUrl(bookName, defGroupName)
  };
}

export function defGroupTitleLink(bookName: string, defGroup: StepsAndDiagram): SubtitledLinkInfo {
  return {
    text: defGroupTitle(defGroup.name, defGroup.steps.length),
    subtitle: defGroup.summary,
    url: defGroupUrl(bookName, defGroup.name)
  };
}

export function propNavLink(bookName: string, propName: string): LinkInfo {
  return {
    text: propNavText(bookName, propName),
    url: propUrl(bookName, propName)
  };
}

export function propTitleLink(bookName: string, proposition: StepsAndDiagram): SubtitledLinkInfo {
  return {
    text: propTitle(proposition.name),
    subtitle: proposition.summary,
    url: propUrl(bookName, proposition.name)
  };
}
