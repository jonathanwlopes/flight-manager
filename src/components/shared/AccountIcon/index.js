import * as S from "./styles";
import extractInitials from "../../../modules/extractInitials/index.js";

export const AccountIcon = () => {
  const [frist, second] = extractInitials();

  return (
    <S.Circle>
      <S.NameInitials>{frist}</S.NameInitials>
      <S.NameInitials>{second}</S.NameInitials>
    </S.Circle>
  );
};
