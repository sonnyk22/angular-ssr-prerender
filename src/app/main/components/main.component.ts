import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { AppService } from '../../app.service';

//*****************************************************************************
@Component({
	selector: 'app-main',
	templateUrl: './main.component.html'
})
export class MainComponent
	   implements OnInit {

    //=================================================
    //===            Scope Properties              ===
    //=================================================
    model = {
        title: <string> null,
        isBrowser: <boolean> false
    };	

	//=================================================
	//===                Constructor                ===
	//=================================================
	constructor(
		private _aSvc: AppService,
		@Inject(DOCUMENT) private _doc: Document
	) {
		// console.debug('Constructor(Sonny). IsServer:', this._aSvc.isServer);
		// console.debug('Constructor(Sonny). IsBrowser:', this._aSvc.isBrowser);
	}

	//=================================================
	//===       Lifecycle Overrides Functions       ===
	//=================================================
	ngOnInit() {
		this.model.title = 'Main Landing Page';

		if (this._aSvc.isServer) {	
			this._aSvc.setMeta('Main Landing Page', 'This is Main Landing page');
			this._aSvc.addSiteMeta(
				'Angular SSR',
				'Main Landing Page',
				'This is Main Landing Page',
				'https://i.ytimg.com/vi/BKMJKqQgR48/maxresdefault.jpg?v=66053b58',
				'https://www.youtube.com'
			);
		}	
				
		if (this._aSvc.isBrowser) {
			this.model.isBrowser = this._aSvc.isBrowser;
		}	
	}

    //=================================================
    //===               Event Handlers              ===
    //=================================================
    btnClick(nav: string): void {
		this._aSvc.redirectTo(`/${nav}`);
    }	
}