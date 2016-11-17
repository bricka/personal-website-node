import React from 'react';

import { FormattedMessage } from 'react-intl';

export default function Contact() {
  return (
    <div>
      <p>
        <FormattedMessage
          id="contact.overview"
          defaultMessage="If you'd like to contact me, please use this form:"
        />
      </p>

      <form>
        <table>
          <tbody>
            <tr>
              <td>
                <label htmlFor="name">
                  <FormattedMessage
                    id="contact.name"
                    defaultMessage="Your Name:"
                  />
                </label>
              </td>
              <td className="value">
                <input
                  name="name"
                  size={30}
                  type="text"
                />
              </td>
            </tr>

            <tr>
              <td>
                <label>
                  <FormattedMessage
                    id="contact.email"
                    defaultMessage="Your Email Address:"
                  />
                </label>
              </td>
              <td>
                <input
                  size={30}
                  type="email"
                />
              </td>
            </tr>

            <tr>
              <td>
                <label>
                  <FormattedMessage
                    id="contact.subject"
                    defaultMessage="Subject:"
                  />
                </label>
              </td>
              <td>
                <input
                  size={30}
                  type="text"
                />
              </td>
            </tr>

            <tr>
              <td>
                <label>
                  <FormattedMessage
                    id="contact.message"
                    defaultMessage="Message:"
                  />
                </label>
              </td>
              <td>
                <textarea
                  cols={32}
                  rows={10}
                />
              </td>
            </tr>
          </tbody>
        </table>

        <input
          type="submit"
          value="Send"
        />
      </form>
    </div>
  );
}
