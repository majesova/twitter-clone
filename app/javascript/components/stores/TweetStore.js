
//TweetStore
import AppDispatcher from "../dispatcher"
import ActionTypes from "../constants"
import AppEventEmitter from "./AppEventEmitter"


let _tweets = [];

class TweetEventEmitter extends AppEventEmitter{
	getAll(){
		return _tweets.map(tweet=>{
			tweet.formattedDate = moment(tweet.created_at).fromNow();
			return tweet;
		});
	}
}

let TweetStore = new TweetEventEmitter();

AppDispatcher.register(action => {
	console.log(action);
	//action.actionType = RECEIVED_TWEETS
	switch(action.actionType){
		case ActionTypes.RECEIVED_TWEETS:
			console.log(4,"AppDispatcher.RECEIVED_TWEETS");
			_tweets = action.rawTweets;
			TweetStore.emitChange();
			break;
		//acknowledge tweets
		//emit a change event
		case ActionTypes.RECEIVED_ONE_TWEET:
			console.log(4,"AppDispatcher.RECEIVED_ONE_TWEET");
			_tweets.unshift(action.rawTweet);
			console.log("agregado al arreglo"); 
			TweetStore.emitChange();
			break;

		default:
		// no op

	}

});

export default TweetStore;