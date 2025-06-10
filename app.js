'use strict';

const express = require('express');
const SwaggerExpress = require('swagger-express-mw-fork');
const swaggerUi = require('swagger-ui-express');
var session = require('express-session');
const cors = require('cors');
const fileStore = require('session-file-store')(session);
const { salt } = require('./api/util/Common');

const YAML = require('yamljs');

let sess = {
  store: new fileStore,
  name: "nphs",
  secret: salt,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 36000000,
    sameSite: 'lax', // or 'strict' depending on your needs
  }
};

const app = express();
const swaggerDocument = YAML.load('./api/swagger/swagger.yaml');

// Serve Swagger UI
//app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// // 1. Manually define the file upload route with Multer middleware
// app.post('/upload', upload.single('file'), (req, res, next) => {
//   // Multer has now processed the file into req.file
//   // Forward the request to Swagger's handlers
//   next();
// });

// Swagger configuration
const config = {
  appRoot: __dirname
};
app.use(express.json());
app.use(session(sess));
const allowedOrigins = ['http://localhost:3000', "http://10.12.123.146:3000"];

app.use(cors({
  origin: function (origin, callback) {
    console.log("origin: " + origin);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else if (origin == undefined) {
      callback(null, true);
    }
    else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));


SwaggerExpress.create(config, (err, swaggerExpress) => {
  if (err) throw err;

  // 2. Register Swagger middleware AFTER defining manual routes
  swaggerExpress.register(app);

  const port = process.env.PORT || 10010;
  app.listen(port, () => console.log(`Server started on port ${port}`));
});

module.exports = app;