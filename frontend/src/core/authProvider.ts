import {
  AuthenticationResult,
  EventType,
  LogLevel,
  PublicClientApplication,
  RedirectRequest,
} from "@azure/msal-browser"

// Msal Configurations
const config = {
  auth: {
    authority: process.env.NEXT_PUBLIC_AD_AUTHORITY ?? "",
    clientId: process.env.NEXT_PUBLIC_AD_CLIENTID ?? "",
    knownAuthorities: ['tutorialmoviedb.b2clogin.com'],
    redirectUri: "http://localhost:3000",
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: true,
  },
  system: {
    loggerOptions: {
      loggerCallback: (level: any, message: any, containsPii: any) => {
        if (containsPii) {
          return
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message)
            return
          case LogLevel.Info:
            console.info(message)
            return
          case LogLevel.Verbose:
            console.debug(message)
            return
          case LogLevel.Warning:
            console.warn(message)
            return
          default:
            return
        }
      },
    },
  },
}

// Authentication Parameters
export const loginParameters: RedirectRequest = {
  scopes: [
    "openid",
    `https://tutorialmoviedb.onmicrosoft.com/49bfcbf1-5f35-4cbe-9153-83d869ead4de/api.user`,
    //'profile',
    //'user.read',
    // 'mail.read',
    // 'api://635f83f9-9959-4f08-8f83-20e900a54be5/Api.Access'
  ],
}

export const accessTokenParameters: RedirectRequest = {
  authority: process.env.NEXT_PUBLIC_AD_AUTHORITY,
  scopes: ["offline_access", `https://tutorialmoviedb.onmicrosoft.com/49bfcbf1-5f35-4cbe-9153-83d869ead4de/api.user`],
}

export const acquireAccessToken = async () => {
  const activeAccount = msalInstance.getActiveAccount()

  if (!activeAccount) {
    throw Error(
      "No active account! Verify a user has been signed in and setActiveAccount has been called."
    )
  }

  //console.info(activeAccount)

  const request = {
    ...accessTokenParameters,
    account: activeAccount,
  }

  await msalInstance.initialize()

  const authResult = await msalInstance.acquireTokenSilent(request)
  console.info(authResult.accessToken)

  return authResult.idToken
}

export const msalInstance = new PublicClientApplication(config)

const accounts = msalInstance.getAllAccounts()
if (accounts.length > 0) {
  msalInstance.setActiveAccount(accounts[0])
}

msalInstance.addEventCallback((event) => {
  // if (event.eventType === EventType.LOGIN_FAILURE) {
  //     console.dir(event)
  // }

  if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
    const payload = event.payload as AuthenticationResult
    const account = payload.account

    msalInstance.setActiveAccount(account)
  }
})

//console.info(msalInstance.getActiveAccount())

if (msalInstance.getActiveAccount()) {
  //acquireAccessToken()
}
