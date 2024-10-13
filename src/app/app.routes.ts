//=============================================================================
// Angular
import { Routes } from '@angular/router';

//=============================================================================
// Import Features (Layout)
import { LayoutMainComponent } from './layout';

//=============================================================================
// Import Components (Main)
import { MainComponent } from './main';

//*****************************************************************************
export const routes: Routes = [
    // Lazy-loaded
    { path: 'sonny',        component: LayoutMainComponent, loadChildren: () => import('./+sonny/sonny.module').then(m => m.SonnyModule) },
    { path: 'admin',        component: LayoutMainComponent, loadChildren: () => import('./+admin/admin.module').then(m => m.AdminModule) },

    // Lazy-loaded - by Profile
    { path: ':user/photos', component: LayoutMainComponent, loadChildren: () => import('./+photos/photos.module').then(m => m.PhotosModule) },
    { path: ':user',        component: LayoutMainComponent, loadChildren: () => import('./+profile/profile.module').then(m => m.ProfileModule) },    
    
    // Eager-loaded - Default
    { path: '',             component: MainComponent }
];
