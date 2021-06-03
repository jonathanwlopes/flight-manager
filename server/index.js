import express from "express";

const app = express();

const dbApp = {
  userList: [
    {
      _id: 1,
      name: "Jonathan",
      lastName: "Lopes",
    },
    {
      _id: 2,
      name: "Marcos",
      lastName: "Maia",
    },
  ],

  getUsers: () => {
    const userList = dbApp.userList;

    return [...userList];
  },

  getUserById: (userId) => {
    const userList = dbApp.getUsers();

    const user = userList.find((user) => user._id === userId);

    return user;
  },
};

app.use(express.json());

app.get("/ping", (req, res) => {
  return res.send("PONG");
});

app.get("/users", (req, res) => {
  return res.send([...dbApp.userList]);
});

app.listen(3333, () => {
  console.log("Ouvindo servidor");
});
