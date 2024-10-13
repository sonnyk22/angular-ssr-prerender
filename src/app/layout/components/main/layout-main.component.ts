//=============================================================================
// Angular
import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';

//=============================================================================
// Imported Features (App)
import { AppService } from '../../../app.service';

//*****************************************************************************
@Component({
    selector: 'app-layout-main',
    templateUrl: './layout-main.component.html',
    styles: [':host { display: block; }'],
    encapsulation: ViewEncapsulation.None
})
export class LayoutMainComponent
       implements OnInit {

    //=================================================
    //===            Scope Properties              ===
    //=================================================
    model = {
        init: <boolean> false,
        isBrowser: <boolean> false
    };

    //=================================================
    //===                Constructor                ===
    //=================================================
    constructor(
        private _aSvc: AppService
    ) {
		// console.debug('Constructor(Layout). IsServer:', this._aSvc.isServer);
		// console.debug('Constructor(Layout). IsBrowser:', this._aSvc.isBrowser);	
    }

    //=================================================
    //===       Lifecycle Overrides Functions       ===
    //=================================================
	ngOnInit() {
        //console.debug('NgOnInit(Layout). IsServer:', this._aSvc.isServer);

		if (this._aSvc.isBrowser) {
            this.model.isBrowser = this._aSvc.isBrowser;
			//console.debug('NgOnInit(App). IsBrowser:', this._aSvc.isBrowser);
		}
	}
}