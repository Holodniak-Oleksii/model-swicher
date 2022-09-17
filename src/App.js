import { useState } from "react";
import styled from "styled-components";
import { Scene } from "./components/Scene";
const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 80%;
  height: 80vh;
  /* display: grid;
  grid-template-columns: repeat(3, 33%); */
`;
const Switch = styled.div`
  width: 80%;
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const ButtonSwitch = styled.button`
  all: unset;
  ${(props) =>
    props.isActive
      ? `  
    background-color: #f2f2f2;
    color: #191919;`
      : `
    background-color: #191919;
    color: #f2f2f2;
  `}
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    color: #191919;
    background-color: #f2f2f2;
  }
`;

function App() {
  const [isActive, setActive] = useState("ak-47");
  return (
    <Wrapper>
      <Switch>
        <ButtonSwitch
          onClick={() => {
            setActive("ak-47");
          }}
          isActive={isActive === "ak-47"}
        >
          AK-47
        </ButtonSwitch>
        <ButtonSwitch
          onClick={() => {
            setActive("musket");
          }}
          isActive={isActive === "musket"}
        >
          Musket
        </ButtonSwitch>
        <ButtonSwitch
          onClick={() => {
            setActive("remington");
          }}
          isActive={isActive === "remington"}
        >
          Remington
        </ButtonSwitch>
        <ButtonSwitch
          onClick={() => {
            setActive("rpg7");
          }}
          isActive={isActive === "rpg7"}
        >
          RPG-7
        </ButtonSwitch>
      </Switch>
      <Container>
        <Scene url={`models/${isActive}.glb`} />
      </Container>
    </Wrapper>
  );
}

export default App;
