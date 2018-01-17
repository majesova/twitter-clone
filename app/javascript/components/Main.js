import React from "react"
import PropTypes from "prop-types"
import TweetBox from './TweetBox'
import TweetsList from './TweetsList'
import TweetStore from "./stores/TweetStore"


import TweetActions from "./actions/TweetActions"
TweetActions.getAllTweets();

let getAppState = () => {

	return { tweetsList: TweetStore.getAll() };
}

class Main extends React.Component {

	constructor(props){
		super(props);
		this.state = getAppState();
		this._onChange= this._onChange.bind(this);
	}

	/*formattedTweets(newTweetsList){

		let formattedList= newTweetsList.map(tweet=>{
			tweet.formattedDate = moment(tweet.created_at).fromNow();
			return tweet;
		});
		return{
			tweetsList:formattedList
		}
	}*/

	addTweet(tweetToAdd) {
		//mockTweets.unshift({...})
		/*$.post("/tweets", {body: tweetToAdd})
		.success(savedTweet => {
			let newTweetsList = this.state.tweetsList;
			newTweetsList.unshift(savedTweet);
			this.setState(this.formattedTweets(newTweetsList));
		})
		.error(error => console.log(error));*/
	}

	componentDidMount(){
		//$.ajax("/tweets")
		//.success(data=> this.setState(this.formattedTweets(data)))
		//.error(error=>console.log(error));
		TweetStore.addChangeListener(this._onChange);
	}

	componentWillUnmount(){
		TweetStore.removeChangeListener(this._onChange);
	}

	_onChange(){
		console.log(5, "Main._onChange");
		this.setState(getAppState())
	}

  render () {
    return (
	      	<div className="container">
	      		<TweetBox/>
	      		<TweetsList tweets={this.state.tweetsList}/>
	      	</div>
	    );
	}
}

Main.propTypes = {
  name: PropTypes.string
};

export default Main
