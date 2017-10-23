import React, {Component} from 'react';
import {connect} from 'react-redux';
import subscribe from 'react-logux/subscribe';

class StoreState extends Component {
  render() {
    return <div>{JSON.stringify(this.props)}</div>
  }
}

const mapStateToProps = Object;

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(subscribe(() => 'graph')(StoreState));
