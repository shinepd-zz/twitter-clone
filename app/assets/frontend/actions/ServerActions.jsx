import AppDispatcher from "../dispatcher"
import ActionTypes from "../constants"

export default {
  receivedTweets(rawTweets) {
    console.log(3, "ServerActions.receivedTweets");
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_TWEETS,
      rawTweets
    })
  },
  receivedOneTweet(rawTweet) {
    console.log(3, "ServerActions.receivedOneTweet");
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_TWEET,
      rawTweet
    })
  },
  receivedUsers(rawUsers) {
    console.log(3, "ServerActions.receivedUsers");
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_USERS,
      rawUsers
    })
  },
  receivedOneFollower(rawFollower) {
    console.log(3, "ServerActions.receivedOneFollower");
    AppDispatcher.dispatch({
      actionType: ActionTypes.RECEIVED_ONE_FOLLOWER,
      rawFollower
    })
  }
}
