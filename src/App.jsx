import styled from "styled-components";
import Home from "./pages/Home.jsx";

const AppContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 16px;
`;

function App() {
  return (
    <AppContainer>
      <Home />
    </AppContainer>
  );
}

export default App;
