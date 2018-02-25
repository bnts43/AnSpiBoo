package com.bneuts.anspiboo.repository;

import com.bneuts.anspiboo.model.OPF;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;



@CrossOrigin(value = "http://localhost:4200")
@RepositoryRestResource(collectionResourceRel = "opfs", path = "opfsapi")
public interface OPFRepositoryCRUD extends CrudRepository<OPF,Long> {
}
