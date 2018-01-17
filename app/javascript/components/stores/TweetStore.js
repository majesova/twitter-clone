import AppDispatcher from "../dispatcher"
import ActionTypes from "../constants"
import {EventEmitter} from "events";

let _tweets = [];
const CHANGE_EVENT = "CHANGE";

class TweetEventEmitter extends EventEmitter{
	getAll(){
		return _tweets.map(tweet=>{
			tweet.formattedDate = moment(tweet.created_at).fromNow();
			return tweet;
		});
	}
	emitChange(){
		this.emit(CHANGE_EVENT);
	}
	addChangeListener(callback){
		this.on(CHANGE_EVENT, callback);
	}
	removeChangeListener(callback){
		this.removeListener(CHANGE_EVENT, callback);
	}
}

let TweetStore = new TweetEventEmitter();

AppDispatcher.register(action => {

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
			TweetStore.emitChange();
			break;

		default:
		// no op

	}

});

export default TweetStore;