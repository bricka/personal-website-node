import * as React from 'react';

import Language from './language';
import Menu from './menu';

interface Props {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

export default function Header(props: Props) {
  return (
    <div className="header">
      <div className="title">
        <h1>Alex Brick</h1>
      </div>

      <Menu/>

      <Language
        currentLanguage={props.currentLanguage}
        onLanguageChange={props.onLanguageChange}
      />
    </div>
  );
}
