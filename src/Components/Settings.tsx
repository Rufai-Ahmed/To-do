import { CgArrowsExchangeAlt, CgArrowsExchangeAltV } from "react-icons/cg";
import { MdCancel, MdOutlineCancel } from "react-icons/md";
import styled from "styled-components";
import InnerSettings from "./InnerSettings";

const Settings = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <UpHolder>
            <Title>Settings</Title>
            <X>
              <Icon>
                <MdCancel />
              </Icon>
            </X>
          </UpHolder>
          <General>General</General>
          <Options>
            <InnerSettings text="Confirm before deleting" />
            <InnerSettings text="Add new task to top" />
            <InnerSettings text="Move starred tasks to top" />
            <InnerSettings text="Play completion sound" />
            <InnerSettings text="Show right click menus" />
            <InnerSettings text="Turn on reminder notifications" />
            <InnerSettings text="Show tasks that seem important in My Day" />
            <InnerSettings text="Turn on night mode" />
            <InnerSettings text="Turn on night mode" />
            <InnerSettings text="Turn on night mode" />
            <InnerSettings text="Turn on night mode" />
          </Options>
        </Wrapper>
      </Container>
    </div>
  );
};

export default Settings;

const Options = styled.div`
  width: 100%;
`;

const General = styled.div`
  font-size: 20px;
  font-weight: 600;
  display: flex;
  align-items: center;
  height: 60px;
`;

const Icon = styled.div`
  font-size: 29px;
`;

const X = styled.div`
  margin-top: 10px;
`;

const Title = styled.div`
  font-size: 23px;
  font-weight: 600;
`;

const UpHolder = styled.div`
  height: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Wrapper = styled.div`
  width: 90%;
  height: 90%;
  background-color: white;
  overflow-y: auto;
  padding-top: 10px;
`;

const Container = styled.div`
  width: 400px;
  height: calc(100vh - 55px);
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  position: absolute;
  right: 0;
`;
