import {
  Paragraph,
} from '../../paragraph';

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

export function bookTitleContentsLink(bookName: string): LinkInfo {
  return {
    text: `Book ${bookName}`,
    url: bookContentsUrl(bookName)
  };
}

export function bookTitleIntroLink(bookName: string): LinkInfo {
  return {
    text: `Book ${bookName}`,
    url: bookIntroUrl(bookName)
  };
}

export function bookIntroLink(bookName: string): LinkInfo {
  return {
    text: 'Introduction',
    url: bookIntroUrl(bookName)
  };
}

export function defGroupTitleLink(bookName: string, defGroupName: string, subtitle: Paragraph): SubtitledLinkInfo {
  return {
    text: `Definitions ${defGroupName}`, // todo
    subtitle: subtitle,
    url: defGroupUrl(bookName, defGroupName)
  };
}

export function defGroupNavLink(bookName: string, defGroupName: string): LinkInfo {
  return {
    text: `${bookName}.Def${defGroupName}`,
    url: defGroupUrl(bookName, defGroupName)
  };
}

export function propTitleLink(bookName: string, propName: string, subtitle: Paragraph): SubtitledLinkInfo {
  return {
    text: `Proposition ${propName}`,
    subtitle: subtitle,
    url: propUrl(bookName, propName)
  };
}

export function propNavLink(bookName: string, propName: string): LinkInfo {
  return {
    text: `${bookName}.${propName}`,
    url: propUrl(bookName, propName)
  };
}
