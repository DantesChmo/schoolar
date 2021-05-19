import express from 'express';
import path from 'path';
import * as React from 'react';
import {renderToString} from 'react-dom/server';
import {StaticRouter} from 'react-router';
import {App} from './App';

const app = express();

app.use(express.static(path.resolve(__dirname, '../dist')));
app.get('/*', (req, res) => {
  const element = (
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
  );

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8" />
        <title>Webpack App</title>
      </head>
      <body>
        <div id="root">${renderToString(element)}</div>
        <script src="/main.js"></script>
      </body>
    </html>
  `;

  res.send(html);
});

app.listen(8080, () => {
  console.log('Server started');
});
