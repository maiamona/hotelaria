import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FuncaoComponent } from './funcao/funcao.component';
import { PrincipalComponent } from './principal/principal.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { VantagemComponent } from './vantagem/vantagem.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [{ path: '', component: PrincipalComponent }, {path: 'mona', component: SobrenosComponent}, {path: 'funcao', component: FuncaoComponent}, {path: 'vantagem', component: VantagemComponent}, {path: 'contacto', component: ContactoComponent}, {path: 'login', component: LoginComponent}, {path: 'cadastro', component: CadastroComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
