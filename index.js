require('dotenv').config();
const console = require('console');
const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');
const routes = require('./server/routes/index');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);
app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/', (req, res) => {
  res.send('Aplicação executando...');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
