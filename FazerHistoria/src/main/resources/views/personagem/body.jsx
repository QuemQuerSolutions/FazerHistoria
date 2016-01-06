import Personagem from './personagem';

class Body extends React.Component {

   constructor() {
        super();
        this.state = { data: personagens };
    }
   
   componentWillMount(){
	   console.log("componentWillMount");
   }
   
   componentDidMount(){
	   this.state.personagens = this.state.data.map(function(item, indice) {
			return <Personagem personagem={item} />;
		});
	   
	   this.setState(this.state);
   }
   
	render() {
        return (<div>
        			<div className="row body-for-footer">
        				{this.state.personagens}
        			</div>
            	</div>);
    }
}

export default Body;