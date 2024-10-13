//=============================================================================
// Angular
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

//=============================================================================
// Import Features (App)
import { routes } from './app.routes';

//*****************************************************************************
const lp = '[AppRoutingModule]:';

//*****************************************************************************
// Module (App)
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    providers: []
})
export class AppRoutingModule { }