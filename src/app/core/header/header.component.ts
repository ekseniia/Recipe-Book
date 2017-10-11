 import { Component } from '@angular/core';
 import { Response } from '@angular/http';

 import { DataStorageService } from '../../shared/data-storage.service';
 import { AuthService } from '../../auth/auth.service';

 @Component({
 	selector: 'app-header',
 	templateUrl: './header.component.html',
 	styleUrls: ['./header.component.css']
 })

 export class HeaderComponent {
 	constructor(private dataStorageService: DataStorageService,
 				private authService: AuthService){}

 	onSaveData(){
 		this.dataStorageService.storeRecipes().subscribe(
 				(response: Response) => {
 					// console.log(response);

 				}
 			);
 	}

 	onFetchData(){
 		this.dataStorageService.getRecipes();
 	}

 	onLogout(){
 		this.authService.logout();
 	}
 	

 	// @Output() recipeClick = new EventEmitter<{activeP: string}>();
 	// @Output() shopListlick = new EventEmitter<''>();
 	// @Output() activePage: string = '';

 	// onRecipesClick(btnVal: string){
 	// 	console.log(btnVal);
 	// 	this.activePage = btnVal;
 	// 	this.recipeClick.emit({
 	// 		activeP: this.activePage
 	// 	});
 	// };
 	// onShopListClick(btnVal: string){
 	// 	console.log(btnVal);
 	// 	this.activePage = btnVal;
 	// 	this.shopListlick.emit();
 	// };
 }