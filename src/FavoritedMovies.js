import React, { Component } from 'react';

class FavoritedMovies extends Component {
  render() {
    const { movieByUser } = this.props;

    return (
      <React.Fragment>
        {Object.entries(movieByUser).map(([movie, usersList]) => (
          <div key={movie}>
            <h3>{movie}</h3>
            {usersList.length ? (
              <React.Fragment>
                <ul>
                  {usersList.map((user) => (
                    <li>{user}</li>
                  ))}
                </ul>
              </React.Fragment>
            ) : (
              <p>None of the current users liked this movie</p>
            )}
          </div>
        ))}
      </React.Fragment>
    );
  }
}

export default FavoritedMovies;
