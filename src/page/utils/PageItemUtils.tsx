import { Paragraph, ParagraphList } from '../../paragraph';
import { StepsAndDiagram } from '../../stepsAndDiagram';
import {
  PageItemList,
  StepsAndDiagramPageItem,
  TextPageItem,
} from '../types';

export function stepsAndDiagramPageItem(stepsAndDiagram: StepsAndDiagram): StepsAndDiagramPageItem {
  return {
    pageItemType: 'stepsAndDiagram',
    stepsAndDiagram,
  };
}

export function textPageItem(paragraphs: ParagraphList): TextPageItem {
  return {
    pageItemType: 'text',
    paragraphs,
  };
}
