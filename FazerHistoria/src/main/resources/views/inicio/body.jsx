class Body extends React.Component {

   constructor() {
        super();
        this.state = { data: inicios };
    }
   
   componentWillMount(){
//	   console.log("componentWillMount");
   }
   
   componentDidMount(){
//	   this.state.inicios = this.state.data.map(function(item, indice) {
//			return <Personagem personagem={item} />;
//		});
//	   
//	   this.setState(this.state);
   }
   
	render() {
        return (<div>
        			<div className="row body-for-footer">
        				{this.state.data}
        			</div>
            	</div>);
    }
}

export default Body;