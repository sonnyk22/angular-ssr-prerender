//=============================================================================
// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//=============================================================================
// Internal Features (Admin)
import {
    // Routing
    AdminRoutingModule,

    // Components
    AdminComponent
 } from './';

//=============================================================================
// Module (Admin)
@NgModule({
    imports: [
        // Angular
        CommonModule,

        // Routing
        AdminRoutingModule
    ],
    declarations: [
        AdminComponent
    ],
    providers: []
})
export class AdminModule { }