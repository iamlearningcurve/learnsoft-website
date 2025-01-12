import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { ServicesComponent } from './services/services.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: LandingComponent },
        // { path: 'services', component: ServicesComponent }
    ])],
    exports: [RouterModule]
})
export class LandingRoutingModule { }
