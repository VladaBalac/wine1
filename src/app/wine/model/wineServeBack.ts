import { Wine } from '../model/wine';

export class WineServeBack{
	wines :Wine[];
	count :number;

	constructor(searchResult? :any){
		this.count = searchResult && searchResult.count || 0;
		this.wines = searchResult && 
						searchResult.results.map( result => new Wine(result)) || [];
	}
}