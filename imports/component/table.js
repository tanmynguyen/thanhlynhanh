import React, { PropTypes } from 'react';
import moment from 'moment';

class TableProduct extends React.Component {
  render () {
    var product = this.props.product;
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
                        return <ItemRow product={val} key={i} />
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
    this.state = {
      category: ""
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

  render () {
    var val = this.props.product;
    var category = this.props.category;
    return (
      <tr>
        <td><img src={val.imageBase64} className="img-responsive" width="150px"/></td>
        <td style={{'verticalAlign': 'middle'}}>{val.name}</td>
        <td style={{'verticalAlign': 'middle'}}>{this.state.category}</td>
        <td style={{'verticalAlign': 'middle'}}>{val.normal_price}</td>
        <td style={{'verticalAlign': 'middle'}}>{val.sale_price}</td>
        <td style={{'verticalAlign': 'middle'}}>{val.quantity}</td>
        <td style={{'verticalAlign': 'middle'}}>{moment(val.create_at).format('lll')}</td>
        <td style={{'verticalAlign': 'middle'}}>{val.status}</td>
      </tr>
    )
  }
}

export default TableProduct;
