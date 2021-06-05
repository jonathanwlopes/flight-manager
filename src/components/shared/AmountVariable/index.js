import * as S from "./styles";
import { Currency } from "../Currency";
import { BiHide } from "react-icons/bi";
import { useEffect, useState } from "react";
import { sumValue } from "../../../modules/sumValue";

export const AmountVariable = () => {
  const [totalCost, setTotal] = useState(null);
  const [isVisible, setVisible] = useState(true);

  const toggleTrueFalse = () => {
    setVisible(!isVisible);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await sumValue();
      setTotal(response);
    };
    fetchData();
  }, []);

  return (
    <S.WrapperValue>
      <S.WrapperText>
        <Currency />
        {isVisible ? (
          <S.Container>{totalCost ? totalCost : "Carregando..."}</S.Container>
        ) : (
          <S.Container>{"*****"}</S.Container>
        )}
      </S.WrapperText>
      <BiHide
        color="#fff"
        size="22px"
        cursor="pointer"
        onClick={toggleTrueFalse}
      />
    </S.WrapperValue>
  );
};
