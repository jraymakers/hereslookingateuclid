import * as React from 'react';
import { Link } from 'react-router-dom';
import { style } from 'typestyle';

import { NavBar } from '../app/NavBar';

const classPrefix = 'MainContents';

const rootClass = style({
  $debugName: `${classPrefix}_root`,
  $unique: true,
  display: 'flex',
  flexDirection: 'column',
  padding: 12,
});

const linkClass = style({
  $debugName: `${classPrefix}_link`,
  $unique: true,
  padding: 12,
});

export class MainContents extends React.PureComponent<{}> {

  public render(): JSX.Element {
    return (
      <div className={rootClass}>
        <NavBar prev={null} up={null} next={null} noTitleLink={true}></NavBar>
        <Link className={linkClass} to="/intro"     >Introduction</Link>
        <Link className={linkClass} to="/book/I"    >Book I</Link>
        <Link className={linkClass} to="/book/II"   >Book II</Link>
        <Link className={linkClass} to="/book/III"  >Book III</Link>
        <Link className={linkClass} to="/book/IV"   >Book IV</Link>
        <Link className={linkClass} to="/book/V"    >Book V</Link>
        <Link className={linkClass} to="/book/VI"   >Book VI</Link>
        <Link className={linkClass} to="/book/VII"  >Book VII</Link>
        <Link className={linkClass} to="/book/VIII" >Book VIII</Link>
        <Link className={linkClass} to="/book/IX"   >Book IX</Link>
        <Link className={linkClass} to="/book/X"    >Book X</Link>
        <Link className={linkClass} to="/book/XI"   >Book XI</Link>
        <Link className={linkClass} to="/book/XII"  >Book XII</Link>
        <Link className={linkClass} to="/book/XIII" >Book XIII</Link>
      </div>
    );
  }

}
