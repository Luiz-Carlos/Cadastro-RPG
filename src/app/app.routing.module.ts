import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from './login/login-form/login-form.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { CadastroEmailComponent } from './cadastro-pessoa/cadastro-email/cadastro-email.component';
import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
{ path: '', component: CadastroEmailComponent },
{ path: 'login', component: LoginFormComponent },
{ path: 'home', component: HomeComponent },
{ path: 'cadastro', component: CadastroPessoaComponent }

]

@NgModule({
imports: [RouterModule.forRoot(APP_ROUTES)],
exports: [RouterModule]
})
export class AppRoutingModule { }
