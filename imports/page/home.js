import React, { PropTypes } from 'react'

class Home extends React.Component {
  render () {
    return (
    <div className="container">
        <div className="row">
        <div className="col-sm-12">
            <div className="input-group">
              <span className="input-group-btn">
                <button className="btn btn-secondary" type="button">Find product</button>
              </span>
              <input type="text" className="form-control" placeholder="Product name..."/>
              <span className="input-group-btn">
                <button className="btn btn-secondary" type="submit"><i className="fa fa-search fa-lg"></i></button>
              </span>
            </div>
        </div>
        </div>

        <div className="row category">
            <div className="col-md-6 selectform">
                <form className="form-inline">
                  <div className="form-group col-sm-4">
                      <div className="row">
                        <select className="form-control" style={{width: 95 + '%'}} name="">
                            <option value="">All</option>
                            <option value="">Technology</option>
                            <option value="">Fashion</option>
                            <option value="">Book</option>
                        </select>
                      </div>
                  </div>
                  <div className="form-group col-sm-4">
                    <div className="row">
                        <select className="form-control col-sm-12" style={{width: 95 + '%'}} name="">
                            <option value="">All</option>
                            <option value="">Laptop</option>
                            <option value="">Mobile</option>
                        </select>
                    </div>
                  </div>
                  <div className="form-group col-sm-4">
                    <div className="row">
                        <select className="form-control col-sm-12" style={{width: 95 + '%'}} name="">
                            <option value="">Order by</option>
                            <option value="">Order by</option>
                            <option value="">Orderby New</option>
                        </select>
                    </div>
                  </div>

                </form>
            </div>
        </div>

        <div className="col-md-6">
            <div className="col-sm-6">
                <label><input type="radio" name="price"/>$1 - $999</label>
            </div>
            <div className="col-sm-6">
                <label><input type="radio" name="price"/>$1000 - $4999</label>
            </div>
            <div className="col-sm-6">
                <label><input type="radio" name="price"/>$5000 - $19999</label>
            </div>
            <div className="col-sm-6">
                <label><input type="radio" name="price"/>$2000 - $99999</label>
            </div>
        </div>


    <div className="row product">



      <div className="col-lg-3 col-md-4 col-sm-6 co-xs-12">
        <div className="hot-product">
          <img src="https://cdn2.iconfinder.com/data/icons/flatte-internet-and-websites/80/03_-_Fire-128.png" width="50px" height="50px" />
        </div>
        <div className="thumbnail">
          <a href="/w3images/lights.jpg">
            <img src="http://www.w3schools.com/bootstrap/cinqueterre.jpg" alt="Lights" style={{width: 100 + '%'}}/>
            <div className="caption">
              <h3>Lorem ipsum...</h3>
              <div className="text-center"><span className="price">$400</span></div>
              <div className="clearfix">
                <div className="col-md-6"><span className="oldprice">$400</span></div>
                <div className="col-md-6"><span className="newprice">$200</span></div>
              </div>
              <div className="clearfix">
                <div className="quantumtxt">Need Active: <span className="quatum">300</span></div>
                <div className="timetxt">Time: <span className="time"> 23:59:26</span></div>
              </div>
              <div className="clearfix">
                <span className="pull pull-right"><span className="mypoints">Points: 200</span></span>
              </div>
              <div className="clearfix">
                <div className="row">
                  <div className="col-sm-6" style={{paddingRight: 0}}><i className="fa fa-user"> Nguyennhatkha92</i></div>
                  <div className="col-sm-6"><i className="fa fa-map-marker"> Ho chi Minh</i></div>
                </div>
              </div>
              <div className="text-center">
                <button className="btn btn-info"><i className="fa fa-cart-plus" aria-hidden="true"></i> Buy now!</button>
              </div>
            </div> </a>
        </div>
      </div>

    </div>
</div>
    );
  }
}

export default Home;
