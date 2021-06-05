import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 375px;
  position: absolute;
  top: 15rem; 
  overflow-y: scroll;
  background: #ffffff 0% 0% no-repeat padding-box;  
  box-shadow: 0px 3px 6px #00000029;
  border-radius: 30px 30px 0px 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  &::-webkit-scrollbar {
    display: none;
  }
`;