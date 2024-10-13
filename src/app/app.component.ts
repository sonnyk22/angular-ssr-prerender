import { Component, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { AppService } from './app.service';

//*****************************************************************************
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent {

	title: string = null;

	//=================================================
	//===                Constructor                ===
	//=================================================
	constructor(
		private _aSvc: AppService,
		private _elRef: ElementRef,
		@Inject(DOCUMENT) private _doc: Document
	) {
		// console.debug('Constructor(App). IsServer:', this._aSvc.isServer);
		// console.debug('Constructor(App). IsBrowser:', this._aSvc.isBrowser);	
		
		if (this._aSvc.isServer) {	
			if (this._elRef) {
				this._elRef.nativeElement.removeAttribute('ng-version');
			}
		}
	}
}