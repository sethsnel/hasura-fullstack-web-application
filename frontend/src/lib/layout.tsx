import Head from "next/head"
import { ReactNode } from "react"
import { msalInstance } from "../core/authProvider"

import styles from "../styles/Home.module.css"

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rubi IMDB</title>
        <meta name="description" content="Rubi IMDB" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%22100%22>🍿</text></svg>"
        ></link>
      </Head>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={() => msalInstance.logoutRedirect()}
        >
          Afmelden
        </button>
      </footer>
    </div>
  )
}

export default Layout
