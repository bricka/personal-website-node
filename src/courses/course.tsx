import * as React from 'react';

import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

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

const CourseName = styled.span`
  font-weight: bold;
`;

export function Course(props: Props) {
  return (
    <li>
      <CourseName>
        {props.nameId ? (
          <FormattedMessage
            id={props.nameId}
            defaultMessage={props.defaultName}
          />
        ) : (
          props.defaultName
        )}
        {signForCourse(props.level)}
      </CourseName>
    &nbsp;
    {props.teacher && `(${props.teacher})`}
    </li>
  );
}
