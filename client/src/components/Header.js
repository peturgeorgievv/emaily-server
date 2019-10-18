import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return (
          <React.Fragment>
            <li key="1"><Payments /></li>
            <li key="3" style={{ margin: '0 10px' }}>
              Credits: {this.props.auth.credits}
            </li>
            <li key="2"><a href="/api/logout">Logout</a></li>
          </React.Fragment>
        );
    }
  }

  render() {
    return (
      <header>
        <nav>
          <div className="nav-wrapper grey darken-2">
            <Link
              to={this.props.auth ? '/surveys' : '/'}
              className="left brand-logo"
            >
              Emailster
          </Link>
            <ul className="right">
              {this.renderContent()}
            </ul>
          </div>
        </nav>
      </header>

    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
