import React from "react"
import PropTypes from "prop-types"
class Tweet extends React.Component {
  render () {
    return (
    			<li className="collection-item avatar">
				      <img className="circle" src={this.props.gravatar}></img>
				      <span className="title">{this.props.name}</span>
				      <time>{this.props.formattedDate}</time>
				      <p>
				      	{this.props.body}
				      </p>
				    </li>
				    )
  }
}

export default Tweet
