import './App.css';
import styled from 'styled-components';
import Description from "./components/Description";
import Phone from "./components/phone/Phone";

export const AppContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: var(--light-grayish-violet);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1;
  
  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: -6%;
    width: 32%;
    height: 85%;
    background-image: radial-gradient(circle at bottom left, var(--light-violet), var(--light-magenta));
    
    border-radius: 0 0 20rem 20rem;
    
    z-index: 2;
  }
  
  &:after {
    position: absolute;
    content: "";
    bottom: 0;
    right: -10%;
    width: 32%;
    height: 85%;
    background-image: radial-gradient(circle at bottom left, var(--pale-violet), var(--dark-grayish-violet));
    opacity: 0.1;

    border-radius: 20rem 20rem 0 0;

    z-index: 2;
  }
`

export const Section = styled.div`
  width: 28rem;
  height: fit-content;
  z-index: 3;
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
