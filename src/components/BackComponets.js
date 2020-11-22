import React from 'react';
import { Col, Row, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import {
  faEdit,
  faInfo,
  faArrowLeft,
  faUserPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const BackComponets = () => {
  return (
    <Row className='mb-2'>
      <Col>
        <Link to='/'>
          <Button color='dark' className='mr-2'>
            <FontAwesomeIcon icon={faArrowLeft} /> Back
          </Button>
        </Link>
      </Col>
    </Row>
  );
};

export default BackComponets;
