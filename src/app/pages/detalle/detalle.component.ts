import { Component, OnInit } from '@angular/core';
import { Detalle } from 'app/Model/Detalle';
import { DetalleService } from 'app/Services/detalle.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  detalle:Detalle[] = [];
  constructor(private service:DetalleService) { }

  ngOnInit(): void {
    this.service.get2().subscribe(data=>{
      this.detalle=data;
    })
  }

}
