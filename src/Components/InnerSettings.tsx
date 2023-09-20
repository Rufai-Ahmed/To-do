import styled from "styled-components";
import { useState } from "react";

interface iButton {
  text: string;
}

const InnerSettings: React.FC<iButton> = ({ text }) => {
  const [on, off] = useState(false);

  const Toggle = () => {
    off(!on);
  };

  return (
    <div>
      <Container>
        <Text>{text}</Text>
        {on ? (
          <Button onClick={Toggle}>
            <Hold tog="end" clr="blue" brd="none">
              <Circle></Circle>
            </Hold>
            {on ? "On" : "Off"}
          </Button>
        ) : (
          <Button onClick={Toggle}>
            <Hold tog="start" clr="" brd="black">
              <Circle style={{ backgroundColor: "black" }}></Circle>
            </Hold>
            {on ? "On" : "Off"}
          </Button>
        )}
      </Container>
    </div>
  );
};

export default InnerSettings;

const Circle = styled.div`
  background-color: white;
  border-radius: 50%;
  width: 15px;
  height: 15px;
`;

const Hold = styled.div<{ tog: string; clr: string; brd: string }>`
  width: 35px;
  height: 22px;
  border-radius: 15px;
  background-color: ${({ clr }) => clr};
  display: flex;
  align-items: center;
  justify-content: ${({ tog }) => tog};
  padding: 0px 6px;
  cursor: pointer;
  border: 1px solid ${({ brd }) => brd};
`;

const Button = styled.div`
  gap: 10px;
  display: flex;
`;

const Text = styled.div`
  font-size: 16px;
  margin-bottom: 7px;
`;

const Container = styled.div`
  width: 100%;
  height: 70px;
  gap: 20px;
  transition: all 350ms;
`;
