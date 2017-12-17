import React from 'react';


class myReactApp extends React.Component {
    render() {
		return (
		    <div>
		        <Header/>
		        <Content/>
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


class Content extends React.Component {
   render() {
      return (
         <div>
            <h2>Content</h2>
            <p>The content text!!!</p>
         </div>
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

