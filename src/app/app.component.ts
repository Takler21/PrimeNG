import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'Mantenimiento de datos';
    items: MenuItem[];

    transactions: {
        date: Date,
        label: string,
        amount: number
    }[];

    ngOnInit() {
        this.items = [
            {
                label: 'Servicios', icon: 'fas fa-cogs', command: (event) => {
                    this.title = 'Servicios';
                }
            },
            {
                label: 'Usuarios', icon: 'fas fa-user-ninja', command: (event) => {
                    this.title = 'Usuarios';
                }
            }
        ]
        this.transactions = [
            {
                date: new Date(2017, 10, 10, 13, 10, 15),
                label: 'Third transaction',
                amount: 130
            },
            {
                date: new Date(2017, 7, 3, 9, 35, 0),
                label: 'Second transaction',
                amount: 130
            },
            {
                date: new Date(2017, 3, 27, 15, 43, 10),
                label: 'First transaction',
                amount: 130
            }
        ];
    }
}
