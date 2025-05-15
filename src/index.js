const express = require('express');
const cors = require('cors');
const { ApolloServer, gql } = require('apollo-server-express');
const { buildSubgraphSchema } = require('@apollo/subgraph');
require('dotenv').config();
const resolvers = require('../src/graphql/resolvers');
const typeDefs = require('../src/graphql/schema');
const connectDB = require('../src/db/connect');

const app = express();
const PORT = process.env.PORT || 5110;
connectDB();
app.use(cors());

// Apollo Server 생성
const server = new ApolloServer({
  schema: buildSubgraphSchema({ typeDefs, resolvers }),
  playground: true,
  context: ({ req, res }) => ({ req, res }),
  formatError: (err) => {
    console.log(err);
    return err;
  }
});

const con = async () => {
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });
}

con();

app.listen(PORT, () => {
  console.log(`Server running at:`);
  console.log(`http://localhost:${PORT}/graphql`);
});
