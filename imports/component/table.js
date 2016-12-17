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
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Time Out</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      product.map((val, i) => {
                        return <tr>
                          <td><img src={val.imageBase64} className="img-responsive" width="150px"/></td>
                          <td style={{'verticalAlign': 'middle'}}>{val.name}</td>
                          <td style={{'verticalAlign': 'middle'}}>Apple</td>
                          <td style={{'verticalAlign': 'middle'}}>{val.normal_price}</td>
                          <td style={{'verticalAlign': 'middle'}}>{val.quantity}</td>
                          <td style={{'verticalAlign': 'middle'}}>{moment(val.create_at).format('LLL')}</td>
                          <td style={{'verticalAlign': 'middle'}}>{val.status}</td>
                        </tr>
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

export default TableProduct;
