import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { ConocemeComponent } from './conoceme/conoceme.component';
import { ServicioComponent } from './servicio/servicio.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'servicio', component: ServicioComponent },
  { path: 'conoceme', component: ConocemeComponent },
  { path: 'articulos', component: ArticulosComponent },
  { path: '',component: HomeComponent, pathMatch: 'full' },
{ path: '**', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ArticulosComponent,
    ConocemeComponent,
    ServicioComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

  
 }
