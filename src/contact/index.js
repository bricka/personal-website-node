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
            email: <a href="mailto:alex@alexrbrick.com">alex@alexrbrick.com</a>
          }}
        />
      </p>
    </div>
  );
}
