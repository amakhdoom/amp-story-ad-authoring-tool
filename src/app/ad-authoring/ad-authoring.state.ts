import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';

//change to workflowstate
export interface AdAuthoringState {
  readonly landingUrl?: string;
  readonly landingType?: string;
  readonly callToAction?: string;
}
// add a default state for the fields above
@Injectable({
  providedIn: 'root'
})
export class AdAuthoringStateContainer {

    private state$: BehaviorSubject<AdAuthoringState> = new BehaviorSubject({
    });

    getValue(): AdAuthoringState {
        return this.state$.getValue();
    }

    getState(): Observable<AdAuthoringState> {
      return this.state$.asObservable();
    }

    setState(nextState: AdAuthoringState): void {
        this.state$.next(nextState);
    }
}