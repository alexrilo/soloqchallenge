
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Jugador } from '../../modules/jugador';
import {ApiRiotComponenteService} from '../../services/api-riot-componente.service';



@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  jugadores: Jugador[] = [];
  dtTrigger: Subject<any> = new Subject<any>();
  indice: number = 1;

  constructor(private service: ApiRiotComponenteService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2
    }
    this.consultar();
    
  }

  consultar(){
    console.log('hola buenas tardes');
    this.service.getJugadores().subscribe((jug: any) => {
      this.jugadores = jug
      this.jugadores.forEach(x => x.wr = Math.round((x.wins/(x.wins+x.loses))*100));
      this.jugadores.forEach(x => x.url = "https://euw.op.gg/summoner/userName="+x.nombre);
      console.log(this.jugadores[0].nombre);
      this.dtTrigger.next();
    });
  }
    
    ngOnDestroy(): void {
      // Do not forget to unsubscribe the event
      this.dtTrigger.unsubscribe();
    }

  }


