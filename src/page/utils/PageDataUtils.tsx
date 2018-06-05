import { ParagraphList } from '../../paragraph';
import { StepsAndDiagram } from '../../stepsAndDiagram';

import {
  // LeafPageData,
  PageDataList,
  // PageItemList,
  ParentPageData,
  StepsAndDiagramPageData,
  TextPageData,
} from '../types';

export function parentPageData(
  name: string,
  title: string,
  children: PageDataList,
): ParentPageData {
  return {
    pageDataType: 'parent',
    name,
    title,
    children,
  };
}

export function stepsAndDiagramPageData(
  name: string,
  title: string,
  stepsAndDiagram: StepsAndDiagram,
): StepsAndDiagramPageData {
  return {
    pageDataType: 'stepsAndDiagram',
    name,
    title,
    stepsAndDiagram,
  };
}

export function textPageData(
  name: string,
  title: string,
  paragraphs: ParagraphList,
): TextPageData {
  return {
    pageDataType: 'text',
    name,
    title,
    paragraphs,
  };
}
