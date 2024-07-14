import { Injectable } from "@angular/core";
import * as signalR from '@microsoft/signalr'

@Injectable({
    providedIn: 'root'
})
export class SignalRService {
    private hubConnection!: signalR.HubConnection;

    public startConnection = () => {
        this.hubConnection = new signalR.HubConnectionBuilder()
            .withUrl('http://localhost:5238/noteHub')
            .build();

        this.hubConnection
            .start()
            .then(() => console.log("Connection started"))
            .catch(err => console.log("Error while connecting to server.\nError message: " + err))
    }

    public addTransferChartDataListener = () => {
        this.hubConnection.on('ReceiveMessage', (user, message) => {
            console.log('User: ' + user + ', Message: '+ message);
        });
    }

    public sendMessage = (user: string, message: string) => {
        this.hubConnection.invoke('SendMessage', user, message)
            .catch(err => console.error(err));
    }

}