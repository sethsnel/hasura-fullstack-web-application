import type { NextPage } from "next"
import { useState } from "react"

import MovieList from "../components/movieList"
import { useListMovieTitlesQuery } from "../core/generated/graphql"

import styles from "../styles/Home.module.css"

const Home: NextPage = () => {
  const [titleFilter, setTitleFilter] = useState<string | undefined>(undefined)
  const { loading, data, refetch } = useListMovieTitlesQuery()

  return (
    <>
      <h1 className={styles.title}>FMDB</h1>
      <p>Freshminds movie database</p>
      <div className="container-md">
        <input
          className="form-control mb-3 mt-3"
          list="datalistOptions"
          id="exampleDataList"
          placeholder="Search"
          onChange={(e) => {setTitleFilter(e.currentTarget.value); refetch({ titleFilter: `%${e.currentTarget.value}%` })}}
        />
        {!loading && typeof data !== "undefined" ? (
          <datalist id="datalistOptions">
            {
              data.Movies.map((movie) => (
                <option value={movie.Title} key={movie.Title} />
              ))
            }
          </datalist>
        ) : undefined}
        <MovieList titleFilter={titleFilter} />
      </div>
    </>
  )
}

export default Home
