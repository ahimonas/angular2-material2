import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule } from '@angular2-material/card';
import { AboutComponent } from './about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MdSidenavModule} from '@angular2-material/sidenav';

import {MdTabsModule} from '@angular2-material/tabs'; 

import {MdButtonModule} from '@angular2-material/button';

import {MdGridListModule } from '@angular2-material/grid-list';



@NgModule({
    imports: [CommonModule, MdCardModule, ReactiveFormsModule, MdSidenavModule, MdTabsModule, MdButtonModule, MdGridListModule],
    declarations: [AboutComponent],
    exports: [AboutComponent]
})
export class AboutModule { }
