import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReturnRequestFormComponent } from './return-request-form/return-request-form.component';
import { DeviceComponent } from './device/device.component';

@NgModule({
  declarations: [AppComponent, ReturnRequestFormComponent, DeviceComponent],
  imports: [AppRoutingModule, FormsModule, BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
