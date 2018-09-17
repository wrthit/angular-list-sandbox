import { Injectable } from '@angular/core';
import { Status } from '../models/status';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { 

  }

  getItems(){
    return [{
      id:123,
      firstName:"john",
      lastName:"doe",
      status:Status.START,
    },
    {
      id:456,
      firstName:"jessica",
      lastName:"rabbit",
      status:Status.INPROGRESS,
    }];
  }
}
