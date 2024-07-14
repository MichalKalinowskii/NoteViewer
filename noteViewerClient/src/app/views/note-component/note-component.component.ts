import { Component, OnInit } from '@angular/core';
import { SignalRService } from '../../services/signalR.service';

@Component({
  selector: 'app-note-component',
  templateUrl: './note-component.component.html',
  styleUrl: './note-component.component.css'
})
export class NoteComponentComponent implements OnInit {

  constructor(private signalRService: SignalRService) {}

  ngOnInit(): void {
    this.signalRService.startConnection();
    this.signalRService.addTransferChartDataListener();
  }

  public sendMessage() {
    this.signalRService.sendMessage("User2024", "Connection test from client side");
  }

}
