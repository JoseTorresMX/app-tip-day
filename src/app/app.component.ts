import { Component, OnInit } from '@angular/core';
import { AdviceServiceService } from './advice-service.service';//importamos el servicio
import { response } from 'express';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  advice: string='';
  
  constructor(private adviceService: AdviceServiceService){}//inicializamos el constructor

  ngOnInit(){
    this.getAdvice();
  }
  getAdvice(){
    this.adviceService.getAdvice().subscribe(response => {this.advice = response.slip.advice;},error=>{console.error('Error advice: ',error);
      
    }
  ); //llamamos al método del servicio para obtener el consejo y lo almacenamos en la variable advice
  }

  title = 'consejo-appv4';
}
