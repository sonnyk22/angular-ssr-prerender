//=============================================================================
// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//=============================================================================
// Internal Features (Main)
import {
    // Components
    MainComponent
} from './';

//=============================================================================
// Module (Legal)
@NgModule({
    imports: [
        // Angular
        CommonModule
    ],
    declarations: [
        MainComponent
    ],
    providers: []
})
export class MainModule { }