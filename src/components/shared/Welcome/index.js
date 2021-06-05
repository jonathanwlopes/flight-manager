import { IoNotifications } from "react-icons/io5";
import { AccountIcon } from "../AccountIcon";
import * as S from "./styles";
import React, { useEffect, useState } from "react";
import userLogged from "../../../modules/login";

export const Welcome = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function getItems(userId = 1) {
      try {
        const logged = await userLogged(userId);
        setUser(logged);
      } catch (error) {
        alert("Ocorreu um erro ao buscar o usuario");
      }
    }

    getItems();
  }, []);

  return (
    <S.Container>
      <S.WrapperUser>
        <S.Title>Boa tarde</S.Title>
        <S.User>{user ? user.name : "Loading..."}</S.User>
      </S.WrapperUser>
      <S.WrapperAccount>
        <IoNotifications color="#fff" size="22px" cursor="pointer" />
        <AccountIcon />
      </S.WrapperAccount>
    </S.Container>
  );
};
