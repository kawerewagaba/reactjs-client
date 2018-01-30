import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

class Nav extends Component {
  // handle logout
  handleLogout = (event) => {
    // reset ACCESSTOKEN and userName in local storage
    localStorage.setItem('ACCESSTOKEN', '');
    localStorage.setItem('userHasAuthenticated', false);
    localStorage.setItem('userName', '');
    this.props.history.push('/auth/login');
  }

  render () {
    return (
      <nav>
        <div className="nav_links">
          <ul className="menu">
            <li><Link to="/bucketlists/">Bucketlists</Link></li>
          </ul>
        </div>
        <div className="nav_options">
          <ul className="menu">
            <li className="username">{localStorage.getItem('userName')}</li>
            <li onClick={this.handleLogout} className="logout_button">Logout</li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);