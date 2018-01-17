//This class have the actions
import API from "../API"

export default {
	getAllTweets(){
		console.log(1,"TweetActions.getAllTweets");
		API.getAllTweets();
	},
	sendTweet(body){
		API.createTweet(body);
	}

}