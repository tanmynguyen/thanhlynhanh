import React, { PropTypes } from 'react'
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

class Header extends React.Component {
  render () {
    return (
      <header>
        <div className="row">
          <div className="col-md-2">
            <Link to="/"><img className="img-responsive" src="/images/logo.png" /></Link>
          </div>

          <div className="col-md-2">
            <div className = "row navbar">
              <Link> Home </Link>
              <Link> HotDeal </Link>
            </div>
          </div>

          <div className="col-md-4">
            <div className="row">
              Location: Ho Chi Minh City
            </div>
            <div className="row">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search for..." />
                <span className="input-group-btn">
                  <button className="btn btn-default" type="button">Search</button>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-4 login">
            {
              this.props.user?
              <div>
                <Link>{this.props.user.profile.name}</Link>
                <a href="javascript:;" onClick={() => Meteor.logout()}>Logout</a>
              </div>
              :<Link to="login">Login / Register</Link>
            }

          </div>
        </div>
      </header>
    )
  }
}

export default createContainer(() => {
  return {
    user: Meteor.user(),
  };
}, Header);
