import React, { Component } from 'react';

import { FormattedMessage } from 'react-intl';

import sendEmail from './send-email';

export default class Contact extends Component {
  render = () => (
    <div className="contact">
      <p>
        <FormattedMessage
          id="contact.overview"
          defaultMessage="If you'd like to contact me, please use this form:"
        />
      </p>

      <form onSubmit={this._handleFormSubmit}>
        <div className="field">
          <label htmlFor="name">
            <FormattedMessage
              id="contact.name"
              defaultMessage="Your Name:"
            />
          </label>

          <input
            name="name"
            ref={input => this.name = input}
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
            ref={input => this.from = input}
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
              ref={input => this.subject = input}
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
              ref={input => this.body = input}
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

  _handleFormSubmit = e => {
    e.preventDefault();

    const name = this.name.value;
    const from = this.from.value;
    const subject = this.subject.value;
    const body = this.body.value;

    sendEmail(name, from, subject, body);
  }
}
