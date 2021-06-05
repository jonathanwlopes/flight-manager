import userLogged from "../login";

export const sumValue = async () => {
  const logged = await userLogged(1);

  if (!logged) {
    const response = "Usuário inexistente";
    return response;
  }

  if (!logged.expense) {
    const response = "Dados indisponiveis.. ";
    return response;
  }

  const expense = logged.expense;

  const numbers = Object.values(expense);

  const total = numbers.reduce((acc, value) => {
    return acc + value;
  }, 0);

  const response = total.toLocaleString("pt-br", { minimumFractionDigits: 2 });

  return response;
};
