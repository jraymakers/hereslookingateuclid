import { parentPageData, parentPageDataNoNav } from '../../page';
import cn1 from './Book1CommonNotion1';
import cn2 from './Book1CommonNotion2';
import cn3 from './Book1CommonNotion3';
import cn4 from './Book1CommonNotion4';
import cn5 from './Book1CommonNotion5';
import def01to04 from './Book1Def01to04';
import def05to07 from './Book1Def05to07';
import def08to12 from './Book1Def08to12';
import def13to14 from './Book1Def13to14';
import def15to18 from './Book1Def15to18';
import def19 from './Book1Def19';
import def20to21 from './Book1Def20to21';
import def22 from './Book1Def22';
import def23 from './Book1Def23';
import overview from './Book1Overview';
import postulate1 from './Book1Postulate1';
import postulate2 from './Book1Postulate2';
import postulate3 from './Book1Postulate3';
import postulate4 from './Book1Postulate4';
import postulate5 from './Book1Postulate5';
import prop01 from './Book1Prop01';
import prop02 from './Book1Prop02';
import prop03 from './Book1Prop03';
import prop04 from './Book1Prop04';
import prop05 from './Book1Prop05';
import prop06 from './Book1Prop06';
import prop07 from './Book1Prop07';
import prop08 from './Book1Prop08';
import prop09 from './Book1Prop09';
import prop10 from './Book1Prop10';
import prop11 from './Book1Prop11';
import prop12 from './Book1Prop12';
import prop13 from './Book1Prop13';
import prop14 from './Book1Prop14';
import prop15 from './Book1Prop15';
import prop16 from './Book1Prop16';
import prop17 from './Book1Prop17';

const definitionsPageData = parentPageDataNoNav('definition', 'Definitions', [
  def01to04,
  def05to07,
  def08to12,
  def13to14,
  def15to18,
  def19,
  def20to21,
  def22,
  def23,
]);

const postulatesPageData = parentPageDataNoNav('postulate', 'Postulates', [
  postulate1,
  postulate2,
  postulate3,
  postulate4,
  postulate5,
]);

const commonNotionsPageData = parentPageDataNoNav('common-notion', 'Common Notions', [
  cn1,
  cn2,
  cn3,
  cn4,
  cn5,
]);

const propositionsPageData = parentPageDataNoNav('proposition', 'Propositions', [
  prop01,
  prop02,
  prop03,
  prop04,
  prop05,
  prop06,
  prop07,
  prop08,
  prop09,
  prop10,
  prop11,
  prop12,
  prop13,
  prop14,
  prop15,
  prop16,
  prop17,
]);

const pageData = parentPageData('I', 'Book I', [
  overview,
  definitionsPageData,
  postulatesPageData,
  commonNotionsPageData,
  propositionsPageData,
]);

export default pageData;
