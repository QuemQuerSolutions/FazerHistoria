class Personagem extends React.Component {

	onClickPersonagem(e){
		e.preventDefault();
		
		console.log("click personagem: ", this.props);
//		this.props.onClickPersonagem(this.props.personagem);
	}
	
	render() {
        return (<div>
			    	<div className="col-sm-6 col-md-4">
			        	<div className="thumbnail">
			            	<img src={"../../../img/" + this.props.personagem.imagem} 
			            		 title={this.props.personagem.nome} 
			            		 onClick={this.onClickPersonagem.bind(this)} />
			            	<div className="caption">
			            		<h4 className="text-center name-box">{this.props.personagem.nome}</h4>
			            	</div>
			            </div>
			        </div>
            	</div>);
    }
}

export default Personagem;