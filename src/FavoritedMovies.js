import React, { Component } from 'react';
import UsersList from './UsersList';

// Uses an initial array of movies who have been favorited to form a list of movies

class FavoritedMovies extends Component {
  render() {
    const { movieByUser } = this.props;

    return (
      <>
        {Object.entries(movieByUser).map(([movie, usersList]) => (
          <div key={movie}>
            <h3>{movie}</h3>
            <UsersList usersList={usersList} />
          </div>
        ))}
      </>
    );
  }
}

export default FavoritedMovies;
