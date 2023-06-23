import React from 'react';
import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from "react-router-dom/server";
import proxy from 'express-http-proxy';
import App from '../App';
import { getServerStore } from '../store';
import { matchRoutes } from 'react-router-dom';
import routesConfig from '../routesConfig';
import { Helmet } from 'react-helmet';
import StyleContext from 'isomorphic-style-loader-react18/StyleContext'

const express = require('express');
const app = express();
app.use(express.static('public'));
app.use('/api', proxy('http://localhost:5000', {
  proxyReqPathResolver(req) {
    return `/api${req.url}`;
  }
}));
app.get('*', (req, res) => {
  const routeMatches = matchRoutes(routesConfig, { pathname: req.url });
  if (routeMatches) {
    const { store } = getServerStore(req);
    const promises = routeMatches
      .map(({ route }) => route.element.type.loadData && route.element.type.loadData(store).then(data => data, error => error))
      .concat(App.loadData && App.loadData(store).then(data => data, error => error))
      .filter(Boolean)
    Promise.all(promises).then(() => {
      if (req.url === 'profile' && (!store.getState().auth.user)) {
        return res.redirect('/login')
      } else if (routeMatches[routeMatches.length - 1].route.path === '*') {
        res.statusCode = 404
      }
      // 编辑css样式
      const css = new Set()
      const insertCss = (...styles) => styles.forEach(style => {
        css.add(style._getCss && typeof (style._getCss) === 'function' && style?._getCss())
      })

      const helmet = Helmet.renderStatic()
      const { pipe } = renderToPipeableStream(
        <StyleContext.Provider value={{ insertCss }}>
          <StaticRouter location={req.url}>
            <App store={store} />
          </StaticRouter>
        </StyleContext.Provider>, {
        bootstrapScripts: ['/client.js'],
        onShellReady() {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html;charset=utf8');
          res.write(
            ` <html>
            <head>
              <meta charset="UTF-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              <meta http-equiv="X-UA-Compatible" content="ie=edge">
              ${helmet.title.toString()}
              ${helmet.meta.toString()}
              <style>${[...css].join('')}</style>
            </head>
            <body>
            <div id="root">`
          );
          pipe(res);
          res.write(
            `</div>
            <script>
              var context = {
                state:${JSON.stringify(store.getState())}
              }
            </script>
              <script src="/client.js"></script>
            </body>
            </html>`
          )
        }
      }
      )
    })
  } else {
    res.sendStatus(404);
  }
});
app.listen(3000, () => console.log("server started on 3000"));