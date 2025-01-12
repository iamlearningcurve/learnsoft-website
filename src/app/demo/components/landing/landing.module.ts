import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingRoutingModule } from './landing-routing.module';
import { LandingComponent } from './landing.component';
import { StyleClassModule } from 'primeng/styleclass';
import { DividerModule } from 'primeng/divider';
import { ChartModule } from 'primeng/chart';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { ScrollTopModule } from 'primeng/scrolltop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';
import { ChipModule } from 'primeng/chip';
import { ServicesComponent } from './services/services.component';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';


@NgModule({
    imports: [
        CommonModule,
        LandingRoutingModule,
        DividerModule,
        StyleClassModule,
        ChartModule,
        PanelModule,
        ButtonModule,
        AccordionModule,
        ScrollTopModule,
        FormsModule, ReactiveFormsModule,
        InputTextModule,
        InputMaskModule,
        InputTextareaModule,
        TabViewModule,
        DialogModule,
        TagModule,
        ChipModule,
        SidebarModule,
        BadgeModule
    ],
    declarations: [LandingComponent, ServicesComponent]
})
export class LandingModule { }
