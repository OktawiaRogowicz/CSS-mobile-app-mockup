import Avatar from "../../chat-app-css-illustration-master/images/avatar.jpg";
import Image1 from "../../chat-app-css-illustration-master/images/dog-image-1.jpg";
import Image2 from "../../chat-app-css-illustration-master/images/dog-image-2.jpg";
import Image3 from "../../chat-app-css-illustration-master/images/dog-image-3.jpg";
import Radio from "../Radio";
import styled, {keyframes} from "styled-components";
import {useEffect} from "react";
import React from 'react';

export const Container = styled.div`
  width: 18.75rem;
  height: 37.5rem;
  overflow: hidden;
  box-sizing: border-box;
  position: relative;
  
  background-color: var(--light-grayish-violet);
  
  border-radius: 3.125em 3.125em 3.125em 3.125em;
  border-width: 0.625em;
  border-color: var(--white);
  border-style: solid;
  
  box-shadow: 0em 0em 2em rgba(0, 0, 0, 0.1);
  
  &:before {
    position: absolute;
    width: 50%;
    height: 1.0625rem;
    background-color: var(--white);
    content:"";
    left: calc(50% - 25%);
    border-radius: 0 0 0.625em 0.625em;
  }
`

export const TopContainer = styled.div`
  height: 12.5%;
  width: 100%;
  box-sizing: border-box;
  
  background-image: linear-gradient(90deg, var(--light-violet), var(--light-magenta));
  
  border-radius: 0.625em 0.625em 0.625em 0.625em;
  padding: 1.5em 1em 1em 1em;

  box-shadow: 0.3em 0.3em 0.3em rgba(0, 0, 0, 0.1);
`

export const NameSubcontainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;

  color: var(--white);
  text-align: left;

  img {
    box-sizing: border-box;
    height: 100%;
    
    border-radius: 50%;
    border-style: solid;
    border-color: var(--white);
    border-width: 0.125em;
    
    margin: 0 0.3rem 0 0.3rem;
  }
`

const Username = styled.div`
  h1 {
    margin: 0 0 0.15rem 0;
    font-size: 1rem;
    font-weight: 500;
  }

  h2 {
    margin: 0;
    font-size: 0.70rem;
    opacity: 50%;
    font-weight: 400;
  }
`

const showMessage = keyframes`
  from {
    transform: translateY(1rem);
    opacity: 0;
  }

  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Message = styled.div`
  min-width: 30%;
  max-width: 50%;
  width: fit-content;
  display: flex;
  
  padding: 0.9em 0.9em 0.9em 0.9em;
  margin: 0.625rem;
  
  line-height: 1.4;
  
  font-size: 0.6rem;
  
  animation: ${showMessage} 400ms linear both;
`

export const MessageLeft = styled(Message)`
  background-color: var(--moderate-violet-light);
  
  border-radius: 0.625em 0.625em 0.625em 0.3em;
  
  margin-left: 0.625rem;
  margin-right: auto;

  text-align: left;
  justify-content: left;
  color: var(--moderate-violet);
`;

export const MessageRight = styled(Message)`
  background-color: var(--white);

  border-radius: 0.625em 0.625em 0.3em 0.625em;
  
  margin-right: 0.625rem;
  margin-left: auto;

  text-align: right;
  justify-content: right;
  color: var(--desaturated-dark-violet);
`;

const animateGradient = keyframes`
  0% {
    background-position: 0 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0 50%;
  }
`

export const MessageLeftButton = styled(MessageLeft)`
  max-width: 70%;
  width: 70%;
  box-sizing: border-box;
  background-image: linear-gradient(90deg, var(--light-magenta), var(--light-violet));
  background-size: 400% 400%;
  
  color: var(--white);
`;

export const MessageRightImage = styled(MessageRight)`
  min-width: auto;
  max-width: none;
  width: fit-content;
  background: transparent;
  padding: 0;
  
    img {
      box-sizing: border-box;
      border-radius: 1rem;
      height: 3.25rem;
      margin-right: 0.5rem;

      box-shadow: 0 0 0.5em rgba(0, 0, 0, 0.1);
    }
`

export const BottomInput = styled.div`
  height: 2em;
  width: calc(100% - 1.25rem);
  position: absolute;
  box-sizing: border-box;
  bottom: 0.625rem;
  right: 0.625rem;
  background-color: var(--white);

  padding: 2em 1em 1em 1em;
  border-radius: 3.125em 3.125em 3.125em 3.125em;
  
  &:after {
    width: 2.5rem;
    height: 2.5rem;
    display: inline-block;
    vertical-align: middle;
    position: absolute;
    right: 0.625rem;
    top: calc(50% - 1.25rem);
    background-color: var(--very-dark-desaturated-violet);

    margin: 0;
    border-radius: 100%;
    
    content: ">";
    color: var(--white);
    text-align: center;
    
    font-weight: 400;
    font-size: 2rem;
    line-height: 2.35rem;
  }
  
  p {
    position: absolute;
    margin: 0;
    top: calc(50% - 0.5rem);
    color: var(--dark-grayish-violet);
    font-size: 0.8rem;
  }
`

class Phone extends React.Component {
    ref = React.createRef();

    componentDidMount() {
        const initialDelay = 200;
        [...this.ref.current.children].forEach(function addDelaysToMessages(message, index) {
            let delay = initialDelay + index * 800;
            delay = delay.toString();
            message.style.animationDelay = delay + "ms";
        });
    }

    render() {
        return (
            <Container>
                <TopContainer>
                    <NameSubcontainer>
                        <div style={{
                            marginRight: "0.3rem",
                            marginLeft: "0",
                            marginTop: "0.625rem",
                            fontWeight: "700"
                        }}>&#60;</div>
                        <img src={Avatar} alt={"Logo"}/>
                        <Username>
                            <h1>Samuel Green</h1>
                            <h2>Available to Walk</h2>
                        </Username>
                        <div style={{
                            marginRight: "0",
                            marginLeft: "auto",
                            marginTop: "0.625rem",
                            fontWeight: "700"
                        }}>&#8942;</div>
                    </NameSubcontainer>
                </TopContainer>
                <div ref={this.ref}>
                    <MessageLeft>That sounds great. I’d be happy with that.</MessageLeft>
                    <MessageLeft>Could you send over some pictures of your dog, please?</MessageLeft>

                    <MessageRightImage>
                        <img src={Image1} alt={"Logo"}/>
                        <img src={Image2} alt={"Logo"}/>
                        <img src={Image3} alt={"Logo"}/>
                    </MessageRightImage>
                    <MessageRight>Here are a few pictures. She’s a happy girl!</MessageRight>
                    <MessageRight>Can you make it?</MessageRight>

                    <MessageLeft>She looks so happy! The time we discussed works. How long shall I take her out
                        for?</MessageLeft>

                    <MessageLeftButton>
                        <Radio amount="$29">30 minute walk</Radio>
                    </MessageLeftButton>
                    <MessageLeftButton>
                        <Radio amount="$49">1 hour walk</Radio>
                    </MessageLeftButton>
                </div>

                <BottomInput>
                    <p>Type a message…</p>
                </BottomInput>
            </Container>
        )
    }
}

export default Phone;