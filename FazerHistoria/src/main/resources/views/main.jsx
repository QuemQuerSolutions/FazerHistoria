"use strict";

class Teste extends React.Component {

	render() {
        return (<div>
            		<h3>Teste 1</h3>
            	</div>);
    }
}

class Hello extends React.Component {

	render() {
        return (<div>
            		<h3>Teste 2</h3>
            		<Teste />
            	</div>);
    }
}

ReactDOM.render(<Hello />, document.getElementById('content'));