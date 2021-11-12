import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./views/home/home.component";
import { ProdutosComponent } from "./views/produtos/produtos.component";
import { ContadorComponent } from './views/contador/contador.component';
import { FinanceiroComponent } from './financeiro/financeiro.component';
import { PipesComponent } from './views/pipes/pipes.component';
import { BindingsComponent } from './views/bindings/bindings.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "produtos",
    component: ProdutosComponent
  },
  {
    path: "bindings",
    component: BindingsComponent
  },
  {
    path: "pipes",
    component: PipesComponent
  },
  {
    path: "contador",
    component: ContadorComponent
  },
  {
    path: "financeiro",
    component: FinanceiroComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
