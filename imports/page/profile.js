import React, { PropTypes } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class Profile extends React.Component {
  handleSelect(index, last) {
    // console.log('Selected tab: ' + index + ', Last tab: ' + last);
  }
  render () {
    return (
      <Tabs
          onSelect={this.handleSelect}
          selectedIndex={0}
        >
        <TabList>
            <Tab>My Store</Tab>
            <Tab>My Order</Tab>
            <Tab>My Point</Tab>
        </TabList>
        <TabPanel>
          <PostProduct />
        </TabPanel>
        <TabPanel>
          <h2>Hello from Bar</h2>
        </TabPanel>
        <TabPanel>
          <h2>Hello from Baz</h2>
        </TabPanel>
      </Tabs>
    )
  }
}

class PostProduct extends React.Component {
  render () {
    return (
      <div className="row">
        <h3>Store</h3>
        <div className="col-md-5">

        </div>
        <div className="col-md-7">
          <form className="form-horizontal">
            <div className="form-group">
              <label htmlFor="inputEmail3" className="col-sm-3 control-label">Product Name</label>
              <div className="col-sm-9">
                <input type="name" className="form-control" id="inputEmail3" placeholder="Product name..." />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="inputEmail3" className="col-sm-3 control-label">Description</label>
              <div className="col-sm-9">
                <textarea type="description" className="form-control" id="inputEmail3" placeholder="Description..." />
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col-md-6">
                  <label htmlFor="inputEmail3" className="col-sm-3 control-label">Price</label>
                  <div className="col-sm-9">
                    <input type="price" className="form-control" id="inputEmail3" placeholder="Email" />
                  </div>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputEmail3" className="col-sm-3 control-label">Quantity</label>
                  <div className="col-sm-9">
                    <input type="quantity" className="form-control" id="inputEmail3" placeholder="Email" />
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Profile;
