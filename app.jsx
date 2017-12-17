import React from 'react';
class hello extends React.Component {
	render() {
		var  myFirstStyle = {
			color: '#f00',			
			textAlign: 'center',
			fontSize: 30,
		}
		return (
			<div>
	            <h1 style={myFirstStyle}>Header</h1>
	            <h2>Content</h2>
	            <p data-myattribute = "somevalue">This is the content!!!</p>
	            
	        	{/*Multi line comment in react style*/}
	        </div>
		);
	}
}

export default hello;

