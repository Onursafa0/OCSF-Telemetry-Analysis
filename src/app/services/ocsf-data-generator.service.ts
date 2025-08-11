import { Injectable } from '@angular/core';
import * as OCSF from '@models/ocsf';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OcsfDataGeneratorService {
  private worker: Worker;

  constructor() {
    this.worker = new Worker(new URL('../workers/data-generator.worker', import.meta.url), { type: 'module' });
  }

  /**
   * Starts the data generation process and returns the generated data in chunks as an Observable.
   * @param payload The class UID or scenario ID and the number of records required for generation.
   * @returns An Observable that emits chunks of OCSF event arrays.
   */
  generateData(payload: { classUid?: OCSF.OcsfClassUid, scenarioId?: string, count: number }): Observable<OCSF.OcsfEvent[]> {
    return new Observable(observer => {
      this.worker.onmessage = ({ data }) => {
        // Process the incoming message based on its type
        if (data.type === 'data') {
          // Data chunk received, send to observer
          observer.next(data.payload as OCSF.OcsfEvent[]);
        } else if (data.type === 'done') {
          // Process finished, complete the observable
          observer.complete();
        } else if (data.type === 'error') {
          // An error occurred, send an error to the observable
          console.error("Error message from data-generator.worker:", data.payload);
          observer.error(new Error(data.payload));
        }
      };

      this.worker.onerror = (error) => {
        console.error("Critical error from data-generator.worker:", error);
        observer.error(error);
      };

      // Start the process by sending a message to the worker
      this.worker.postMessage(payload);

      // Return a cleanup function to terminate the worker when unsubscribing from the Observable.
      // This prevents unnecessary worker processes when the component is destroyed.
      return () => {
        // In a real-world scenario, you might want to terminate the worker
        // this.worker.terminate();
      };
    });
  }
}
