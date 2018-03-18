import {
  Paragraph,
} from '../../paragraph';

import {
  DefinitionGroup,
  Proposition,
} from '../../page/types';

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

export function defGroupTitle(group: DefinitionGroup): string {
  return `Definition${group.steps.length > 1 ? 's' : ''} ${group.defGroupName}`;
}

export function defGroupTitleLink(bookName: string, group: DefinitionGroup): SubtitledLinkInfo {
  return {
    text: defGroupTitle(group),
    subtitle: group.summary,
    url: defGroupUrl(bookName, group.defGroupName)
  };
}

export function propNavLink(bookName: string, propName: string): LinkInfo {
  return {
    text: `${bookName}.${propName}`,
    url: propUrl(bookName, propName)
  };
}

export function propTitle(proposition: Proposition): string {
  return `Proposition ${proposition.propName}`;
}

export function propTitleLink(bookName: string, proposition: Proposition): SubtitledLinkInfo {
  return {
    text: propTitle(proposition),
    subtitle: proposition.summary,
    url: propUrl(bookName, proposition.propName)
  };
}
