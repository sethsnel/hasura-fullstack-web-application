import Image from "next/image"
import { AiFillStar } from "react-icons/ai"

import { MovieQuery } from "../core/generated/graphql"
import AccordionItem from "./accordionItem"

type MovieListProps = { data: MovieQuery | undefined }

const MovieDetail = ({ data }: MovieListProps) => {
  const movie = data?.Movies[0]

  return (
    <>
      {movie?.PosterUrl && (
        <Image
          height="328"
          width="221"
          layout="responsive"
          objectFit="cover"
          alt="movie title"
          src={`https://image.tmdb.org/t/p/w500${movie.PosterUrl}`}
        />
      )}
      <div className="badge pb-3 fs-1 d-flex align-items-center position-absolute top-0 start-50 translate-middle-x">
        {movie?.Ratings_aggregate.aggregate?.avg?.Rating?.toFixed(1) || "-"} <AiFillStar />
      </div>
      <div className="accordion" id="accordion">
        <AccordionItem title="Synopsis" body={movie?.Description} id="first" />
      </div>
    </>
  )
}

export default MovieDetail
