//=============================================================================
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//=============================================================================
// Components
import { PhotosComponent } from '../components';

//=============================================================================
// Router Module
@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: PhotosComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class PhotosRoutingModule { }