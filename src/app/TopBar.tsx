import * as React from 'react';
import { style } from 'typestyle';

const classPrefix = 'TopBar';

const rootClass = style({
  $debugName: `${classPrefix}_root`,
  $unique: true,
  display: 'flex',
  flexDirection: 'row',
  padding: 12,
});

const leftClass = style({
  $debugName: `${classPrefix}_left`,
  $unique: true,
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
});

const centerClass = style({
  $debugName: `${classPrefix}_center`,
  $unique: true,
  flex: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const titleClass = style({
  $debugName: `${classPrefix}_title`,
  $unique: true,
  textAlign: 'center',
  fontSize: 24,
});

const rightClass = style({
  $debugName: `${classPrefix}_right`,
  $unique: true,
  flex: 1,
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-end',
  alignItems: 'stretch',
});

const buttonClass = style({
  $debugName: `${classPrefix}_button`,
  $unique: true,
  paddingLeft: 12,
  paddingRight: 12,
  border: '1px solid #ddd',
  outline: 'none',
  $nest: {
    '&:focus': {
      $unique: true,
      outline: '1px solid black',
    },
    '&:hover': {
      $unique: true,
      backgroundColor: '#eee',
    },
    '&:disabled': {
      $unique: true,
      backgroundColor: 'transparent',
      border: '1px solid #888',
      opacity: 0.3,
    },
  }
});

export type TopBarProps = {
  readonly previousEnabled: boolean;
  readonly nextEnabled: boolean;
  readonly onPrevious: () => void;
  readonly onNext: () => void;
};

export class TopBar extends React.PureComponent<TopBarProps> {

  public render(): JSX.Element {
    return (
      <div className={rootClass}>
        <div className={leftClass}>
          <button
            className={buttonClass}
            disabled={!this.props.previousEnabled}
            onClick={this.props.onPrevious}
          >
            Previous Page
          </button>
        </div>
        <div className={centerClass}>
          <div className={titleClass}>Here's Looking at Euclid</div>
        </div>
        <div className={rightClass}>
          <button
            className={buttonClass}
            disabled={!this.props.nextEnabled}
            onClick={this.props.onNext}
          >
            Next Page
          </button>
        </div>
      </div>
    );
  }

}
