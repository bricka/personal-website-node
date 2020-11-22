import * as express from 'express';
import { readFile } from 'fs';
import { resolve } from 'path';
import * as React from 'react';
import { renderToString } from 'react-dom/server';
import { promisify } from 'util';

import { App } from '../src/App'

async function startApp() {
  const indexFile = await promisify(readFile)(resolve('./server-build/index.html'), 'utf8');

  const app = express();

  app.get('/', (_req, res) => {
    const domString = renderToString(<App/>);
    res.send(
      indexFile.replace(
        '<div id="app-container"></div>',
        `<div id="app-container">${domString}</div>`,
      )
    )
  });

  app.listen(process.env.PORT || 3000);
}

startApp()
  .catch(e => {
    console.error('Failed to start error!');
    console.error(e);
  })
