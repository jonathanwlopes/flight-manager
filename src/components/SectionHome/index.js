import * as S from "./styles";
import { AiFillCaretUp } from "react-icons/ai";
import { CaseUtils } from "../shared/CaseUtils";

export const SectionHome = () => {
  return (
    <S.Container>
      <AiFillCaretUp
        style={{ marginBottom: "1rem" }}
        color="#808080"
        cursor="pointer"
        size="1.5rem"
      />
      <CaseUtils margin-top="3rem" />
    </S.Container>
  );
};
