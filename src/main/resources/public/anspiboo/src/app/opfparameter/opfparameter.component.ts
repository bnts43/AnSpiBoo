import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import {Opfparameter} from "../model/opfparameter";
import {OpfparameterService} from "../services/opfparameter.service";
import {OpfService} from "../services/opf.service";

@Component({
  selector: 'app-opfparameter',
  templateUrl: './opfparameter.component.html',
  styleUrls: ['./opfparameter.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OpfparameterComponent implements OnInit {

  @Input() opfParameter: Opfparameter;
  constructor(
    private route: ActivatedRoute,
    private opfParameterService: OpfparameterService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getOpfParameter();
  }

  getOpfParameter(): void {
    const id= +this.route.snapshot.paramMap.get('id');
    this.opfParameterService.getOPFparameter(id)
      .subscribe(opfParameter => this.opfParameter = opfParameter);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.opfParameterService.updateOpfParameter(this.opfParameter)
      .subscribe(() => this.goBack());
  }

}
