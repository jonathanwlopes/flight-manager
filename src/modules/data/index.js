const dbApp = {
  userList: [
    {
      _id: 1,
      name: "Jonathan",
      lastName: 'Lopes'
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

export default dbApp;
