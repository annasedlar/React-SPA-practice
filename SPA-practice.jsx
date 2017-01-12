var App = React.createClass({
	render: function(){
		return(
		<div>
        	<h1>Simple SPA</h1>
	        <ul className="header">
	          <li>Home</li>
	          <li>Stuff</li>
	          <li>Contact</li>
	        </ul>
        <div className="content">
 
        </div>
      </div>
    )
  }
});

ReactDOM.render(
	<ReactRouter.Router> 
		<ReactRouter.Route path="/" component= {App}>
		</ReactRouter.Route>
	</ReactRouter.Router>,
	document.getElementById("container")
);
