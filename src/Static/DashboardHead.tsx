import styled from "styled-components";
import { CgMenuGridO } from "react-icons/cg";
import { AiOutlineQuestion } from "react-icons/ai";
import { CiSettings } from "react-icons/ci";
import { LiaSearchSolid } from "react-icons/lia";
import { VscMegaphone } from "react-icons/vsc";
import Settings from "../Components/Settings";
import { useState } from "react";

const DashboardHead = () => {
  const [show, setShow] = useState(false);

  const change = () => {
    setShow(!show);
  };
  return (
    <div>
      <Container>
        <Wrapper>
          <Holder>
            <Menu>
              <CgMenuGridO />
            </Menu>
            <h3>To Do</h3>
          </Holder>

          <InputHold>
            <SearchHold>
              <LiaSearchSolid />
            </SearchHold>
            <input placeholder="Search" />
          </InputHold>

          <IconHold>
            <One onClick={change}>
              <CiSettings />
            </One>
            <Two>
              <AiOutlineQuestion />
            </Two>
            <Three>
              <VscMegaphone />
            </Three>
            <Four>AR</Four>
          </IconHold>
        </Wrapper>
      </Container>
      {show ? <Settings /> : null}
    </div>
  );
};

export default DashboardHead;

const Four = styled.div`
  font-size: 17px;
  color: white;
  width: 37px;
  height: 37px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  margin-left: 20px;
`;
const Three = styled.div`
  font-size: 25px;
  color: white;
  width: 70px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 350ms ease-in-out;
  &:hover {
    background-color: lightblue;
  }
`;
const Two = styled.div`
  font-size: 25px;
  color: white;
  width: 70px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 350ms ease-in-out;
  &:hover {
    background-color: lightblue;
  }
`;
const One = styled.div`
  font-size: 28px;
  color: white;
  width: 70px;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 350ms ease-in-out;
  &:hover {
    background-color: lightblue;
  }
`;

const IconHold = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;

const SearchHold = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #2564cfff;
  font-size: 20px;
`;

const InputHold = styled.div`
  display: flex;
  width: 400px;
  height: 35px;
  background-color: white;
  border-radius: 3px;

  input {
    flex: 1;
    border: none;
    outline: none;
  }
`;

const Holder = styled.div`
  display: flex;
  align-items: center;
  h3 {
    color: white;
    margin-bottom: 22px;
    margin-left: 20px;
  }
`;

const Menu = styled.div`
  font-size: 35px;
  color: #fff;
`;

const Wrapper = styled.div`
  width: 97%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  background-color: #2564cfff;
`;
