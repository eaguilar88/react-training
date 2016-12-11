class AppComponent extends React.Component {
	render(){
		return(
			<section className="site-wrap">
				<h1>Header</h1>
				<p>Lorem Ipsum</p>
			</section>
		);
	}
}

class ShoppingList extends React.Component {
  render() {
    return (
      <div className="shopping-list">
        <h1>Shopping List for {this.props.name}</h1>
        <ul>
          <li>Instagram</li>
          <li>WhatsApp</li>
          <li>Oculus</li>
        </ul>
      </div>
    );
  }
}

ReactDOM.render(
	<AppComponent/>,
	document.getElementById("application"));

ReactDOM.render(
	<ShoppingList/>,
	document.getElementById("application2"));