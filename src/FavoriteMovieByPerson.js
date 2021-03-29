import React, { Component } from 'react';

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

export default FavoriteMovieByPerson;
