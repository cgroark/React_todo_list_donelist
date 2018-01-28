import React, { Component } from 'react';
import ListItem from "./ListItem";
import "./App.css";


class ToDoList extends Component {
	render(){
		const toDoThings = this.props.items.map(item => {
			return(
				<ListItem listThing={item} deleteItem={this.props.deleteItem} moveItem={this.props.moveItem} deleteMovedItem={this.props.deleteMovedItem} />
			);
		})
		return(
			<div >
				<ul className="toDoList">
					{toDoThings}
				</ul>
			</div>
		)		
	}
 }

 export default ToDoList;