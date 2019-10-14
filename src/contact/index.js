import React from 'react';

import { FormattedMessage } from 'react-intl';

export default function Contact() {
  return (
    <div>
      <p>
        <FormattedMessage
          id="contact.how-to-reach"
          defaultMessage="You can reach me at {email}"
          values={{
            email: <a href="mailto:alex@alexbrick.me">alex@alexbrick.me</a>
          }}
        />
      </p>
    </div>
  );
}
