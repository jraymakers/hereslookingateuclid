import {
  LinkInfo,
} from '../shared/types';

import {
  mainContentsUrl,
  mainIntroUrl,
  bookUrl,
  bookContentsUrl,
  bookIntroUrl,
  propUrl,
  propStepUrl,
} from './Urls';

export const mainContentsLink: LinkInfo = {
  contentsText: 'Main Contents', // unused
  navText: 'Main Contents',
  url: mainContentsUrl
};

export const mainIntroLink: LinkInfo = {
  contentsText: 'Introduction',
  navText: 'Introduction',
  url: mainIntroUrl
};

export function bookContentsLink(bookName: string): LinkInfo {
  return {
    contentsText: 'Contents', // unused
    navText: `Book ${bookName} Contents`,
    url: bookContentsUrl(bookName)
  };
}

export function bookIntroLink(bookName: string): LinkInfo {
  return {
    contentsText: 'Introduction',
    navText: `Book ${bookName}`,
    url: bookIntroUrl(bookName)
  };
}

export function propLink(bookName: string, propName: string): LinkInfo {
  return {
    contentsText: `Proposition ${propName}`,
    navText: `${bookName}.${propName}`,
    url: propUrl(bookName, propName)
  };
}
