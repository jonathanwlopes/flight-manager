import styled from "styled-components";

export const Circle = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background-color: #d3d3d3;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  &:hover {
    cursor: pointer;
  }
`;

export const NameInitials = styled.span`
  color: #696969;
`;
