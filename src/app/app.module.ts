import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { AccordionModule } from 'primeng/primeng';
import { PanelModule } from 'primeng/primeng';
import { ButtonModule } from 'primeng/primeng';
import { RadioButtonModule } from 'primeng/primeng';
import { MenuModule } from 'primeng/primeng';
import { NgModule } from '@angular/core';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { GlobalVariableService } from './Services/global.service';
import { AppComponent } from './app.component';
import { ServicioComponent } from './Components/servicios.component';
import { UsuarioComponent } from './Components/usuarios.component';


@NgModule({
  declarations: [
      AppComponent, 
      ServicioComponent,
      UsuarioComponent
  ],
  imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      TableModule,
      AccordionModule,
      PanelModule,
      ButtonModule,
      RadioButtonModule,
      FileUploadModule,
      MenuModule,
      DialogModule,
      ReactiveFormsModule
  ],
  providers: [GlobalVariableService],
  bootstrap: [AppComponent]
})
export class AppModule { }
