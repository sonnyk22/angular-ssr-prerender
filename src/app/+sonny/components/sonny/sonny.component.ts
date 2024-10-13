import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { AppService } from '../../../app.service';

//*****************************************************************************
@Component({
	selector: 'app-sonny',
	templateUrl: './sonny.component.html'
})
export class SonnyComponent
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
		this.model.title = 'Sonny';
		//console.debug('NgOnInit(Sonny). IsServer: %s.  Href:', this._aSvc.isServer, this._doc.location.href);

		if (this._aSvc.isServer) {	
			this._aSvc.setMeta('Sonny Page', 'This is Sonny page');
			this._aSvc.addSiteMeta(
				'Angular SSR',
				'Sonny Page',
				'This is Sonny page',
				'https://i.ytimg.com/vi/BKMJKqQgR48/maxresdefault.jpg?v=66053b58',
				'https://www.youtube.com'
			);
		}	
				
		if (this._aSvc.isBrowser) {
			this.model.isBrowser = this._aSvc.isBrowser;
		}	
	}
}