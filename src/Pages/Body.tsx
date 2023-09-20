import styled from "styled-components";
import Settings from "../Components/Settings";
import { BiBulb, BiNotepad, BiSun } from "react-icons/bi";
import { LiaEllipsisHSolid } from "react-icons/lia";
import { CgAdd, CgArrowsExchangeAltV } from "react-icons/cg";

const Body = () => {
  return (
    <div>
      <Container>
        <Wrapper>
          <Hold>
            <Title>
              <Sun>
                <BiSun />
              </Sun>
              <Text>My Day</Text>
              <More>
                <LiaEllipsisHSolid />
              </More>
            </Title>
            <Date>Tuesday, September 19</Date>
          </Hold>
          <Wrapper2>
            <Sort>
              <CgArrowsExchangeAltV />
              <Txt>Sort</Txt>
            </Sort>
            <Group>
              <BiNotepad />
              <Txt>Group</Txt>
            </Group>
            <Suggest>
              <BiBulb />
              <Txt>Suggestions</Txt>
            </Suggest>
          </Wrapper2>
        </Wrapper>
        <Add>
          <CgAdd />
          <Textt>Add a task</Textt>
        </Add>
      </Container>
    </div>
  );
};

export default Body;

const Textt = styled.div`
  font-size: 17px;
`;

const Add = styled.div`
  width: 1000px;
  height: 50px;
  display: flex;
  align-items: center;
  color: blue;
  box-shadow: 0px 2px 2px 0px grey;
  margin: 30px;
  gap: 10px;
  font-size: 24px;
  padding-left: 30px;
  border-radius: 10px;
`;

const Suggest = styled.div`
  padding: 15px 20px;
  align-items: center;
  display: flex;
`;
const Group = styled.div`
  padding: 15px 20px;
  align-items: center;
  display: flex;
`;

const Txt = styled.div`
  font-weight: 400;
  font-size: 18px;
  margin-left: 10px;
`;

const Sort = styled.div`
  padding: 15px 20px;
  align-items: center;
  display: flex;
  font-size: 20px;
`;

const Wrapper2 = styled.div`
  display: flex;
  width: 100%;
`;

const Hold = styled.div`
  width: 100%;
`;
const Date = styled.div``;

const More = styled.div`
  font-size: 20px;
  margin-left: 10px;
  margin-top: 10px;
`;

const Text = styled.h2`
  margin: 0px;
  font-weight: 400;
`;

const Sun = styled.div`
  font-size: 35px;
  margin-right: 10px;
  margin-top: 10px;
`;

const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 1150px;
  height: 12%;
  margin-left: 30px;
  justify-content: space-between;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
