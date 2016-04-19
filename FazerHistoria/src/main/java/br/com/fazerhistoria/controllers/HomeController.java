package br.com.fazerhistoria.controllers;

import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.stereotype.Controller;
//import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class HomeController implements ErrorController{
	
	private static final String PATH = "/error";
	
//	@RequestMapping("/")
	public String index() {
		return "index";
	}

//	@RequestMapping(value = PATH)
	public String error() {
		System.out.println("Passou pelo controller de error");
		return "index";
	}

	@Override
	public String getErrorPath() {
		return PATH;
	}

}
