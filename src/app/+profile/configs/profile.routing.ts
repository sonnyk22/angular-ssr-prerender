//=============================================================================
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//=============================================================================
// Components
import { 
    ProfileComponent
} from '../components/profile.component';

//=============================================================================
// Router Module
@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ProfileComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ProfileRoutingModule { }