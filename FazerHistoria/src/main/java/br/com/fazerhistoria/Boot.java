package br.com.fazerhistoria;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import br.com.fazerhistoria.data.Personagem;
import br.com.fazerhistoria.repository.PersonagemRepository;

@SpringBootApplication
public class Boot implements CommandLineRunner{
	
	@Autowired
	private PersonagemRepository personagemRepository;
	
	public static void main(String[] args) {
		SpringApplication.run(Boot.class, args);
	}

	@Override
	public void run(String... arg0) throws Exception {
		personagemRepository.deleteAll();
		
		personagemRepository.save(new Personagem("Pirata"));
		personagemRepository.save(new Personagem("Dragão"));
		
		System.out.println("Todos Personagens:");
		System.out.println("--------------------");
		for(Personagem p: personagemRepository.findAll()){
			System.out.println(p);
		}
		
		System.out.println();
		
		System.out.println("obterPorNome():");
		System.out.println("---------------");
		System.out.println(personagemRepository.findByNome("Pirata"));
		
	}
	
	
}
