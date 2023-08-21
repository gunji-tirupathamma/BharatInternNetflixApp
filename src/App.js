import React from 'react'

import {
  MainContainer,
  NavbarContainer,
  NavbarLogo,
  Image,
  NavbarRight,
  LanguagesSelect,
  Options,
  SigninButton,
  TitleContainer,
  ContentContainer,
  Title,
  Description1,
  FormContainer,
  Desription2,
  EmailContainer,
  Email,
  StartButton
}
 from './styledComponents'

 import NameImage from './netflix-app-icon-images-20.png'

const App=()=> {
  return (
    <div className="App">
        <MainContainer>
            <NavbarContainer>
              <NavbarLogo>
                 <Image src={NameImage} alt="name"/>
              </NavbarLogo>
              <NavbarRight>
                  <LanguagesSelect name="language">
                      <Options value="telugu">Telugu</Options>
                      <Options value="english">English</Options>
                      <Options value="hindi">Hindi</Options>
                  </LanguagesSelect>
                  <SigninButton>Sign In</SigninButton>
              </NavbarRight>
            </NavbarContainer>

            <TitleContainer>
                <ContentContainer>
                    <Title>Unlimited movies, TV shows and more.</Title>
                    <Description1>Watch anywhere, Cancel anywhere</Description1>
                    <FormContainer>
                        <Desription2>Ready to watch? Enter your Email to create or restart your membership.</Desription2>
                        <EmailContainer>
                          <Email type="email" name="email" placeholder='Enter Email'/>
                          <StartButton>Get Started > </StartButton>
                        </EmailContainer>
                    </FormContainer>
                </ContentContainer>
            </TitleContainer>
        </MainContainer>
    </div>
  );
}

export default App;
