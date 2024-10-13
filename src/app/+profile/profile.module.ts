//=============================================================================
// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//=============================================================================
// Internal Features (Profile)
import {
    ProfileRoutingModule,
    ProfileComponent
 } from './';

//=============================================================================
// Module (Profile)
@NgModule({
    imports: [
        // Angular
        CommonModule,

        // Routing
        ProfileRoutingModule
    ],
    declarations: [
        ProfileComponent
    ],
    providers: []
})
export class ProfileModule { }