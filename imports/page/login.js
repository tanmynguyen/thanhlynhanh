import React, { PropTypes } from 'react'
import { createContainer } from 'meteor/react-meteor-data';

class Login extends React.Component {

  loginWithFacebook(){
    var _this = this;
    Meteor.loginWithFacebook({}, (err, result) => {
      if (err) {
        console.error(err);
      } else {
        _this.props.router.goBack();
      }
    })
  }

  componentWillMount() {
    var _this = this;
    if(this.props.user){
      _this.props.router.goBack();
    }
  }

  render () {
    return (
      <div>
          <form className="form-signin">
          <h2 className="form-signin-heading">Please sign in</h2>
          <label htmlFor="inputEmail" className="sr-only">Email address</label>
          <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required="" autoFocus="" />
          <label htmlFor="inputPassword" className="sr-only">Password</label>
          <input type="password" id="inputPassword" className="form-control" placeholder="Password" required="" />
          <div className="checkbox">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
          <div className="row" style={{marginTop: 15}}>
            <div className="col-md-6">
              <a href="javascript:;" onClick={() => this.loginWithFacebook()}><img className="img-responsive" src="/images/facebook-login.png" /></a>
            </div>
            <div className="col-md-6">
              <a href="javascript:;"><img className="img-responsive" src="/images/google-login.png" /></a>
            </div>
          </div>
        </form>
      </div>
    )
  }
}

export default createContainer(() => {
  return {
    user: Meteor.user(),
  };
}, Login);
