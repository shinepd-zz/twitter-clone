import API from "../API"

export default {
  getAllUsers() {
    console.log(1, "UserActions.getAllUsers");
    API.getAllUsers();
  },
  followUser(userId) {
    console.log(1, "UserActions.followUser id:" + userId);
    API.followUser(userId);
  }
}
