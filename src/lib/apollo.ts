import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4osz3r30yhh01z41d1ebpl6/master',
  cache: new InMemoryCache()
})