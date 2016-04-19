package br.com.fazerhistoria.data;

import org.springframework.data.annotation.Id;

public class Personagem {
	
	@Id
    private String id;

    private String nome;

    public Personagem() {}

    public Personagem(String nome) {
        this.nome = nome;
    }
    

    public String getId() {
		return id;
	}

	public String getNome() {
		return nome;
	}

	public void setId(String id) {
		this.id = id;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	@Override
    public String toString() {
        return String.format("Personagem[id=%s, nome='%s']", id, nome);
    }
}
