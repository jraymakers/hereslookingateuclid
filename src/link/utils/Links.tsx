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
  bookContentsUrl,
  bookIntroUrl,
  defGroupUrl,
  mainIntroUrl,
  propUrl,
} from './Urls';

export const mainIntroLink: LinkInfo = {
  text: 'Introduction',
  url: mainIntroUrl
};

export function bookIntroLink(bookName: string): LinkInfo {
  return {
    text: 'Introduction',
    url: bookIntroUrl(bookName)
  };
}

export function bookTitle(bookName: string): string {
  return `Book ${bookName}`;
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
    text: `${bookName}.Def${defGroupName}`,
    url: defGroupUrl(bookName, defGroupName)
  };
}

export function defGroupTitle(defGroupName: string, numSteps: number): string {
  return `Definition${numSteps > 1 ? 's' : ''} ${defGroupName}`;
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
    text: `${bookName}.${propName}`,
    url: propUrl(bookName, propName)
  };
}

export function propTitle(propName: string): string {
  return `Proposition ${propName}`;
}

export function propTitleLink(bookName: string, proposition: StepsAndDiagram): SubtitledLinkInfo {
  return {
    text: propTitle(proposition.name),
    subtitle: proposition.summary,
    url: propUrl(bookName, proposition.name)
  };
}
