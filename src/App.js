import './App.css';
import styled from 'styled-components';
import Description from "./components/Description";
import Phone from "./components/phone/Phone";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: var(--light-grayish-violet);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1;
  overflow-x: hidden;

  @media screen and (max-width: 760px) {
    min-height: 140vh;
    display: flex;
    flex-direction: column;
  }
  
  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: -6%;
    width: 28rem;
    height: 85%;
    background-image: radial-gradient(circle at bottom left, var(--light-violet), var(--light-magenta));
    
    border-radius: 0 0 20rem 20rem;
    
    z-index: 2;

    @media screen and (max-width: 760px) {
      height: 50%;
      width: 100%;
      left: -50%;
    }
  }
  
  &:after {
    position: absolute;
    display: block;
    background-repeat: no-repeat;
    content: "";
    bottom: 0;
    right: -10%;
    width: 28rem;
    height: 85%;
    background-image: radial-gradient(circle at bottom left, var(--pale-violet), var(--dark-grayish-violet));
    opacity: 0.1;

    border-radius: 20rem 20rem 0 0;

    z-index: 2;

    @media screen and (max-width: 760px) {
      height: 65%;
      width: 100%;
      right: -50%;
      bottom: -20vh;
    }
  }
`

export const Section = styled.div`
  width: 28rem;
  height: fit-content;
  z-index: 3;

  @media screen and (max-width: 760px) {
    margin-top: 4rem;
    width: 100vw;
    justify-content: center;
    display: flex;
  }
`

function App() {
  return (
    <AppContainer>
        <Section>
            <Phone/>
        </Section>
        <Section>
            <Description/>
        </Section>

    </AppContainer>
  );
}

export default App;
