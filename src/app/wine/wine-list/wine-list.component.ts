import { Component, OnInit, Input, Output } from '@angular/core';

import { ServisService } from '../service/servis.service';

import { Wine } from '../model/wine';
import { WineServeBack } from '../model/wineServeBack';

@Component({
  selector: 'app-wine-list',
  templateUrl: './wine-list.component.html',
  styleUrls: ['./wine-list.component.css']
})
export class WineListComponent implements OnInit {

	private wineList :Wine[];
	private count :number;

	private params = {
		sort: "",
		sortDirection: "",
		page: 1,
		pageSize: 4,
		filter: {
			name: ""
		}
	}

  constructor(private servis:ServisService) { }

  ngOnInit() {
  	this.refresh();
  }

  refresh(){
  	this.servis.getAll(this.params).subscribe(res => {
  		this.wineList = res.wines;
  		this.count = res.count;
  	})
  }

  changePage(page){
  	this.params.page = page;
  	this.refresh();
  }

}
