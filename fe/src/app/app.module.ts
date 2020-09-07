import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ReturnRequestFormComponent } from './return-request-form/return-request-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ReturnRequestFormComponent,
  ],
  imports: [
    AppRoutingModule,
    FormsModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
