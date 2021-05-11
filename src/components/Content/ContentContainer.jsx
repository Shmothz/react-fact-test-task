import React from 'react'
import {connect} from 'react-redux';
import Content from './Content';
import {getApiDataTC} from '../../redux/reducer';

class ContentContainer extends React.Component {

  render() {
    return <Content {...this.props} />
  }
}

const mapStateToProps = (state) => {
  return {data: state.app.data}
}

const ConnectContentContainer = connect(mapStateToProps, {getApiDataTC})(ContentContainer)
export default ConnectContentContainer