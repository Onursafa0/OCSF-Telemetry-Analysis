import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as OCSF from '@models/ocsf';

@Injectable({
  providedIn: 'root'
})
export class GraphDataService {
  private eventsSource = new BehaviorSubject<OCSF.OcsfEvent[]>([]);
  
  // Observable that other components can subscribe to.
  currentEvents$ = this.eventsSource.asObservable();

  constructor() { }

  /**
   * Sends the newly generated event data to the service and notifies all subscribed components.
   * @param events The OCSF events from the data-producing page.
   */
  updateEvents(events: OCSF.OcsfEvent[]): void {
    this.eventsSource.next(events);
  }
}
