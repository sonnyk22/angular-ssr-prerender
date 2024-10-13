//=============================================================================
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//=============================================================================
// Components
import { SonnyComponent } from '../components';

//=============================================================================
// Router Module
@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: SonnyComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class SonnyRoutingModule { }