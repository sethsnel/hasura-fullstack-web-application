import Head from "next/head"
import { ReactNode } from "react"
import { AuthenticatedTemplate } from "@azure/msal-react"

import { msalInstance } from "../core/authProvider"

import styles from "../styles/Home.module.css"

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Full Stack App MDB</title>
        <meta name="description" content="Full Stack App MDB" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%22100%22>🍿</text></svg>"
        ></link>
      </Head>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <AuthenticatedTemplate>
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => msalInstance.logoutRedirect()}
        >
          Log Out
        </button>
        </AuthenticatedTemplate>
      </footer>
    </div>
  )
}

export default Layout
