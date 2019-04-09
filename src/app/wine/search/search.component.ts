import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

	@Output() search :EventEmitter<string>
	searchForm: FormGroup;

	madeSearchForm(){
		this.searchForm = this.fb.group({
			'tekstPretrage': ''
		})
	}

  constructor(private fb :FormBuilder) {
  	this.search = new EventEmitter();

  	this.madeSearchForm();
  }

  ngOnInit() {
  }

  sendSearch():void{
  	this.search.emit(this.searchForm.value.tekstPretrage);
  	console.log(this.searchForm.value.tekstPretrage);
  }

}
