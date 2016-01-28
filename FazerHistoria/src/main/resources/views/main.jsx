import Router from 'react-router';
import Header from './personagem/header';
import BodyPersonagem from './personagem/body';
import Footer from './components/footer';
import BodyInicios from './inicio/body';

class Home extends React.Component {

   constructor() {
        super();
        this.state = {};
    }
   
   componentWillMount(){
	   this.state.destino = <BodyPersonagem mudarBody={this.mudarBody.bind(this)} />;
   }
	
	mudarBody(destino, item){
		switch(destino){
			case 'inicio':
				this.state.destino = <BodyInicios personagem={item} mudarBody={this.mudarBody.bind(this)} />;
				break;
			default:
				this.state.destino = <BodyPersonagem mudarBody={this.mudarBody.bind(this)} />;
				break;
		}
		
		this.setState(this.state);
	}
	
	render() {
        return (<div id="content">
			        <Header/>
			        {this.state.destino}
			        <Footer/>
            	</div>);
    }
}

ReactDOM.render(<Home />, document.getElementById('content'));
export default Home;