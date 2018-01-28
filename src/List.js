import React, { Component } from 'react';
import "./App.css";
import ToDoneList from "./ToDoneList.js"
import ToDoList from "./ToDoList.js";

class List extends Component {
	constructor(props){
		super(props)
		this.state = {
			toDoList: [],
			doneList:[],
			newItem: ''
		}
		this.handleChange = this.handleChange.bind(this);
	}


	deleteItem = (item) => {
		console.log(item);
    let toDosLocal2 = this.state.toDoList;
    let itemIndex = toDosLocal2.indexOf(item);
    	if(itemIndex >= 0){
      		toDosLocal2.splice(itemIndex, 1);
      		this.setState({toDoList: toDosLocal2})
      		//need to pass the function down two layers into the list items component
   		}
 	 }

 	deleteDoneItem = (item) => {
 		console.log(item)
    let done = this.state.doneList;
    let indexDone = done.indexOf(item);
    	if(indexDone >= 0){
      		done.splice(indexDone, 1);
      		this.setState({doneList: done})
      		//need to pass the function down two layers into the list items component
   		}
 	 }

 	deleteMovedItem = (item) => {
 	 	console.log("moved deleted item####", item);
 	 	let tempToDo = this.state.toDoList;
 		let doneIndex = tempToDo.indexOf(item);
 			if(doneIndex >=0){
 				tempToDo.splice(doneIndex,1);
 				this.setState({toDoList: tempToDo});
 				console.log("todossss", this.state.toDoList)
 	 		}
 	}
 		
 	moveItem = (item) => {
 		console.log("moveditem##", item)
 		let updatedComplete = this.state.doneList;
 		updatedComplete.push(item);
 		this.setState({donelist: updatedComplete}); 
 		console.log("donnnnnes", this.state.doneList)
		
 	}

	addItem = (event) => {
		event.preventDefault();
		if(this.state.newItem){
			let updatedList = this.state.toDoList;
			updatedList.push(this.state.newItem);
			this.setState({toDoList: updatedList, newItem: ''})
		}
	}

	handleChange = (event) => {
		this.setState({newItem: event.target.value});
	}

	render(){
		const doneThing = this.state.doneList;
		if(doneThing.length > 0){
			return(
				<div className="list-container">
					<div className="dolist">
					    <h1 className="App-title">Things To Do</h1>
						<ToDoList items={this.state.toDoList} deleteItem={this.deleteItem} moveItem={this.moveItem} deleteMovedItem={this.deleteMovedItem} />
						<form onSubmit={this.addItem}>
						<input className="form" type="text" placeholder="add an item" onChange={this.handleChange} value={this.state.newItem} />
						</form>
						<button className="submit" onClick={this.addItem} >Add it</button>
					</div>
					<div className="donelist" >
	            		<h1 className="App-title">Things You Did</h1>
	            		<ToDoneList doneItems={this.state.doneList} deleteDoneItem={this.deleteDoneItem} />
	          		</div>
				</div>
		)}
		else{
			return(
				<div className="list-container">
					<div className="dolist">
					    <h1 className="App-title">Things To Do</h1>
						<ToDoList items={this.state.toDoList} deleteItem={this.deleteItem} moveItem={this.moveItem} deleteMovedItem={this.deleteMovedItem} />
						<form onSubmit={this.addItem}>
							<input className="form" type="text" placeholder="add an item" onChange={this.handleChange} value={this.state.newItem} />
						</form>
						<button className="submit" onClick={this.addItem} >Add it</button>
					</div>
					<div className="donelist-faded" >
	            		<h1 className="App-title-faded">Things You Did</h1>
	          		</div>
				</div>
				)
		}
	}
	
}




 export default List; 
