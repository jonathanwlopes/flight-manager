import api from "../../components/services/api";

async function userLogged(userId) {
  const user = await api(`/user/${userId}`);

  return user;
}

export default userLogged;
