import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ContactoComponent } from './contacto/contacto.component';
import { FooterComponent } from './footer/footer.component';
import { FuncaoComponent } from './funcao/funcao.component';
import { PrincipalComponent } from './principal/principal.component';
import { SobrenosComponent } from './sobrenos/sobrenos.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { VantagemComponent } from './vantagem/vantagem.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ContactoComponent,
    FooterComponent,
    FuncaoComponent,
    PrincipalComponent,
    SobrenosComponent,
    TopBarComponent,
    VantagemComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
