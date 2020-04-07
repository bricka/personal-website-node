import * as React from 'react';

import { FormattedMessage } from 'react-intl';

export enum CourseLevel {
  MASTER = 'master',
  PHD = 'phd',
}

interface Props {
  defaultName: string;
  level?: CourseLevel;
  nameId?: string;
  teacher?: string;
}

function signForCourse(level?: CourseLevel) {
  switch (level) {
    case CourseLevel.MASTER:
      return '*';
    case CourseLevel.PHD:
      return '†';
    default:
      return '';
  }
}

export function Course(props: Props) {
  return (
    <li>
      <span className="class-name">
        {props.nameId ? (
          <FormattedMessage
            id={props.nameId}
            defaultMessage={props.defaultName}
          />
        ) : (
          props.defaultName
        )}
        {signForCourse(props.level)}
      </span>
      &nbsp;
      {props.teacher && `(${props.teacher})`}
    </li>
  );
}
