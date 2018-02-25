package com.bneuts.anspiboo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
// extends SpringBootServletInitializer will be useful for TomCat + war file packaging
public class App // extends SpringBootServletInitializer
{

    //useful overriding for bootstrap the application
    /*
    @Override
    protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
        return application.sources(App.class);
    }*/

    public static void main( String[] args )
    {
        SpringApplication.run(App.class, args);

    }
}
