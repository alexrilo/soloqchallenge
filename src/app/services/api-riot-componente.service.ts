import { Injectable } from '@angular/core';
import { Jugador } from '../modules/jugador';
import { HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { JugadoresComponent } from '../components/jugadores/jugadores.component';

@Injectable({
  providedIn: 'root'
})
export class ApiRiotComponenteService {
  constructor(private http: HttpClient){}

  jugadores: Jugador[] = [];
  nombre: string = '';



  getJugadores() {
    /*console.log('estoy aqui');
    this.http.get('http://localhost:8080/nombre',{responseType: 'text'}).subscribe(
      (resp:any) => {
        this.jugadores[1].nombre = resp;        
        console.log(this.jugadores[1].nombre);
      }
    );
    this.http.get('http://localhost:8080/rank',{responseType: 'text'}).subscribe(
      (resp:any) => {
        this.jugadores[1].rank = resp;        
        console.log(this.jugadores[1].rank);
      }
    );
    this.http.get('http://localhost:8080/wins',{responseType: 'text'}).subscribe(
      (resp:any) => {
        this.jugadores[1].wins = resp;        
        console.log(this.jugadores[1].wins.valueOf());
      }
    );
    this.http.get('http://localhost:8080/loses',{responseType: 'text'}).subscribe(
      (resp:any) => {
        this.jugadores[1].loses = resp;        
        console.log(this.jugadores[1].loses.valueOf());
      }
    );
    this.http.get('http://localhost:8080/liga',{responseType: 'text'}).subscribe(
      (resp:any) => {
        this.jugadores[1].liga = resp;        
        console.log(this.jugadores[1].liga);
      }
    )*/
    console.log("llego");
    return this.http.get('http://soloqchallengeproject.herokuapp.com/jugadores');

     
      
    
  }
  dameJugadores(){
    return this.jugadores;
  }



}
