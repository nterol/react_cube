import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  /* border: 1px solid; */
  /* width: 80%; */
  /* text-align: center; */
  /* margin: 30px auto; */
  /* background: palegreen; */
`;

export const SphereNote = styled.div`
  z-index: 3;
  /* position: absolute; */
  width: 100px;
  height: 200px;
  padding: 10px;
  left: ${({ left }) => left}px;

  background: black;
  color: white;
  font-size: 12;
`;

export const ControllerButton = styled.button`
  background-color: inherit;
  margin: 10px;
  padding: 10px;
  color: white;
`;

export const SceneContainer = styled.div`
  background: palegoldenrod;
`;

export const BubblyContainer = styled.div`
  margin: 30px;
`;

export const BubblyTitle = styled.h1`
  font-family: Avenir;
`;
