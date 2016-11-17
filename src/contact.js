import React from 'react';

import { FormattedMessage } from 'react-intl';

export default function Contact() {
  return (
    <div className="contact">
      <p>
        <FormattedMessage
          id="contact.overview"
          defaultMessage="If you'd like to contact me, please use this form:"
        />
      </p>

      <form>
        <div className="field">
          <label htmlFor="name">
            <FormattedMessage
              id="contact.name"
              defaultMessage="Your Name:"
            />
          </label>

          <input
            name="name"
            type="text"
          />
        </div>

        <div className="field">
          <label>
            <FormattedMessage
              id="contact.email"
              defaultMessage="Your Email Address:"
            />
          </label>

          <input
            type="email"
          />
        </div>

        <div className="field">
            <label>
              <FormattedMessage
                id="contact.subject"
                defaultMessage="Subject:"
              />
            </label>

            <input
              size={30}
              type="text"
            />
        </div>

        <div className="field">
            <label>
              <FormattedMessage
                id="contact.message"
                defaultMessage="Message:"
              />
            </label>

            <textarea
              cols={32}
              rows={10}
            />

        </div>

        <input
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
}
