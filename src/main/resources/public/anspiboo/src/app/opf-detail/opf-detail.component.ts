import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Opf } from '../model/opf';
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";

import { OpfService } from "../services/opf.service";


@Component({
  selector: 'app-opf-detail',
  templateUrl: './opf-detail.component.html',
  styleUrls: ['./opf-detail.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OpfDetailComponent implements OnInit {

  @Input() opf: Opf;
  constructor(
    private route: ActivatedRoute,
    private opfService: OpfService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getOpf();
  }

  getOpf(): void {
    const id= +this.route.snapshot.paramMap.get('id');
    this.opfService.getOPF(id)
      .subscribe(opf => this.opf = opf);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.opfService.updateOpf(this.opf)
      .subscribe(() => this.goBack());
  }
}
