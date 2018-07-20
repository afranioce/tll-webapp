import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule } from '@covalent/core/steps';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';

import { MatButtonModule, MatListModule, MatIconModule, MatToolbarModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FuncionarioModule } from './funcionario/funcionario.module';
import { MovimentacaoModule } from './movimentacao/movimentacao.module';
import { DepartamentoModule } from './departamento/departamento.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // angular modules
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    // material modules
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    // covalent modules
    CovalentLayoutModule,
    CovalentStepsModule,
    CovalentHttpModule,
    CovalentHighlightModule,
    CovalentDynamicFormsModule,
    // custom modules
    FuncionarioModule,
    DepartamentoModule,
    MovimentacaoModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
