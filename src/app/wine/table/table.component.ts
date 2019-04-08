import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ServisService } from '../service/servis.service';

import { Wine } from '../model/wine';
import { WineServeBack } from '../model/wineServeBack';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

	@Input() wine :Wine[];
	@Output() sendInfo :EventEmitter<number>

  constructor(private servis:ServisService) {
  	this.sendInfo = new EventEmitter();
  }

  ngOnInit() {
  }

  remove(id: number){
  	this.servis.deleteWine(id).subscribe(res => this.sendInfo.emit(res._id));
  }

}
