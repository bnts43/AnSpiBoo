package com.bneuts.anspiboo.repository;

import com.bneuts.anspiboo.model.OPFParameter;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMethod;

@CrossOrigin(origins = "http://localhost:4200",methods = RequestMethod.PUT)
@RepositoryRestResource(collectionResourceRel = "opfparameters", path = "opfparameterapi")
public interface OPFParamRepositoryCRUD extends CrudRepository<OPFParameter,Long> {

    @Query("select op from OPFParameter op where op.opf.id=:opfId")
    OPFParameter findByOpf(@Param("opfId") Long opfId);

}
