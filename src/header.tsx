import * as React from 'react';
import { Navbar } from 'react-bootstrap';

// import Language from './language';
// import Menu from './menu';

interface Props {
  currentLanguage: string;
  onLanguageChange: (language: string) => void;
}

export default function Header(_props: Props) {
  return (
    <>
      <Navbar>
        <Navbar.Brand>Alex</Navbar.Brand>
      </Navbar>
    </>
  );
}
