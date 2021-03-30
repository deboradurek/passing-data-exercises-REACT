# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

`yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits, and you will also see any lint errors in the console.

# Exercise A: `passing-data`

This exercise uses React and data to display a list of users alongside their favorite movies.\
One of the list items might look like this:

_"Jane Cruz's favorite movie is Planet Earth 1."_

## Solution 1

This solution is shown in the **Solution1-SingleComponent.js** file, and is the simpliest solution.

- It uses the _profiles_ array, and _users_ and _movies_ objects all in the same file.
- There are no imports, no other components and no props added.

```
class App extends Component {
 render() {
   return (
     <div>
       <h2>Favorite Movies</h2>
       <ul>
         {profiles.map((profile) => {
           const usersName = users[profile.userID].name;
           const movieName = movies[profile.favoriteMovieID].name;

           return (
             <li key={profile.id}>
               <p>{`${usersName}'s favorite movie is ${movieName}.`}</p>
             </li>
           );
         })}
       </ul>
     </div>
   );
 }
}
```

## Solution 2

The block of code to run this solution is commented in the ./App.js, starting at line 134.\
You can use this solution by uncommenting this block of code and commenting the one below it,
which is for _Exercise B_, until just before `export default App;`.

```
/* Start
// EXERCISE A - SOLUTION 2 */

class App extends Component {
   render() {
     return (
       <div>
         <h2>Favorite Movies</h2>
         <FavoriteMovieByPerson profiles={profiles} users={users} movies={movies} />
       </div>
     );
   }
 }

/* End */
```

- It uses the _profiles_ array, and _users_ and _movies_ objects all as props in the component element.
- It uses the import of _FavoriteMovieByPerson.js_ for the main external component.

```
class FavoriteMovieByPerson extends Component {
  render() {
    const { profiles, users, movies } = this.props;

    return (
      <ul>
        {profiles.map((profile) => {
          const usersName = users[profile.userID].name;
          const movieName = movies[profile.favoriteMovieID].name;

          return (
            <li key={profile.id}>
              <p>{`${usersName}'s favorite movie is ${movieName}.`}</p>
            </li>
          );
        })}
      </ul>
    );
  }
}
```

# Exercise B: `passing-data`

This exercise uses the same data as the previous one.
Instead of displaying only a list of users and their movies, a list of movies will be displayed.

For each movie in the list, there are two options:

1. If the movie has been favorited, then display a list of all of the users who said that this movie was their favorite.
2. If the movie has _not_ been favorited, display some text stating that no one favorited the movie.

## Solution 1

This solution is the one used as default to run the program.

- It uses the _movieByUser_ new array as prop in the component element.
- It uses the constructor method inside the App component.
- It uses the import of _FavoritedMovies.js_ and _UsersList.js_ as external components.

```
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
```
