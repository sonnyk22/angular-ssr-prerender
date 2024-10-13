//=============================================================================
// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//=============================================================================
// Internal Features (Sonny)
import {
    SonnyRoutingModule,
    SonnyComponent
} from './';

//=============================================================================
// Module (Sonny)
@NgModule({
    imports: [
        // Angular
        CommonModule,

        // Routing
        SonnyRoutingModule
    ],
    declarations: [
        SonnyComponent
    ],
    providers: []
})
export class SonnyModule { }