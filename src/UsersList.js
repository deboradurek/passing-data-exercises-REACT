import React, { Component } from 'react';

// Generate lists of people

class UsersList extends Component {
  render() {
    const { usersList } = this.props;

    return (
      <React.Fragment>
        {usersList.length ? (
          <div>
            <p>Liked by:</p>
            <ul>
              {usersList.map((user) => (
                <li key={user}>{user}</li>
              ))}
            </ul>
          </div>
        ) : (
          <p>None of the current users liked this movie</p>
        )}
      </React.Fragment>
    );
  }
}

export default UsersList;
