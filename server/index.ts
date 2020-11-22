import * as express from 'express';
import { renderToString } from 'react-dom/server';

import { App } from '../src/App'

const app = express();

app.get('/', (req, res) => {
  const rendered = renderToString(<App/>);
});

app.listen(process.env.PORT || 3000);
