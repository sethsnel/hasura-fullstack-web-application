import Image from "next/image"
import Link from "next/link"
import { AiFillStar } from "react-icons/ai"

type MovieTileProps = {
  movie: { Id: string; PosterUrl: string; AverageRating?: number }
}

const MovieTile = ({ movie }: MovieTileProps) => {
  return (
    <div className="col" key={movie.Id}>
      <Link href={movie.Id.toString()}>
        <a>
          <div className="card text-white">
            <Image
              className="card-img"
              height="328"
              width="221"
              layout="responsive"
              objectFit="cover"
              alt="movie title"
              src={`https://image.tmdb.org/t/p/w500${movie.PosterUrl}`}
            />
            <div className="card-img-overlay">
              {/* <h5 className="card-title text-center fs-4">{movie.Title}</h5> */}
              <p className="card-text fs-4 d-flex align-items-center position-absolute bottom-0 start-50 translate-middle-x">
                {movie.AverageRating ? movie.AverageRating.toFixed(1) : "-"} <AiFillStar />
              </p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  )
}

export default MovieTile
