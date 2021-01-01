import React, { Component } from 'react';
import { Container } from 'reactstrap';
import BackComponets from '../components/BackComponets';
import { connect } from 'react-redux';
import { getUsersDetail } from '../actions/userAction';
import DetailUserComponent from '../components/DetailUserComponent';

class DetailUserContainer extends Component {
  componentDidMount() {
    this.props.dispatch(getUsersDetail(this.props.match.params.id));
  }
  render() {
    console.log(this.props.match.params.id);
    return (
      <Container>
        <BackComponets />
        <DetailUserComponent />
      </Container>
    );
  }
}
export default connect()(DetailUserContainer);
