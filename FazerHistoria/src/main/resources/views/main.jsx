import Header from './personagem/header-principal';
import Corpo from './personagem/corpo-principal';
import Footer from './components/footer';

class Home extends React.Component {

	render() {
        return (<div>
			        <Header/>
			        <Corpo/>
			        <Footer/>
            	</div>);
    }
}

ReactDOM.render(<Home />, document.getElementById('content'));