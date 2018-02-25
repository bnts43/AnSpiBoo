package com.bneuts.anspiboo.config;

import com.bneuts.anspiboo.model.OPF;
import com.bneuts.anspiboo.model.OPFParameter;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter;


@Configuration
public class RESTConfiguration extends RepositoryRestConfigurerAdapter {


    // This will configure the Repository (which we haven't created yet) to expose the ids of objects
    // when serializing to Json. Note that if you add more entities, you'll have to add them here as well.
    // https://chariotsolutions.com/blog/post/angular-2-spring-boot-jwt-cors_part1/
    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(OPFParameter.class);
        config.exposeIdsFor(OPF.class);
        //config.useHalAsDefaultJsonMediaType(false);
    }

}
