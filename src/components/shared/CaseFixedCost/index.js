import * as S from "./styles";
import { Currency } from '../Currency'
import { TiChevronRight } from "react-icons/ti";
import { BiHide } from "react-icons/bi";
import { Details } from "../Details";

export const CaseFixedCost = () => {
  return (
    <S.Container>
      <S.WrapperText>
        <TiChevronRight color="#DC143C" size="22px" cursor="pointer" />
        <S.Title>Custo fixo total</S.Title>
      </S.WrapperText>
      <S.WrapperValue>
        <Currency><S.AmountValue>1.678,11</S.AmountValue></Currency>
        <BiHide color="#fff" size="22px" cursor="pointer" />
      </S.WrapperValue>
      <Details />
    </S.Container>
  );
};
