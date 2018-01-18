import React from "react";
import PropTypes from "prop-types";
import TweetActions from "./actions/TweetActions";

class TweetBox extends React.Component {


sendTweet(event){
	event.preventDefault();
	TweetActions.sendTweet(this.refs.tweetTextArea.value);
	this.refs.tweetTextArea.value='';
}

  render () {
    return (

    	<div className="row">
	    	<form onSubmit={this.sendTweet.bind(this)}>
	    		<div className="input-field">
	    			<textarea ref="tweetTextArea" className="materialize-textarea"></textarea>
	    			<label>What's happening</label>
	    			<button type="submit" className="btn right">Tweet</button>
	    		</div>
	    	</form>
    	</div>
    	)
  }
}

export default TweetBox
