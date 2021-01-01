import React, { Component } from 'react';
import { Container } from 'reactstrap';
import BackComponets from '../components/BackComponets';
import FormComponent from '../components/FormComponent';
import { connect } from 'react-redux';
import { postUserCreate } from '../actions/userAction';
import swal from 'sweetalert';

const mapStateToProps = (state) => {
  return {
    getResponDataUser: state.users.getResponDataUser,
    errorResponDataUser: state.users.errorResponDataUser,
  };
};
class CreateUserContainer extends Component {
  handleSubmit(data) {
    this.props.dispatch(postUserCreate(data));
  }
  render() {
    if (this.props.getResponDataUser || this.props.errorResponDataUser) {
      if (this.props.errorResponDataUser) {
        swal('Failed!', 'Gagal Menambah User ', 'error');
      } else {
        swal(
          'User Created!',
          'User ' + this.props.getResponDataUser.nama + ' ditambah',
          'success'
        );
      }
    }
    return (
      <Container>
        <BackComponets />
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

export default connect(mapStateToProps, null)(CreateUserContainer);
