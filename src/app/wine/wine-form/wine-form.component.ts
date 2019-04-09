import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Wine } from '../model/wine';
import { ServisService } from '../service/servis.service';

@Component({
  selector: 'app-wine-form',
  templateUrl: './wine-form.component.html',
  styleUrls: ['./wine-form.component.css']
})
export class WineFormComponent implements OnInit {

	wine: Wine;
	formaUnosVina :FormGroup;

  constructor(private servic: ServisService, private aR : ActivatedRoute, private fb : FormBuilder,
  	private r : Router) {
  	this.napraviFormu();
  }

  napraviFormu(){
  	this.formaUnosVina = this.fb.group({
  		'name': ["", [Validators.required, Validators.minLength(3)]],
  		'year': ["", Validators.required],
  		'grapes': ["", Validators.required],
  		'country': ["", Validators.required],
  		'region': ["", Validators.required],
  		'description': ["", Validators.required]
  	});
  }

  ngOnInit() {
  	let id :string = this.aR.snapshot.paramMap.get('id');
  	if(id){
  	this.servic.getWine(Number(id)).subscribe(res => {
  		this.wine = res;
  		this.formaUnosVina.patchValue(this.wine);
  		}
  	)}
  	

  }

}
