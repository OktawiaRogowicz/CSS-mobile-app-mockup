import styled, {keyframes} from "styled-components";

export const moveHorizontally = keyframes`
  from {
    transform: translateX(-5rem);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;


const Container = styled.div`

  @media screen and (max-width: 768px) {
    width: 80%;
    text-align: center;
  }
  
  h1 {
    color: var(--very-dark-desaturated-violet);
    font-size: 3rem;
    font-weight: 500;
    animation: ${moveHorizontally} 0.8s ease-in-out both;

    @media screen and (max-width: 760px) {
      font-size: 2.5rem;
    }
  }
  
  p {
    color: var(--dark-grayish-violet);
    line-height: 1.8;
    animation: ${moveHorizontally} 0.8s ease-in-out both;
  }
`

const Description = () => {

    return (
        <Container>
            <h1>Simple booking</h1>

            <p>
                Stay in touch with our dog walkers through the chat interface. This makes it easy to
                discuss arrangements and make bookings. Once the walk has been completed you can rate
                your walker and book again all through the chat.
            </p>
        </Container>
    )

}

export default Description;