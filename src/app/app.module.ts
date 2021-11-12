import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';

import { FooterComponent } from './components/template/footer/footer.component';
import { SideNavComponent } from './components/template/side-nav/side-nav.component';
import { HomeComponent } from './views/home/home.component';
import { ProdutosComponent } from './views/produtos/produtos.component';
import { ContadorComponent } from './views/contador/contador.component';
import { ShowContadorComponent } from './views/contador/show-contador/show-contador.component';

import { StoreModule } from '@ngrx/store';
import { contadorReducer } from './store/contador/contador.reducer';

import { HttpClientModule } from '@angular/common/http';
import { ContabilModule } from './contabil/contabil.module';
import { PipesComponent } from './views/pipes/pipes.component';
import { CamelCasePipe } from './pipes/camel-case.pipe';
import { BindingsComponent } from './views/bindings/bindings.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    HomeComponent,
    ProdutosComponent,
    ContadorComponent,    
    ShowContadorComponent, 
    PipesComponent, 
    CamelCasePipe, BindingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    MatInputModule,
    StoreModule.forRoot({ contador: contadorReducer }),
    HttpClientModule,
    ContabilModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
