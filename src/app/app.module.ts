import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter/Components/counter/counter.components';
import { FormsModule } from '@angular/forms';
import { CounterModule } from './counter/Components/counter.module';
import { ListComponent } from './Heroes/list/list.component';
import { HeroComponent } from './Heroes/Hero/hero.component';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    CounterModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
