import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdCardModule } from '@angular2-material/card';
import { AboutCopyComponent } from './aboutcopy.component';


import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MdButtonToggleModule} from '@angular2-material/button-toggle';
import {MdButtonModule} from '@angular2-material/button';
import {MdSidenavModule} from '@angular2-material/sidenav';
import {MdToolbarModule} from '@angular2-material/toolbar';
import {MdIconModule} from '@angular2-material/icon';
import {MdCheckboxModule} from '@angular2-material/checkbox';
import {MdRadioModule} from '@angular2-material/radio';
import {MdInputModule} from '@angular2-material/input';
import {MdProgressBarModule} from '@angular2-material/progress-bar';
import {MdTabsModule} from '@angular2-material/tabs';

@NgModule({
    imports: [CommonModule, MdCardModule,

    FormsModule,
    HttpModule,
    
    MdButtonModule,
    MdButtonToggleModule,
    MdSidenavModule,
    MdToolbarModule,
    MdIconModule,
    MdCardModule,
    MdCheckboxModule,
    MdRadioModule,
    MdInputModule,
    MdProgressBarModule,
MdTabsModule
    ],




    declarations: [
        AboutCopyComponent
        ],
    exports: [AboutCopyComponent]
})
export class AbouCopyModule { }
