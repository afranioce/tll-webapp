import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { CovalentLayoutModule } from '@covalent/core/layout';
import { CovalentStepsModule } from '@covalent/core/steps';
import { CovalentHttpModule } from '@covalent/http';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentDynamicFormsModule } from '@covalent/dynamic-forms';

import { MatButtonModule, MatListModule, MatIconModule, MatToolbarModule, MatFormFieldModule, MatInputModule, MatCardModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { FuncionarioModule } from './funcionario/funcionario.module';
import { MovimentacaoModule } from './movimentacao/movimentacao.module';
import { DepartamentoModule } from './departamento/departamento.module';
import { LoginComponent } from './login/login.component';
import { AuthService } from './core/auth/auth.service';
import { AuthGuard } from './core/auth/auth.guard';
import { ReactiveFormsModule } from '../../node_modules/@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    // angular modules
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // material modules
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
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
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
