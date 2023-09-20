import styled from "styled-components";
import {
  BiCalendar,
  BiGroup,
  BiHome,
  BiMenu,
  BiStar,
  BiSun,
} from "react-icons/bi";
import { CgAdd, CgCalendar, CgFolderAdd, CgMail } from "react-icons/cg";
import {
  LiaCalendar,
  LiaLinkSolid,
  LiaPersonBoothSolid,
} from "react-icons/lia";
import { VscPerson } from "react-icons/vsc";
import { BsPerson } from "react-icons/bs";
import { IoIosMenu } from "react-icons/io";
import { AiOutlineGroup, AiOutlineUsergroupAdd } from "react-icons/ai";
import { MdOutlineDoneOutline } from "react-icons/md";
import { useRef, useState } from "react";

const Sidebar = () => {
  const [reveal, setReveal] = useState(true);
  const hideRef: any = useRef();
  const show = () => {
    setReveal(!reveal);

    {
      reveal
        ? (hideRef.current.style.display = "block")
        : (hideRef.current.style.display = "none");
    }
  };

  return (
    <div ref={hideRef}>
      <Container>
        <Holder>
          <Menu>
            <Icon onClick={show}>
              <IoIosMenu />
            </Icon>
          </Menu>
          <MiDay>
            <Icon1>
              <BiSun />
            </Icon1>
            <h3>My Day</h3>
          </MiDay>
          <Important>
            <Hold>
              <Icon1>
                <BiStar />
              </Icon1>
              <h3>Important</h3>
            </Hold>
            <Number>4</Number>
          </Important>
          <Important>
            <Hold>
              <Icon1>
                <LiaCalendar />
              </Icon1>
              <h3>Planned</h3>
            </Hold>
            <Number></Number>
          </Important>
          <Important>
            <Hold>
              <Icon1>
                <BsPerson />
              </Icon1>
              <h3>Assigned to me</h3>
            </Hold>
            <Number></Number>
          </Important>
          <Important>
            <Hold>
              <Icon1>
                <BiHome />
              </Icon1>
              <h3>Tasks</h3>
            </Hold>
            <Number>1</Number>
          </Important>
          <hr />
          <Important style={{ color: "#2564cfff" }}>
            <Hold>
              <Icon1 style={{ marginTop: "5px" }}>
                <CgAdd />
              </Icon1>
              <h3>New List</h3>
            </Hold>
            <Number>
              <CgFolderAdd />
            </Number>
          </Important>
        </Holder>
        <Bottom>
          <Icons>
            <IconHold>
              <Mail />
            </IconHold>
            <IconHold>
              <Calendar />
            </IconHold>
            <IconHold>
              <Group />
            </IconHold>
            <IconHold>
              <Link />
            </IconHold>
            <IconHold>
              <Todo />
            </IconHold>
          </Icons>
        </Bottom>
      </Container>
    </div>
  );
};

export default Sidebar;

const Todo = styled(MdOutlineDoneOutline)`
  font-size: 22px;
  color: #4794e4ff;
`;
const Link = styled(LiaLinkSolid)`
  font-size: 22px;
`;
const Group = styled(BiGroup)`
  font-size: 22px;
`;
const Calendar = styled(BiCalendar)`
  font-size: 22px;
`;
const Mail = styled(CgMail)`
  font-size: 25px;
`;

const IconHold = styled.div`
  width: 55px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    background-color: #eff6fcff;
  }
`;

const Icons = styled.div`
  width: 95%;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 350ms;
`;

const Bottom = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Holder = styled.div``;

const Hold = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  cursor: pointer;
`;

const Number = styled.div`
  margin-right: 30px;
`;

const Important = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  font-weight: 400;
  h3 {
    font-size: 17px;
    font-weight: 400;
  }
  transition: all 350ms;
  &:hover {
    background-color: #faf9f8ff;
  }
`;
const MiDay = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 20px;
  background-color: #eff6fcff;
  cursor: pointer;
  h3 {
    font-size: 17px;
    font-weight: 600;
  }
`;

const Icon1 = styled.div`
  font-size: 22px;
  margin-top: 7px;
  margin-left: 30px;
`;
const Icon = styled.div`
  font-size: 30px;
  margin-left: 30px;
`;

const Menu = styled.div`
  width: 100%;
  padding: 30px 0 15px 0px;
  font-size: 30px;
  cursor: pointer;
`;

const Container = styled.div`
  width: 330px;
  height: calc(100vh - 55px);
  background-color: white;
  display: flex;
  flex-direction: column;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  justify-content: space-between;

  hr {
    width: 90%;
    margin-top: 10px;
  }
`;
