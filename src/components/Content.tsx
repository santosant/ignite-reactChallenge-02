import { MovieCard } from '../components/MovieCard';
import { useMovieContext } from '../hooks/MoviesContext';
import '../styles/content.scss';
import '../styles/global.scss';

export function Content() {
    const { movies, selectedGenre } = useMovieContext();

    return (
      <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>
        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
      </div>
    )
  }