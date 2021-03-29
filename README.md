# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

`yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits, and you will also see any lint errors in the console.

# Exercise 1: `passing-data-1`

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

This solution is the one used as default to run the program.

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

```
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
```
