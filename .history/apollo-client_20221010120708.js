import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://allschwil.stepzen.net/api/sad-jackal/__graphql",
    cache: new InMemoryCache(),
    headers:{
        Authorization: `ApiKey ${process.env.NEXT_PUBLIC_STEPZEN_KEY}`
    }
});

export default client;