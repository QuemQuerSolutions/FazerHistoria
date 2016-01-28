class Body extends React.Component {

   constructor() {
        super();
        this.state = { data: inicios };
    }
   
   componentWillMount(){
	   console.log("componentWillMount", "body inicio");
   }
   
   componentDidMount(){
	   console.log("componentDidMount", "body inicio");
   }
   
	render() {
        return (<div className="row">
			        <div className="media">
				        <div className="media-left media-middle">
				          <a href="#">
				            <img className="media-object img-thumbnail" src={"../../../img/" + this.props.personagem.imagem} />
				          </a>
				        </div>
				        <div className="media-body">
				          <h4 className="media-heading">Escolha um ínicio</h4>
				          <section className="4u">
					      	<a href="" className="linkopcao">
					      		<div className="opcao">
					      		{this.props.personagem.nome}
					      		</div>
					      	</a><br/>
					      </section>
				        </div>
			       </div>
            	</div>);
    }
}

export default Body;