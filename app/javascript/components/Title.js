import React from 'react';
import styled from 'styled-components';
import avatar from 'images/avatar.png'; 
import { SiRuby, SiRails, SiNodeDotJs, SiReact, SiHtml5, SiCss3 } from 'react-icons/si';

const Header = styled.div `
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TitleBox = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const TitleText = styled.div `
  font-size: 80px;
`

const ImageBox = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0 30px 0;  
`

const SkillsIcons = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`

const Title = () => {
  return(
    <Header>
      <TitleBox>
        <TitleText>Hi, I'm Jamieson</TitleText>
        <ImageBox>
            <img src={avatar} alt="avatar" className="avatar" />
            <h2>I code in...</h2>
        </ImageBox>
        <SkillsIcons>
          <SiRuby size={48} className="mx-3 lang-icon" />
          <SiRails size={48} className="mx-3 lang-icon" />
          <SiNodeDotJs size={48} className="mx-3 lang-icon" />
          <SiHtml5 size={48} className="mx-3 lang-icon" />
          <SiCss3 size={48} className="mx-3 lang-icon" />
          <SiReact size={48} className="mx-3 lang-icon" />
        </SkillsIcons>
      </TitleBox>
    </Header>
  );
}

export default Title;
