import AppDispatcher from "../dispatcher"
import ActionTypes from "../constants"

export default {
	
	receivedTweets(rawTweets){
		console.log(3,"ServerActions.receivedTweets");
		AppDispatcher.dispatch({
			actionType:ActionTypes.RECEIVED_TWEETS,
			rawTweets
		})
	},

	receivedOneTweet(rawTweet){
		console.log(3,"ServerActions.receivedOneTweet");
		AppDispatcher.dispatch({
				actionType:ActionTypes.RECEIVED_ONE_TWEET,
				rawTweet
			})		
	}

}