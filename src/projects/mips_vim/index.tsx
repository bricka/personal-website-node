import * as React from 'react';

import MipsSyntaxHighlightingProjectDeutsch from './mips_vim_deutsch';
import MipsSyntaxHighlightingProjectEnglish from './mips_vim_english';

interface Props {
  currentLanguage: string;
}

export default function MipsSyntaxHighlightingProject(props: Props) {
  return props.currentLanguage === 'de' ? (
    <MipsSyntaxHighlightingProjectDeutsch/>
  ) : (
    <MipsSyntaxHighlightingProjectEnglish/>
  );
}
