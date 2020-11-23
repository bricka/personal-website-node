import * as React from 'react';

import styled from 'styled-components';

import Language from './language';
import Menu from './menu';

interface Props {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

const HeaderWrapper = styled.div`
  background : #D9D9D9;
`;

export default function Header(props: Props) {
  return (
    <HeaderWrapper>
      <div className="title">
        <h1>Alex Brick</h1>
      </div>

      <Menu/>

      <Language
        currentLanguage={props.currentLanguage}
        onLanguageChange={props.onLanguageChange}
      />
    </HeaderWrapper>
  );
}
