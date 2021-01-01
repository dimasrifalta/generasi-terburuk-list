import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
const mapStateToProps = (state) => {
  return {
    title: state.users.title,
  };
};
const JumbotronComponents = (props) => {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1 className='display-3'>{props.title}</h1>
          <p className='lead'>OII TES</p>
          <hr className='my-2' />
          <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
          </p>
          <p className='lead'>
            <Button color='dark'>
              <FontAwesomeIcon icon={faInfo} /> Learn More
            </Button>
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default connect(mapStateToProps, null)(JumbotronComponents);
