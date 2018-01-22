import React from "react"
import PropTypes from "prop-types"
import TweetBox from './TweetBox'
import TweetsList from './TweetsList'
import TweetStore from "./stores/TweetStore"
import TweetActions from "./actions/TweetActions"
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom'



let getAppState = () => {
	return { tweetsList: TweetStore.getAll() };
}

class Index extends React.Component {

	constructor(props){
		super(props);
		this.state = getAppState();
		this._onChange= this._onChange.bind(this);
	}

	componentDidMount(){
		TweetActions.getAllTweets();
		TweetStore.addChangeListener(this._onChange);
	}

	componentWillUnmount(){
		TweetStore.removeChangeListener(this._onChange);
	}

	_onChange(){
		console.log(5, "Index._onChange");
		this.setState(getAppState())
	}

  render () {

    return (
	      	<div className="container">
				  
			   	<NavLink to="/follow" activeClassName="active">Who to follow</NavLink>
			    
	      		<TweetBox/>
	      		<TweetsList tweets={this.state.tweetsList}/>
	      	</div>
	    );

	}
}

Index.propTypes = {
  name: PropTypes.string
};

export default Index
