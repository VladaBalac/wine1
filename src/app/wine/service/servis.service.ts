import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Wine } from '../model/wine';
import { WineServeBack } from '../model/wineServeBack';

const url = "http://localhost:3000/api/wines";

@Injectable({
  providedIn: 'root'
})
export class ServisService {

  constructor(private http :HttpClient) { }

  getAll(params?: any):Observable<WineServeBack> {
  	let queryParams = {};
  	if(params){
  		queryParams = {
  			params : new HttpParams()
  				.set("sort", params.sort || "")
  				.set("sortDirection", params.sortDirection || "")
  				.set("page", params.page && params.page.toString() || "")
  				.set("pageSize", params.page && params.pageSize.toString() || "")
  				.set("filter", params.filter && JSON.stringify(params.filter) || "")
  		}
  	}
		return this.http.get(url, queryParams).pipe(map(res => new WineServeBack(res)))
	}

	getWine(id: number):Observable<Wine>{
		return this.http.get(url + "/" + id).pipe(map(res => new Wine(res)));
	}

	deleteWine(id: number):Observable<Wine>{
		return this.http.delete(url + "/" + id).pipe(map(res => new Wine(res)))
	}

	updateWine(changedWine: Wine):Observable<Wine>{
		return this.http.put(url + "/" + changedWine._id, changedWine).pipe(map(res => new Wine(res)));
	}

	addWine(newWine :Wine):Observable<Wine>{
		return this.http.post(url, newWine).pipe(map(res => new Wine(res)));
	}

}
