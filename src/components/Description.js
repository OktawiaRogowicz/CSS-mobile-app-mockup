import styled from "styled-components";

const Container = styled.div`

  @media screen and (max-width: 760px) {
    width: 80%;
    text-align: center;
  }
  
  h1 {
    color: var(--very-dark-desaturated-violet);
    font-size: 3rem;
    font-weight: 500;

    @media screen and (max-width: 760px) {
      font-size: 2.5rem;
    }
  }
  
  p {
    color: var(--dark-grayish-violet);
    line-height: 1.8;
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