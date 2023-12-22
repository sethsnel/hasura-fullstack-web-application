import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  "schema": [
    {
      "https://movie-database.hasura.app/v1/graphql": {
        "headers": {
          "x-hasura-role": "admin",
          "x-hasura-admin-secret": "<admin-secret>"
        }
        // headers: {
        //   Authorization: 'Bearer ' + process.env.AUTH_TOKEN,
        // }
      }
    }
  ],
  documents: './schema/**/*.graphql',
  overwrite: true,
  generates: {
    './src/core/generated/graphql.tsx': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        skipTypename: false,
        withHooks: true,
        withHOC: false,
        withComponent: false,
      },
    }
  }
}

export default config