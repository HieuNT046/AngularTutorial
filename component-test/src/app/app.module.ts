import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroParentComponent } from './hero-parent.component';
import { HeroChildComponent } from './hero-child.component';

@NgModule({
  declarations: [
    AppComponent,    
    HeroChildComponent,
    HeroParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
