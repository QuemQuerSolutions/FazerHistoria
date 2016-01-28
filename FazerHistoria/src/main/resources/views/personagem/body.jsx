import Personagem from './personagem';

class Body extends React.Component {

   constructor() {
        super();
        this.state = { data: personagens };
    }
   
   componentWillMount(){
	   console.log("componentWillMount");
   }
   
   componentWillUpdate(nextProps, nextState){
	   console.log("componentWillUpdate props", nextProps);
	   console.log("componentWillUpdate state", nextState);
   }
   
   componentDidUpdate(prevProps, prevState){
	   console.log("componentDidUpdate props", prevProps);
	   console.log("componentDidUpdate state", prevState);
   }
   
   componentWillUnmount(){
	   console.log("componentWillUnmount");
   }
   
   componentDidMount(){
	   let _this = this;
	   this.state.personagens = this.state.data.map(function(item, indice) {
		   return <div>
			    	<div className="col-sm-6 col-md-4">
			        	<div className="thumbnail">
			            	<img src={"../../../img/" + item.imagem} 
			            		 title={item.nome} 
			            		 onClick={_this.onClickPersonagem.bind(_this, item)} />
			            	<div className="caption">
			            		<h4 className="text-center name-box">{item.nome}</h4>
			            	</div>
			            </div>
		            </div>
		        </div>;
	   });
  
	   this.setState(this.state);
   }
   
   onClickPersonagem(personagem){
	   this.props.mudarBody('inicio', personagem);
	}
   
	render() {
        return (<div>
        			<div className="row">
        				{this.state.personagens}
        			</div>
            	</div>);
    }
}

export default Body;