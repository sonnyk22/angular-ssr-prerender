//=============================================================================
// Angular
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

//=============================================================================
// Internal Features (Layout)
import {
    // Components
    LayoutMainComponent } from './';

//=============================================================================
// Module (Layout)
@NgModule({
    imports: [
        // Angular
        CommonModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        // Components
        LayoutMainComponent
    ],
    providers: []
})
export class LayoutModule { }