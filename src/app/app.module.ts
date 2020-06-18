/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { CommonModule } from '@angular/common';  

import {AppComponent} from './app.component';
import { AdAuthoringComponent } from './ad-authoring/ad-authoring.component';
import { AdAuthoringService } from './ad-authoring/ad-authoring.service';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, AdAuthoringComponent, TopBarComponent],
  imports: [BrowserModule, FormsModule, BrowserAnimationsModule, MatInputModule, MatFormFieldModule, MatSelectModule, CommonModule],
  exports: [MatInputModule, MatFormFieldModule, MatSelectModule],
  providers: [AdAuthoringService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
