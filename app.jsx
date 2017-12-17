import React from 'react';


class myReactApp extends React.Component {

	constructor() {
        super();
        this.state = {
            data: 
               [
	            {
	               "id":1,
	               "name":"Foo",
	               "age":"20"
	            },
	            {
	               "id":2,
	               "name":"Bar",
	               "age":"30"
	            },
	            {
	               "id":3,
	               "name":"Baz",
	               "age":"40"
	            }
            ]
        }
   }

    render() {
		return (
		    <div>
		        <Header/>
		        <div>
		        	<ul>
		        		{this.state.data.map((person, i) => <ListRow key = {i} data = {person} />)}
		            </ul>
		        </div>
		        <Footer/>
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


class ListRow extends React.Component {
    render() {
        return (
        	<li><span>{this.props.data.id} </span> <span>{this.props.data.name}</span> <span>{this.props.data.age}</span> </li>
        );
    }
}

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

