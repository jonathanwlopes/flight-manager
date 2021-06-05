import dbApp from "../data/index.js";

const extractInitials = () => {
  const user = dbApp.getUserById(1);

  const frist = user.name.slice(0, 1).toUpperCase();
  const last = user.lastName.slice(0, 1).toUpperCase();

  return [frist, last];
};

export default extractInitials;