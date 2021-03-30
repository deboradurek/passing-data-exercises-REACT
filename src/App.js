import React, { Component } from 'react';
import FavoritedMovies from './FavoritedMovies';
// import FavoriteMovieByPerson from './FavoriteMovieByPerson';

/* Instructions for Exercise A:

// Use React and the data below to display a list of users alongside their favorite movies.
// One of the list items might look like this:
// "Jane Cruz's favorite movie is Planet Earth 1."
*/

/* Instructions for Exercise B:

// Instead of displaying a list of users and their movies, this time you need to display a list of movies.
// For each movie in the list, there are two options:

1. If the movie has been favorited, then display a list of all of the users who said that this movie was their favorite.
2. If the movie has *not* been favorited, display some text stating that no one favorited the movie.

// The solution might be composed like this:
```
<h2>Forrest Gump</h2>
<p>Liked By:</p>
<ul>
  <li>Nicholas Lain</li>
</ul>

<h2>Get Out</h2>
<p>Liked By:</p>
<ul>
  <li>John Doe</li>
  <li>Autumn Green</li>
</ul>
```
*/

/* Start
// Data */

const profiles = [
  {
    id: 1,
    userID: '1',
    favoriteMovieID: '1',
  },
  {
    id: 2,
    userID: '2',
    favoriteMovieID: '1',
  },
  {
    id: 3,
    userID: '4',
    favoriteMovieID: '5',
  },
  {
    id: 4,
    userID: '5',
    favoriteMovieID: '2',
  },
  {
    id: 5,
    userID: '3',
    favoriteMovieID: '5',
  },
  {
    id: 6,
    userID: '6',
    favoriteMovieID: '4',
  },
];

const users = {
  1: {
    id: 1,
    name: 'Jane Cruz',
    userName: 'coder',
  },
  2: {
    id: 2,
    name: 'Matthew Johnson',
    userName: 'mpage',
  },
  3: {
    id: 3,
    name: 'Autumn Green',
    userName: 'user123',
  },
  4: {
    id: 4,
    name: 'John Doe',
    userName: 'user123',
  },
  5: {
    id: 5,
    name: 'Lauren Carlson',
    userName: 'user123',
  },
  6: {
    id: 6,
    name: 'Nicholas Lain',
    userName: 'user123',
  },
};

const movies = {
  1: {
    id: 1,
    name: 'Planet Earth 1',
  },
  2: {
    id: 2,
    name: 'Selma',
  },
  3: {
    id: 3,
    name: 'Million Dollar Baby',
  },
  4: {
    id: 4,
    name: 'Forrest Gump',
  },
  5: {
    id: 5,
    name: 'Get Out',
  },
};

/* End */

/* Start
// EXERCISE A - SOLUTION 2 */

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <h2>Favorite Movies</h2>
//         <FavoriteMovieByPerson profiles={profiles} users={users} movies={movies} />
//       </div>
//     );
//   }
// }

/* End */

/* Start
// EXERCISE B - SOLUTION 1 */

class App extends Component {
  constructor(props) {
    super(props);
    this.movieByUser = {};

    const initialValue = Object.values(movies).reduce((acc, { name }) => {
      return { ...acc, [name]: [] };
    }, {});

    this.movieByUser = profiles.reduce((acc, profile) => {
      const usersName = users[profile.userID].name;
      const movieName = movies[profile.favoriteMovieID].name;
      acc[movieName] = [...acc[movieName], usersName];
      return acc;
    }, initialValue);
  }

  render() {
    return (
      <div>
        <h2>How Popular is Your Favorite Movie?</h2>
        <FavoritedMovies movieByUser={this.movieByUser} />
      </div>
    );
  }
}

/* End */

export default App;
