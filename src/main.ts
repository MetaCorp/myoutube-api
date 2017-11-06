import * as express from 'express';
import * as mongoose from 'mongoose';
import * as bodyParser from 'body-parser';
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express';

import schema from './api/schema';

const DATABASE_URL = 'mongodb://localhost/messenger';
const ENDPOINT_URL = '/graphql';
const PORT = 4000;

mongoose.connect(DATABASE_URL);

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection to Database error:'));
db.once('open', () => {
  console.log('connected to messenger Database.');
});

const app = express();

app.use(ENDPOINT_URL, bodyParser.json(), graphqlExpress({ schema: schema }));

app.use(
  '/graphiql',
  graphiqlExpress({
    endpointURL: ENDPOINT_URL
  })
);

app.listen(PORT, () => {
  console.log(
    `Running a GraphQL API server at localhost:${PORT + ENDPOINT_URL}`
  );
});
