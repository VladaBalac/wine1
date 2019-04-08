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

  constructor(private http :HttpClient, private params :HttpParams) { }

  getAll():Observable<WineServeBack> {
		return this.http.get(url).pipe(map(res => new WineServeBack(res)))
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
