import * as express from 'express';

const app = express();

app.get('/', (_req, res) => res.send('hello world'));

app.listen(process.env.PORT || 3000);
