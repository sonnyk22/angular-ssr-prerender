import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { AppService } from '../../../app.service';

//*****************************************************************************
@Component({
	selector: 'app-admin',
	templateUrl: './admin.component.html'
})
export class AdminComponent
	   implements OnInit {

	title: string = null;

	//=================================================
	//===                Constructor                ===
	//=================================================
	constructor(
		private _aSvc: AppService,
		@Inject(DOCUMENT) private _doc: Document
	) {
		// console.debug('Constructor(Admin). IsServer:', this._aSvc.isServer);
		// console.debug('Constructor(Admin). IsBrowser:', this._aSvc.isBrowser);	

		if (this._aSvc.isServer) {	
			this._aSvc.setMeta('Admin Page', 'This is Admin page');
			this._aSvc.addSiteMeta(
				'Angular SSR',
				'Admin Page',
				'This is Admin page',
				'https://i.ytimg.com/vi/BKMJKqQgR48/maxresdefault.jpg?v=66053b58',
				'https://www.youtube.com'
			);
		}
	}

	//=================================================
	//===       Lifecycle Overrides Functions       ===
	//=================================================
	ngOnInit() {
		this.title = 'Admin';		
		// console.debug('NgOnInit(). IsServer: %s. Href:', this._aSvc.isServer, this._doc.location.href);		
	}
}