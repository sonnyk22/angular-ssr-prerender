//=============================================================================
// Angular
import { NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

//=============================================================================
// Imported Modules
import { LayoutModule } from './layout/layout.module';

//=============================================================================
// Internal Features (App)
import { AppService } from './app.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

// *******************************************************************************
// Module (App)
@NgModule({
    imports: [
        // Angular
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,

        RouterOutlet,
        LayoutModule,

        // Routing
        AppRoutingModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [        
        provideHttpClient(withFetch()),
        provideClientHydration(),

        // Services
        AppService 
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }