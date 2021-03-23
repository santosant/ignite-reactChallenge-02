import { Button } from './Button';
import '../styles/global.scss';
import '../styles/sidebar.scss';
import { useMovieContext } from '../hooks/MoviesContext';

export function SideBar() {
  const { genres, handleClickButton, selectedGenreId } = useMovieContext();

  return (
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              id={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
        </div>
      </nav>
  )
}
