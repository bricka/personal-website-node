import * as React from 'react';

import { FormattedMessage } from 'react-intl';

enum Season {
  FALL = 'fall',
  SPRING = 'spring',
  SUMMER1 = 'summer-1',
  SUMMER2_FALL = 'summer2-fall',
}

interface Props {
  children: React.ReactNode;
  commentId?: string;
  defaultComment?: string;
  seasonId: Season;
  year: number;
}

const seasonIntlData = {
  [Season.SPRING]: {
    defaultMessage: 'Spring',
    id: 'spring',
  },
  [Season.FALL]: {
    defaultMessage: 'Fall',
    id: 'fall',
  },
  [Season.SUMMER2_FALL]: {
    defaultMessage: 'Summer 2 and Fall',
    id: 'summer-2-and-fall',
  },
  [Season.SUMMER1]: {
    defaultMessage: 'Summer 1',
    id: 'summer-1',
  },
};

export function Semester(props: Props) {
  return (
    <div>
      <h2>
        <FormattedMessage
          {...seasonIntlData[props.seasonId]}
        />
        &nbsp;
        {props.year}
      </h2>

      {props.commentId && (
         <p className="comment">
           <FormattedMessage
             id={props.commentId}
             defaultMessage={props.defaultComment}
            />
         </p>
      )}

      <ul>
        {props.children}
      </ul>
    </div>
  );
}
