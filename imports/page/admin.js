import React, { PropTypes } from 'react'

class Admin extends React.Component {
  render () {
    return (
        <div id="wrapper">


        <nav class="navbar navbar-default navbar-static-top" role="navigation" style="margin-bottom: 0">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="index.html">SB Admin v2.0</a>
            </div>


            <ul class="nav navbar-top-links navbar-right">


                <li class="dropdown">
                    <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                        <i class="fa fa-user fa-fw"></i> <i class="fa fa-caret-down"></i>
                    </a>
                    <ul class="dropdown-menu dropdown-user">
                        <li><a href="#"><i class="fa fa-user fa-fw"></i> User Profile</a>
                        </li>
                        <li><a href="#"><i class="fa fa-gear fa-fw"></i> Settings</a>
                        </li>
                        <li class="divider"></li>
                        <li><a href="login.html"><i class="fa fa-sign-out fa-fw"></i> Logout</a>
                        </li>
                    </ul>

                </li>

            </ul>


            <div class="navbar-default sidebar" role="navigation">
                <div class="sidebar-nav navbar-collapse">
                    <ul class="nav" id="side-menu">
                        <li>
                            <a href="products.html"><i class="fa fa-product-hunt fa-fw"></i> Products</a>
                        </li>
                        <li>
                            <a href="users.html"><i class="fa fa-users fa-fw"></i> Users</a>
                        </li>
                    </ul>
                </div>

            </div>

        </nav>



<div id="page-wrapper">

<div class="row">

<div class="col-sm-12"  style="margin-top: 30px;">
    <div class="panel panel-primary">
      <div class="panel-heading" style="text-transform: uppercase;">Products awaiting moderation</div>
      <div class="table-responsive">
        <table class="table table-striped">
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
                    <button type="button" class="btn btn-success">Accept</button>
                    <button type="button" class="btn btn-warning">Decline</button>
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
                    <button type="button" class="btn btn-success">Accept</button>
                    <button type="button" class="btn btn-warning">Decline</button>
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
                    <button type="button" class="btn btn-success">Accept</button>
                    <button type="button" class="btn btn-warning">Decline</button>
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
