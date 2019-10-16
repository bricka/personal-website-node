import * as React from 'react';

import HomeDeutsch from './deutsch';
import HomeEnglish from './english';

interface Props {
  currentLanguage: string;
}

export default function Home(props: Props) {
  return props.currentLanguage === 'de' ? (
    <HomeDeutsch/>
  ) : (
    <HomeEnglish/>
  );
}
