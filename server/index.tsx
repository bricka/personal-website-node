import { ServerLocation } from '@reach/router';
import * as express from 'express';
import { readFile } from 'fs';
import * as mustache from 'mustache';
import { resolve } from 'path';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { promisify } from 'util';

import { App } from '../src/App'

async function startApp() {
  const mustacheFile =
    await promisify(readFile)(resolve(__dirname, 'index.mustache'), 'utf8');

  const app = express();

  app.use('/public', express.static('build'));

  app.get(/.*/, (req, res) => {
    const html = renderToString(
      <ServerLocation url={req.url}>
        <App/>
      </ServerLocation>
    );
    res.send(
      mustache.render(mustacheFile, {
        html,
        language: 'en-US',
      })
    )
  });


  const portNumber = process.env.PORT || 3000;

  app.listen(portNumber, () => {
    console.log(`Listening on port ${portNumber}`);
  });
}

startApp()
  .catch(e => {
    console.error('Failed to start error!');
    console.error(e);
  })
