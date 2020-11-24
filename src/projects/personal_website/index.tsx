import * as React from 'react';

import { RouteComponentProps } from '@reach/router';

import PersonalWebsiteProjectDeutsch from './personal_website_deutsch';
import PersonalWebsiteProjectEnglish from './personal_website_english';

interface Props extends RouteComponentProps {
  currentLanguage: string;
}

export default function PersonalWebsiteProject(props: Props){
  return props.currentLanguage === 'de' ? (
    <PersonalWebsiteProjectDeutsch/>
  ) : (
    <PersonalWebsiteProjectEnglish/>
  );
}
