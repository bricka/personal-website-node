import React from 'react';

import Language from './language';
import Menu from './menu';

export default function Header() {
  return (
    <div className="header">
      <div className="title">
        <h1>Alex Brick</h1>
      </div>

      <Menu/>

      <Language currentLanguage="en"/>
    </div>
  );
}
