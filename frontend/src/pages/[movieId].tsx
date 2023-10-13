import { ComponentType, useState } from "react"
import type { NextPage } from "next"
import { useRouter } from "next/router"
import Link from "next/link"
import dynamic from "next/dynamic"
import { useMsal } from "@azure/msal-react"

import {
  useMovieQuery,
  useMovieRatingsSubscription,
  useRatingMutation,
} from "../core/generated/graphql"
import Toast from "../lib/toast"
import MovieDetail from "../components/movieDetail"
import MovieRatings from "../components/movieRatings"

const ToastMessage: ComponentType<typeof Toast> = dynamic(
  //@ts-ignore
  () => import("../lib/toast").then((mod) => mod.default),
  {
    ssr: false,
  }
)

const Movie: NextPage = () => {
  const router = useRouter()
  const { instance } = useMsal()
  const userId = instance.getActiveAccount()?.localAccountId

  const { loading, data } = useMovieQuery({ variables: { movieId: router.query.movieId as any as number} })
  const { loading: loadingRatings, data: ratingData } = useMovieRatingsSubscription({
    variables: { movieId: router.query.movieId as any as number },
  })
  const [upsertRating] = useRatingMutation()

  const [ratingSubmitted, setRatingSubmitted] = useState(false)

  const updateRating = async (rating: number) => {
    await upsertRating({
      variables: { MovieId: router.query.movieId as any as number, ProfileId: userId, Rating: rating },
    })
    setRatingSubmitted(true)
    await new Promise((resolve) => setTimeout(resolve, 500))
    setRatingSubmitted(false)
  }

  return (
    <>
      {
        //@ts-ignore
        <ToastMessage message="Rating opgeslagen" show={ratingSubmitted} />
      }
      <Link href="/">
        <button className="btn btn-outline-secondary">Terug naar overzicht</button>
      </Link>
      <div className="container-md mt-3">
        <div className="row">
          {loading ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <>
              <div className="col-12 col-md-6 mb-3 position-relative">
                <MovieDetail data={data} />
              </div>
              <div className="col">
                <MovieRatings userId={userId} isLoadingRatings={loadingRatings} data={ratingData} updateRating={updateRating} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default Movie
