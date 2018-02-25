import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Opf } from "../model/Opf";
import { OpfService } from "../services/opf.service";

@Component({
  selector: 'app-opfs',
  templateUrl: './opfs.component.html',
  styleUrls: ['./opfs.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class OpfsComponent implements OnInit {

  opfs: Opf[];

  constructor(private opfService: OpfService) { }

  ngOnInit() {
    this.getOPFs();
  }

  getOPFs(): void {
    this.opfService.getOPFs()
      .subscribe(opfs => this.opfs = opfs);
  }

  add(name: string): void{
    name = name.trim();
    if (!name) { return; }
    this.opfService.addOpf({ name } as Opf)
      .subscribe(opf => {
        this.opfs.push(opf);
      });
  }

  delete(opf: Opf): void {
    this.opfs = this.opfs.filter(o => o !== opf);
    this.opfService.deleteOpf(opf).subscribe();
  }
}
