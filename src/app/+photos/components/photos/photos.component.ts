import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { AppService } from '../../../app.service';

@Component({
	selector: 'app-photos',
	templateUrl: './photos.component.html'
})
export class PhotosComponent
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
		// console.debug('Constructor(Photos). IsServer:', this._aSvc.isServer);
		// console.debug('Constructor(Photos). IsBrowser:', this._aSvc.isBrowser);				
	}

	//=================================================
	//===       Lifecycle Overrides Functions       ===
	//=================================================
	ngOnInit() {
		this.model.title = 'PROFILE Photos';
		//console.debug('NgOnInit(Photos). IsServer: %s.  Href:', this._aSvc.isServer, this._doc.location.href);

		if (this._aSvc.isServer) {	
			this._aSvc.setMeta('Profile Photos Page', 'This is Profile Photos page');
			this._aSvc.addSiteMeta(
				'Angular SSR',
				'Profile Photos Page',
				'This is Profile Photos page',
				'https://i.ytimg.com/vi/BKMJKqQgR48/maxresdefault.jpg?v=66053b58',
				'https://www.youtube.com'
			);
		}	
				
		if (this._aSvc.isBrowser) {
			this.model.isBrowser = this._aSvc.isBrowser;
		}	
	}
}