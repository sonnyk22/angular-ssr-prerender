//=============================================================================
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//=============================================================================
// Components
import { AdminComponent } from '../components';

//=============================================================================
// Router Module
@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: AdminComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class AdminRoutingModule { }