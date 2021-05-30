import dbApp from "../../../modules/data/index.js";
import { IoNotifications } from "react-icons/io5";
import { AccountIcon } from "../AccountIcon";
import * as S from "./styles";

const user = dbApp.getUserById(1);

export const Welcome = () => {
  return (
    <S.Container className="welcome">
      <S.WrapperUser className="wrapper-user">
        <S.Title>Boa tarde</S.Title>
        <S.User>{user.name}</S.User>
      </S.WrapperUser>
      <S.WrapperAccount className="wrapper-account">
        <IoNotifications color="#fff" size="22px" cursor="pointer" />
        <AccountIcon />
      </S.WrapperAccount>
    </S.Container>
  );
};
