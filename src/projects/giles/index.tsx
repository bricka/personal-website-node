import * as React from 'react';

import GilesProjectDeutsch from './giles_deutsch';
import GilesProjectEnglish from './giles_english';

interface Props {
  currentLanguage: string;
}

export default function GilesProject(props: Props) {
  return props.currentLanguage === 'de' ? (
    <GilesProjectDeutsch/>
  ) : (
    <GilesProjectEnglish/>
  );
}
