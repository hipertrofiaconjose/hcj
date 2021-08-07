import { Component, OnInit } from '@angular/core';

import { HostListener } from "@angular/core"; // Para las dimensiones

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }
    this.ajustarancho();
  }

  altura: number;
  ancho: number;
  grande: boolean;
  showMini: boolean = false;

  @HostListener('window:resize', ['$event'])
  ajustarancho(){

    
this.grande = false;

    this.altura = window.innerHeight;
    this.ancho = window.innerWidth;

    console.log('altura: ' + this.altura + ', y anchura: ' + this.ancho)
     if(this.ancho > 500){
       this.grande = true;
     }else{
       this.grande = false;
     }
  

  }

}
