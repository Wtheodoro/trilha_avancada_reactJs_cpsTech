import React from 'react';
import { SiJavascript, SiTypescript, SiHtml5, SiCss3, SiReact, SiRedux, SiStyledComponents, SiStorybook, SiGit, SiUbuntu } from "react-icons/si";
import { AiOutlineApi, AiOutlineStar } from "react-icons/ai";
import { Container } from './styles';

const Skills = () => {
  return (
    <Container>
      <h2>Skills</h2>

      <div className="content">
        <div className="left">
          <p><SiJavascript/> Javascript</p>
          <p><SiTypescript /> Typescript</p>
          <p><SiHtml5 /> HTML5</p>
          <p><SiCss3 /> CSS3</p>
          <p><SiReact /> ReactJS</p>
          <p><AiOutlineApi /> API Rest</p>
        </div>

        <div className="right">
          <p><SiRedux /> Redux</p>
          <p><AiOutlineStar /> Saga</p>
          <p><SiStyledComponents /> Styled-components</p>
          <p><SiStorybook /> Storybook</p>
          <p><SiGit /> Git</p>
          <p><SiUbuntu /> Linux</p>
        </div>
      </div>
    </Container>
  )
}

export default Skills;