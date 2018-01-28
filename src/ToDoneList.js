import React, { Component } from 'react';
import DoneList from "./DoneList.js";
import "./App.css";

class ToDoneList extends Component {
	render(){
		const doneThings = this.props.doneItems.map(done => {
			return(
				<DoneList things={done} deleteDoneItem={this.props.deleteDoneItem} />
			);
		})
		return(
			<div>
				<ul className="donething-list">
					{doneThings}
				</ul>
			</div>
			);
	}
}

export default ToDoneList;




