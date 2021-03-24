import React from 'react';
import { RiHome2Line, RiContactsLine, RiGithubLine } from 'react-icons/ri'
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Cornerstone = () => {
  return (
    <Container>
      <div className="icon">
        <Link to="/"><RiHome2Line /></Link>
        <Link to="/info"><RiContactsLine /></Link>
        <Link to="/work"><RiGithubLine /></Link>
      </div>
    </Container>
  );
};

export default Cornerstone;
