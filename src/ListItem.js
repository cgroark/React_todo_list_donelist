import React, {Component} from 'react';
import "./App.css";

 class ListItem extends Component {
 	deleteHandler = () => {
 		this.props.deleteItem(this.props.listThing);
 	}

 	moveHandler = () => {
 		console.log("moved?")
 		this.props.moveItem(this.props.listThing);
 	}

 	deleteMovedItemHandler = () => {
 		console.log("deleted?")
 		this.props.deleteMovedItem(this.props.listThing);
 	}
 	
 	render(){
 		return(
 			<li className="items">
 			{this.props.listThing}
 			<button className="deletebutton" onClick={this.deleteHandler}>X</button>
 			<button className="movebutton" onClick={(event) => { this.moveHandler(); this.deleteMovedItemHandler();}}>Move to Completed</button>
 			</li>
 		);
 	}
 }
 

export default ListItem;


