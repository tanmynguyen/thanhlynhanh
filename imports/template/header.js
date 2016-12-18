
import React, { PropTypes } from 'react'
import { Link } from 'react-router';
import { createContainer } from 'meteor/react-meteor-data';

class Header extends React.Component {
  render () {
    return (
        <nav className="navbar navbar-default">
          <div className="container">
                 <div className="navbar-header">
                      <Link className="navbar-brand" to="/">ThanhLyNhanh.com</Link>
                  </div>

                  <ul className="nav navbar-nav">

                    <li className="hotdeal">
                      <Link className="menu"> HotDeal </Link>
                    </li>

                    <li className="location">
                      Location: Ho Chi Minh City
                    </li>
                  </ul>

                  <ul className="nav navbar-nav navbar-right">
                    {
                      this.props.user ?
                      <div>
                        <li>Hello, <Link to="profile">{this.props.user.profile.name} <i className="fa fa-cart-plus fa-2x iconcart"></i></Link></li>
                        <li><a href="javascript:;" onClick={() => Meteor.logout()}>Logout</a></li>
                      </div>

                      : <li className="login"><Link to="login">Login / Register</Link></li>
                    }
                </ul>
           </div>
        </nav>
    );
  }
}

export default createContainer(() => {
  return {
    user: Meteor.user(),
  };
}, Header);
