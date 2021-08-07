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
import { Art1Component } from './art/art1.component';
import { Art2Component } from './art/art2.component';
import { Art3Component } from './art/art3.component';
import { Art4Component } from './art/art4.component';

const routes: Routes = [
  // { path: 'servicio', component: ServicioComponent },
  { path: 'conoceme', component: ConocemeComponent },
  { path: 'articulos', component: ArticulosComponent },

  { path: 'tejidomuscular', component: Art1Component },
  { path: 'oclusion', component: Art2Component },
  




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
    FooterComponent,
    Art1Component,
    Art2Component,
    Art3Component,
    Art4Component
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
