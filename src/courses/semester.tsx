import * as React from 'react';

import { FormattedMessage } from 'react-intl';

enum Season {
  FALL = 'fall',
  SPRING = 'spring',
  SUMMER1 = 'summer-1',
  SUMMER2_FALL = 'summer2-fall',
}

interface Props {
  commentId?: string;
  defaultComment?: string;
  seasonId: Season;
  year: number;
}

const seasonIntlData = {
  [Season.SPRING]: {
    id: 'spring',
    defaultMessage: 'Spring'
  },
  [Season.FALL]: {
    id: 'fall',
    defaultMessage: 'Fall'
  },
  [Season.SUMMER2_FALL]: {
    id: 'summer-2-and-fall',
    defaultMessage: 'Summer 2 and Fall'
  },
  [Season.SUMMER1]: {
    id: 'summer-1',
    defaultMessage: 'Summer 1'
  }
};

export function Semester(props: Props) {
  return (
    <div>
      <h2>
        <FormattedMessage
          {...seasonIntlData[props.seasonId]}
        />
        &nbsp;
        {this.props.year}
      </h2>

      {this.props.commentId && (
         <p className="comment">
           <FormattedMessage
             id={this.props.commentId}
             defaultMessage={this.props.defaultComment}
            />
         </p>
      )}

      <ul>
        {this.props.children}
      </ul>
    </div>
  );
}
