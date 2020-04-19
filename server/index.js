const express = require('express');
const cors = require('cors');
const {
  base,
} = require('./settings');
const port = 6060;

const whitelistOrigins = [
  'http://localhost:3000',
  'http://127.0.0.1:8080',
  'http://192.168.1.65:8080',
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelistOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}

const app = express();

app.use(cors());

app.get('/products/:page?/:name?/:limit?', async (req, res, next) => {
  let {
    page: pageParam,
    name: nameParam,
    limit: limitParams,
  } = req.query;

  if (limitParams) {
    limitParams = parseInt(limitParams, 10);
  }

  if (pageParam) {
    pageParam = parseInt(pageParam, 10);
  }  
  
  try {
    let response = base;

    if (nameParam) {
      response = response.filter(e =>
        e.name.toLowerCase().indexOf(nameParam.toLowerCase()) >= 0);
    }

    if (limitParams) {
      let pageIntern = (pageParam || 1) * limitParams;

      response = response.slice(pageIntern, pageIntern + limitParams);
    }

    res
      .status(200)
      .json({ items: response });

    console.log(JSON.stringify(response));

  } catch (e) {
    console.error(`${e}`);

    res.status(500).json({ message: 'Internal error.' });

    return false;
  }

  next();

  return true;
});

if (process.env.NODE_ENV !== "test") {
  app.listen(port);
  console.log(`Server running at localhost:${port}`);
}

module.exports = app;