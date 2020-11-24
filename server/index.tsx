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

  app.get('/', (req, res) => {
    const html = renderToString(
      <ServerLocation url={req.url}>
        <App/>
      </ServerLocation>
    );
    res.send(
      mustache.render(mustacheFile, {
        html,
      })
    )
  });

  app.listen(process.env.PORT || 3000);
}

startApp()
  .catch(e => {
    console.error('Failed to start error!');
    console.error(e);
  })
