import React from 'react';
var ReactCSSTransitionGroup = require('react-addons-css-transition-group');

class myReactApp extends React.Component {

    constructor(props) {
      	super(props);
		
      	this.state = {
         	items: []
      	}
      	this.handleAdd = this.handleAdd.bind(this);
    };

    handleAdd() {
      	var newItems = this.state.items.concat([prompt('Enter Item Name')]);
      	this.setState({items: newItems});
   	}

   	handleRemove(i) {
      	var newItems = this.state.items.slice();
      	newItems.splice(i, 1);
      	this.setState({items: newItems});
   	}


   	render() {
      	var items = this.state.items.map(function(item, i) {
         	return (
            	<li className="ItemLabel" key = {item}>
               		<span className="RemoveBtn" onClick = {this.handleRemove.bind(this, i)} title="Remove">x</span> {item}  
            	</li>
         	);
      	}.bind(this));
      
      	return (
      			<div className="PageContainer"> 
      				<header>
      				  <h1>Ad & Remove Items</h1>
      				</header> 

      				<div className="SearchboxWrpper">
      					<button className="AddItemBtn" onClick = {this.handleAdd} >Add Item</button>
      				</div>

      				<div className="MyContentList">
      					<ul>
      					    {items} 
      					</ul>
      				</div>
		        </div>
      	);
   }

}

class Header extends React.Component {
	render() {
      	return (
            <div>
                <h1>Header</h1>
            </div>
      	);
    }
}

// class Content extends React.Component {
// 	render() {
// 		return(
// 			<div>      

//             	<li>
				
//             	<ReactCSSTransitionGroup transitionName = "example" transitionEnterTimeout = {500} transitionLeaveTimeout = {500}>
//                		{items}
//             	</ReactCSSTransitionGroup>

//             	</li>



//          	</div>
// 		);
// 	}
// }

class Footer extends React.Component {
	render() {
		return(
			<div>
				<p>
					Footer 
				</p>
			</div>
		);
	}
}

export default myReactApp;

