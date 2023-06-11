import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

const App = () => {
  return (
    <Container>
      <div style={{ fontWeight: "bold", fontSize: "40px" }}>Hello, World!</div>
    </Container>
  );
};

export default App;
