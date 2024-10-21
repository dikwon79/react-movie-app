import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Movie from "../components/Movie";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setMovie(json.data.movie);
      setLoading(false);
    };

    getDetail();
  }, [id]);

  return (
    <div className={styles.container}>
      {loading ? (
      <div className={styles.loader}>
        <span>Loading...</span>
      </div>
      ) : (
      <div className={styles.movies}>  
        {movie && (
          <Movie
            key={movie.id}
            id={movie.id}
            coverImg={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
          />
         )
        }
      </div>
    )}
    </div>
  );
}

export default Detail;