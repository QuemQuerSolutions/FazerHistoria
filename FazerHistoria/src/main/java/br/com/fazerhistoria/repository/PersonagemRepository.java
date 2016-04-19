package br.com.fazerhistoria.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import br.com.fazerhistoria.data.Personagem;

public interface PersonagemRepository extends MongoRepository<Personagem, String> {
	public Personagem findByNome(String nome);
}
