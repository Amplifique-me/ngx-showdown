import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ShowdownModule } from 'ngx-showdown';
import * as Showdown from 'showdown';
import highlightExtension from 'showdown-highlight';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditorComponent } from './editor/editor.component';
import {MatListModule} from '@angular/material/list';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatInputModule} from '@angular/material/input';
import {MatLineModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from "@angular/material/toolbar";

let mdToSdExtension: Showdown.RegexReplaceExtension = {
  type: 'lang',
  regex: new RegExp('`Markdown`', 'g'),
  replace: '`Showdown`'
};

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,

    ShowdownModule.forRoot({
      flavor: 'github',
      underline: true,
      extensions: [mdToSdExtension, highlightExtension]
    }),

    AppRoutingModule,
    MatListModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatInputModule,
    MatLineModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule
  ],
  declarations: [AppComponent, EditorComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
