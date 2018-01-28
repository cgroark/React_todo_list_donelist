import React, { Component } from 'react';
import "./App.css"

class DoneList extends Component {
	deleteDoneHandler = () => {
		this.props.deleteDoneItem(this.props.things);
	}
	render(){
		return(
			<li className="doneItems">
				{this.props.things}
				<button className="deletebutton" onClick={this.deleteDoneHandler}>X</button>
			</li>
		)
	}
}

export default DoneList;