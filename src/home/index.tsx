import * as React from 'react';

import { RouteComponentProps } from '@reach/router';

import HomeDeutsch from './deutsch';
import HomeEnglish from './english';

interface Props  extends RouteComponentProps {
  currentLanguage: string;
}

export default function Home(props: Props) {
  return props.currentLanguage === 'de' ? (
    <HomeDeutsch/>
  ) : (
    <HomeEnglish/>
  );
}
