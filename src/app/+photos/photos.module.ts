//=============================================================================
// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//=============================================================================
// Internal Features (Photos)
import {
    PhotosRoutingModule,
    PhotosComponent
} from './';

//=============================================================================
// Module (Photos)
@NgModule({
    imports: [
        // Angular
        CommonModule,

        // Routing
        PhotosRoutingModule
    ],
    declarations: [
        PhotosComponent
    ],
    providers: []
})
export class PhotosModule { }