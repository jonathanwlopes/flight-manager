import * as S from "./styles";
import extractInitials from "../../../modules/extractInitials/index.js";

export const AccountIcon = () => {
  const [frist, second] = extractInitials();

  return (
    <S.Circle>
      <span>{frist}</span>
      <span>{second}</span>
    </S.Circle>
  );
};
