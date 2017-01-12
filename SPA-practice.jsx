var Contact = React.createClass({
  render: function() {
      return (
        <div>
          <h2>GOT QUESTIONS?</h2>
          <p>The easiest thing to do is post on
          our <a href="http://forum.kirupa.com">forums</a>.
          </p>
        </div>
      );
    }
});
 
var Stuff = React.createClass({
  render: function() {
      return (
        <div>
          <h2>STUFF</h2>
          <p>Mauris sem velit, vehicula eget sodales vitae,
          rhoncus eget sapien:</p>
          <ol>
            <li>Nulla pulvinar diam</li>
            <li>Facilisis bibendum</li>
            <li>Vestibulum vulputate</li>
            <li>Eget erat</li>
            <li>Id porttitor</li>
          </ol>
        </div>
      );
    }
});

function Home(props){
	return(
		<div>
			<h1>This is the home page: Welcome, {props.name}</h1>
			<p>Cras facilisis urna ornare ex volutpat, et
	          convallis erat elementum. Ut aliquam, ipsum vitae
	          gravida suscipit, metus dui bibendum est, eget rhoncus nibh
	          metus nec massa. Maecenas hendrerit laoreet augue
	          nec molestie. Cum sociis natoque penatibus et magnis
	          dis parturient montes, nascetur ridiculus mus.
	        </p>
		</div>
	)
}

var App = React.createClass({
	render: function(){
		return(
		<div>
        	<h1>Simple SPA</h1>
	        <ul className="header">
          <li><ReactRouter.Link to="/">Home</ReactRouter.Link></li>
          <li><ReactRouter.Link to="/stuff">Stuff</ReactRouter.Link></li>
          <li><ReactRouter.Link to="/contact">Contact</ReactRouter.Link></li>
	        </ul>
        <div className="content">
 			{this.props.children}
        </div>
      </div>
    )
  }
});

ReactDOM.render(
	<ReactRouter.Router> 
		<ReactRouter.Route path="/" component= {App}>
			<ReactRouter.IndexRoute component={Home} />
			<ReactRouter.Route path="stuff" component={Stuff} />
     		<ReactRouter.Route path="contact" component={Contact} />
		</ReactRouter.Route>
	</ReactRouter.Router>,
	document.getElementById("container")
);
