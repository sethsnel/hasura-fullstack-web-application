import type { AppProps } from "next/app"
import { useEffect, useState } from "react"
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate } from "@azure/msal-react"
import { ApolloProvider } from "@apollo/client"
import { AuthenticationResult, EventType } from "@azure/msal-browser"

import createApolloClient from "../core/createApolloClient"
import { acquireAccessToken, loginParameters, msalInstance } from "../core/authProvider"
import Layout from "../lib/layout"

import "bootstrap/dist/css/bootstrap.css"
import "../styles/globals.css"
import Onboarding from "../lib/onboarding"

function MyApp({ Component, pageProps }: AppProps) {
  const [idToken, setIdToken] = useState<string>("")
  useEffect(() => {
    if (typeof document !== undefined) {
      require("bootstrap/dist/js/bootstrap")
    }
  }, [])
  //console.info(idToken, ' token')
  useEffect(() => {
    if (msalInstance.getActiveAccount()) {
      acquireAccessToken().then((token) => setIdToken(token))
    }

    const callbackId = msalInstance.addEventCallback((event) => {
      if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
        const payload = event.payload as AuthenticationResult
        setIdToken(payload.idToken)
      }
    })

    return () => {
      callbackId && msalInstance.removeEventCallback(callbackId)
    }
  }, [])

  //console.info(idToken)

  return (
    <MsalProvider instance={msalInstance}>
      <Layout>
        <AuthenticatedTemplate>
          <ApolloProvider client={createApolloClient(idToken)}>
            <Onboarding>
              <Component {...pageProps} />
            </Onboarding>
          </ApolloProvider>
        </AuthenticatedTemplate>
        <UnauthenticatedTemplate>
          <button
            className="btn btn-primary"
            onClick={() => msalInstance.loginRedirect(loginParameters)}
          >
            Inloggen
          </button>
        </UnauthenticatedTemplate>
      </Layout>
    </MsalProvider>
  )
}

export default MyApp
