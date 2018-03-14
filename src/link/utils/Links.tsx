import {
  LinkInfo,
} from '../types/LinkInfo';

import {
  mainIntroUrl,
  bookContentsUrl,
  bookIntroUrl,
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

export function propTitleLink(bookName: string, propName: string): LinkInfo {
  return {
    text: `Proposition ${propName}`,
    url: propUrl(bookName, propName)
  };
}

export function propNavLink(bookName: string, propName: string): LinkInfo {
  return {
    text: `${bookName}.${propName}`,
    url: propUrl(bookName, propName)
  };
}