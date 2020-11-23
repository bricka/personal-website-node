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

const TitleWrapper = styled.div`
  background : #999;
  color: #FCC915;
  text-align : center;

  h1 {
    font-size : 40px;
    margin-top : 0;
    margin-bottom : 0;
  }
`;

export default function Header(props: Props) {
  return (
    <HeaderWrapper>
      <TitleWrapper>
        <h1>Alex Brick</h1>
      </TitleWrapper>

      <Menu/>

      <Language
        currentLanguage={props.currentLanguage}
        onLanguageChange={props.onLanguageChange}
      />
    </HeaderWrapper>
  );
}
