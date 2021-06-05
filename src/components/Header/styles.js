import styled from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding-bottom: 2rem;
  background-color: #363636;
  display: flex;
  flex-direction: column;
`;

export const WrapperCaseCost = styled.div`
  display: flex;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;