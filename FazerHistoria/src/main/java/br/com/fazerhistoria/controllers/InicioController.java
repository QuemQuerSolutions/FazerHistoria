package br.com.fazerhistoria.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Controller
@RequestMapping("inicio")
public class InicioController{
	
	@RequestMapping(method=RequestMethod.GET, value="/{idPersonagem}", produces="application/json")
	public void obterPorId(@PathVariable("idPersonagem") String idPersonagem) {
		System.out.println(idPersonagem);
	}

}
