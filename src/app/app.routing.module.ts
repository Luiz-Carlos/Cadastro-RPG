import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginFormComponent } from './login/login-form/login-form.component';
import { CadastroPessoaComponent } from './cadastro-pessoa/cadastro-pessoa.component';
import { CadastroEmailComponent } from './cadastro-pessoa/cadastro-email/cadastro-email.component';

const APP_ROUTES: Routes = [
{ path: '', component: LoginFormComponent },
{ path: 'cadastro', component: CadastroPessoaComponent },
{ path: 'email', component: CadastroEmailComponent }
]

@NgModule({
imports: [RouterModule.forRoot(APP_ROUTES)],
exports: [RouterModule]
})
export class AppRoutingModule { }
