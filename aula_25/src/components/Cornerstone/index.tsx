import React from 'react';
import { RiHome2Line, RiContactsLine, RiGithubLine } from 'react-icons/ri'
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Cornerstone = () => {
  return (
    <Container>
      <div className="icon">
        <div className="each-icon"><Link to="/"><RiHome2Line /></Link></div>
        <div className="each-icon"><Link to="/info"><RiContactsLine /></Link></div>
        <div className="each-icon"><Link to="/work"><RiGithubLine /></Link></div>
      </div>
    </Container>
  );
};

export default Cornerstone;
