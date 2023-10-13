import { ApolloClient, HttpLink, InMemoryCache, split } from "@apollo/client"
import { WebSocketLink } from "@apollo/client/link/ws"
import { getMainDefinition } from "@apollo/client/utilities"

const createApolloClient = (authToken: string) => {
  const httpLink = new HttpLink({
    uri: process.env.NEXT_PUBLIC_HASURA_HTTP,
    headers: {
      Authorization: `Bearer ${authToken}`,
    },
  })

  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_HASURA_WS) {
    const wsLink = new WebSocketLink({
      uri: process.env.NEXT_PUBLIC_HASURA_WS,
      options: {
        reconnect: true,
        connectionParams: {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        },
      },
    })

    const splitLink = split(
      ({ query }) => {
        const definition = getMainDefinition(query)
        return definition.kind === "OperationDefinition" && definition.operation === "subscription"
      },
      wsLink,
      httpLink
    )

    const cache = createInMemoryCache()
    //(<any>window).cache = cache

    return new ApolloClient({
      link: splitLink,
      cache,
    })
  } else {
    return new ApolloClient({
      link: httpLink,
      cache: createInMemoryCache(),
    })
  }
}

const createInMemoryCache = () => {
  return new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          Movies: {
            keyArgs: ['limit', 'titleFilter'],
            merge(existing = [], incoming) {
              return [...existing, ...incoming]
            },
          },
        },
      },
    },
  })
}

export default createApolloClient
