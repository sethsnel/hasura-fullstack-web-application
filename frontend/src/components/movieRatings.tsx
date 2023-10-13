import { useState } from "react"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"

import {
  MovieRatingsQuery,
} from "../core/generated/graphql"

import styles from "../styles/Movie.module.css"

type MovieRatingsProps = {
  userId: string | undefined
  isLoadingRatings: boolean
  data: MovieRatingsQuery | undefined
  updateRating: (rating: number) => Promise<void>
}

const MovieRatings = ({ userId, isLoadingRatings, data, updateRating }: MovieRatingsProps) => {
  const myRating = data?.Ratings.find((r) => r.Profile.Id == userId)?.Rating || 0
  const [newRating, setNewRating] = useState(0)

  const stars = []
  for (let i = 0; i < 5; i++) {
    if ((newRating !== 0 && newRating > i) || (newRating === 0 && myRating > i)) {
      stars.push(
        <AiFillStar
          key={i}
          onClick={() => updateRating(1 + i)}
          onMouseEnter={() => setNewRating(1 + i)}
          onMouseLeave={() => setNewRating(0)}
        />
      )
    } else {
      stars.push(
        <AiOutlineStar
          key={i}
          onClick={() => updateRating(1 + i)}
          onMouseEnter={() => setNewRating(1 + i)}
          onMouseLeave={() => setNewRating(0)}
        />
      )
    }
  }

  return (
    <>
      <div className="d-flex flex-column bd-highlight mb-3">
        <div
          className={`${styles.rating} mb-3 fs-1 d-flex align-items-center justify-content-center`}
          style={{ color: "#F9E076" }}
        >
          {stars}
        </div>
        <ul className="list-group">
          {isLoadingRatings ? (
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            data?.Ratings.map((rating) => (
              <li key={rating.Profile.Id} className="list-group-item">
                {rating.Profile.Name}{" "}
                <span className="badge bg-primary rounded-pill">{rating.Rating}</span>
              </li>
            ))
          )}
        </ul>
      </div>
    </>
  )
}

export default MovieRatings
