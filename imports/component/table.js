import React, { PropTypes } from 'react';
import moment from 'moment';
import countdown from 'countdown';
import momentcountdown from 'moment-countdown';

class TableProduct extends React.Component {
  render () {
    var product = this.props.product;
    var location = this.props.location;

    return (
      <div className="row">
        <div className="col-sm-12"  style={{marginTop: 30}}>
          <div className="panel panel-primary">
            <div className="table-responsive">
              <table className="table table-striped">
                 <thead>
                    <tr>
                      <th>Image</th>
                      <th>Product Name</th>
                      <th>Category</th>
                      <th>Price Normal</th>
                      <th>Price Sale</th>
                      <th>Quantity</th>
                      <th>Create time</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      product.map((val, i) => {
                        return <ItemRow product={val} key={i} location={location} />
                      })
                    }
                  </tbody>
              </table>
          </div>
          </div>
        </div>
      </div>
    )
  }
}

class ItemRow extends React.Component {

  constructor(props){
    super(props);
    // console.log('lan 1 ' + this.props.product.update_at);
    this.state = {
      category: "",
      status: this.props.product.status,
    }
  }

  componentWillMount() {
    var _this = this;
    Meteor.call('getCategoryById', this.props.product.category_id, (err, result) => {
      if(err){
        console.error(err);
      } else {
        _this.setState({category: result.name})
      }
    })
  }

  updateStatusProduct(status){
    var _this = this;
    // console.log(this);
    var _product = {
      id: this.props.product._id,
      status: status
    }
    // console.log('lan 2 ' + this.props.product.update_at);
    Meteor.call('updateStatusProduct', _product, (err, result) => {
      if(err){
        console.error(err);
      } else {
        // console.log('change status success!');
        // console.log(_product.status);
        _this.setState({status: status});
      }
    })
  }

  render () {
    // console.log('xxx: ' + typeof this.props.location);
    var val = this.props.product;
    var category = this.props.category;
    console.log(this.props.location);
    return (
      <tr>
        <td><img src={val.imageBase64} className="img-responsive" width="150px"/></td>
        <td style={{'verticalAlign': 'middle'}}>{val.name}</td>
        <td style={{'verticalAlign': 'middle'}}>{this.state.category}</td>
        <td style={{'verticalAlign': 'middle'}}>{val.normal_price}</td>
        <td style={{'verticalAlign': 'middle'}}>{val.sale_price}</td>
        <td style={{'verticalAlign': 'middle'}}>{val.quantity}</td>
        <td style={{'verticalAlign': 'middle'}}>{moment(val.create_at).format('lll')}</td>
        <td style={{'verticalAlign': 'middle'}}>
          {
            (typeof this.props.location == 'undefined') ? val.status :
              ((this.state.status == 'verifying') ?
                <div>
                  <button style={{'marginRight': '10px'}} type="button" className="btn btn-success" onClick={() => this.updateStatusProduct('processing')}>Accept</button>
                </div>
              :((this.state.status == 'processing') ?
                <div>
                  <button type="button" className="btn btn-warning" onClick={() => this.updateStatusProduct('cancel')}>Stop</button>
                </div>
              :this.state.status))
          }
        </td>
      </tr>
    )
  }
}

export default TableProduct;
