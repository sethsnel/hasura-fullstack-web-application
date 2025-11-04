import { useState } from "react"

import MovieTile from "./movieTile"
import { useListMoviesQuery } from "../core/generated/graphql"

type MovieListProps = { titleFilter?: string }

const MovieList = ({ titleFilter }: MovieListProps) => {
  const [titleFilterState, setTitleFilterState] = useState(titleFilter)
  const { loading, data, refetch } = useListMoviesQuery({
    variables: { titleFilter: `%${titleFilter ? titleFilter : ""}%` },
  })

  let movies: JSX.Element | JSX.Element[] = (
    <div className="spinner-border" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  )

  if (titleFilter !== titleFilterState) {
    if (titleFilter) {
      refetch({ titleFilter: `%${titleFilter ? titleFilter : ""}%` })
    } else {
      refetch()
    }
    setTitleFilterState(titleFilter)
  }

  if (!loading && typeof data !== "undefined") {
    movies = data.Movies.map((movie) => (
      <MovieTile
        key={movie.Id}
        movie={{
          Id: movie.Id,
          PosterUrl: movie.PosterUrl,
          AverageRating: movie.Ratings_aggregate.aggregate?.avg?.Rating || undefined,
        }}
      />
    ))
  }

  return (
    <div>
      <div className="row row-cols-1 row-cols-md-4 g-4">{movies}</div>
    </div>
  )
}

export default MovieList
