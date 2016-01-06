import Router from 'react-router';
import Header from './personagem/header';
import Corpo from './personagem/body';
import Footer from './components/footer';
import BodyInicios from './inicio/body';

var Route = Router.Route,
	RouteHandler = Router.RouteHandler,
	DefaultRoute = Router.DefaultRoute;

class Home extends React.Component {

	render() {
        return (<div id="content">
			        <Header/>
			        <Corpo/>
			        <Footer/>
			        <RouteHandler {...this.props} />
            	</div>);
    }
}

const routes = (
	<Route name="home" path="/" handler={Home}>
	    
	    <Route name="inicios" path="/inicio/:idPersonagem" handler={BodyInicios} />

		<DefaultRoute handler={Header} />
    </Route>
);

Router.run(routes, (Handler, state) => {
	ReactDOM.render(<Home {...state} />, document.getElementById('content'));
});
	
export default Home;