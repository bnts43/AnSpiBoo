import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {Opf} from "../model/opf";
import { OpfService} from "../services/opf.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  opfs: Opf[] = [];

  constructor(private opfService: OpfService) { }

  ngOnInit() {
    this.getOPFs();
  }

  getOPFs(): void {
    this.opfService.getOPFs()
      .subscribe(opfs => this.opfs = opfs.slice(0,5));
  }

}
