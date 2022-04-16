import './App.css';
import styled, {keyframes} from 'styled-components';
import Description from "./components/Description";
import Phone from "./components/phone/Phone";
import {useEffect, useState} from "react";

const moveVertically = (y) => keyframes`
  0% {
    background-position: 0 50%;
  }
  100% {
    height: ${y};
    background-position: 100% 50%;
  }
`;

const AppContainer = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  position: relative;
  background-color: var(--light-grayish-violet);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  z-index: 1;

  overflow-x: hidden;

  @media screen and (max-width: 768px) {
    height: fit-content;
    display: flex;
    flex-direction: column;
    
    padding: 2rem 0 2rem 0;
  }
  
  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: -6%;
    width: 28rem;
    height: 85%;
    background-image: radial-gradient(circle at bottom left, var(--light-violet), var(--light-magenta));
    //background-size: 400% 400%;

    border-radius: 0 0 20rem 20rem;

    z-index: 2;

    animation: ${props => moveVertically(props.y1)} 8s infinite ease-in-out alternate-reverse;

    @media screen and (max-width: 768px) {
      height: 65%;
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

    animation: ${props => moveVertically(props.y2)} 7s infinite ease-in-out alternate-reverse;

    @media screen and (max-width: 768px) {
      height: 40%;
      width: 100%;
      right: -50%;
      bottom: 0;
    }
  }
`

const Section = styled.div`
  width: 28rem;
  z-index: 3;

  @media screen and (max-width: 768px) {
    width: 100vw;
    justify-content: center;
    display: flex;

    align-items: center;
    margin: 2rem 0 2rem 0;
  }
`

function App() {

    const [width, setWidth] = useState(window.innerWidth);

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    const isMobile = width <= 768;

  return (
    <AppContainer y1={ isMobile ? "60%" : "80%"} y2={ isMobile ? "50%" : "80%"} >
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
