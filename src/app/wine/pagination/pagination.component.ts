import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-pagination',
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit, OnChanges {

	@Input()noWine :number;
	@Input()showPage :number;
	@Output() givePage :EventEmitter<number>;
	pagList:number[] = [];
	activePage:number = 1;

	constructor() {
		this.givePage = new EventEmitter();
	}

	private calculate(): number{
		return Math.ceil(this.noWine/this.showPage);
	}

	ngOnInit() {
	}

	ngOnChanges(){
		for(let i = 1; i <= this.calculate(); i++){
			this.pagList.push(i);
		}}

		selectedPage(page: number){
			if(page >= 1 && page <= this.calculate()){
				this.activePage = page;
				this.givePage.emit(this.activePage);
			}
		}

	}






