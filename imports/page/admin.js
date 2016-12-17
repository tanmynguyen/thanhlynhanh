import React, { PropTypes } from 'react'

class Admin extends React.Component {
  render () {
    return (
        <div id="wrapper">


        <nav className="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="index.html">SB Admin v2.0</a>
            </div>


            <ul className="nav navbar-top-links navbar-right">


                <li className="dropdown">
                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i className="fa fa-user fa-fw"></i> <i className="fa fa-caret-down"></i>
                    </a>
                    <ul className="dropdown-menu dropdown-user">
                        <li><a href="#"><i className="fa fa-user fa-fw"></i> User Profile</a>
                        </li>
                        <li><a href="#"><i className="fa fa-gear fa-fw"></i> Settings</a>
                        </li>
                        <li className="divider"></li>
                        <li><a href="login.html"><i className="fa fa-sign-out fa-fw"></i> Logout</a>
                        </li>
                    </ul>

                </li>

            </ul>


            <div className="navbar-default sidebar" role="navigation">
                <div className="sidebar-nav navbar-collapse">
                    <ul className="nav" id="side-menu">
                        <li>
                            <a href="products.html"><i className="fa fa-product-hunt fa-fw"></i> Products</a>
                        </li>
                        <li>
                            <a href="users.html"><i className="fa fa-users fa-fw"></i> Users</a>
                        </li>
                    </ul>
                </div>

            </div>

        </nav>



<div id="page-wrapper">

<div className="row">

<div className="col-sm-12"  style="margin-top: 30px;">
    <div className="panel panel-primary">
      <div className="panel-heading" style="text-transform: uppercase;">Products awaiting moderation</div>
      <div className="table-responsive">
        <table className="table table-striped">
           <thead>
              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Catagory</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Time Out</th>
                <th>Status</th>
                <th>Verify</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Iphone</td>
                <td>Apple</td>
                <td>799$</td>
                <td>100</td>
                <td>24/12/2016 9:00 AM</td>
                <td>New</td>
                <td>
                    <button type="button" className="btn btn-success">Accept</button>
                    <button type="button" className="btn btn-warning">Decline</button>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Galaxy note 6</td>
                <td>Samsung</td>
                <td>750$</td>
                <td>100</td>
                <td>24/12/2016 12:00 AM</td>
                <td>New</td>
                <td>
                    <button type="button" className="btn btn-success">Accept</button>
                    <button type="button" className="btn btn-warning">Decline</button>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Macbook Ari</td>
                <td>Apple</td>
                <td>1500$</td>
                <td>100</td>
                <td>31/12/2016 9:00 AM</td>
                <td>New</td>
                <td>
                    <button type="button" className="btn btn-success">Accept</button>
                    <button type="button" className="btn btn-warning">Decline</button>
                </td>
              </tr>
            </tbody>
        </table>
    </div>
    </div>
</div>

</div>

</div>
</div>
        );
    }
}


export default Admin;
