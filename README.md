# El consejo del Dia
Esta app desarrollada en angular consume una API [Advice Slip](https://api.adviceslip.com, el cual tiene una estrucra de un titulo, el consejo y un boton para generar el texto.
Para tener exito en el desarrollo de esta app, se hizo lo siguiente:
## Crear el proyecto
```
ng new <nombre_proyecto> --standalone=false
```
Creamos el componente **AdviceComponent**:
```
ng generate component advice
```
Luego, creamos el servicio **AdviceService**:
```
ng generate service advice
```
## Configuramos el servicio HTTP
Vamos al archivo **advice.service.ts** y lo configuramos para consumir la API.
```
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdviceService {
  private apiUrl = 'https://api.adviceslip.com/advice';

  constructor(private http: HttpClient) { }

  getAdvice(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}

```
