import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  public entities = [
    {
      subjectName: 'Product Line Engineering',
      credits: 6,
    },
    {
      address: 'Itzum',
      rent: 350,
    },
    {
      userName: 'avnish_raut',
      email: 'ar@gmail.com',
    },
  ];
}
