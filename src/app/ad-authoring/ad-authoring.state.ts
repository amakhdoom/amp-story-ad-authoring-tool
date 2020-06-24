import { Injectable } from '@angular/core';
import {Observable, BehaviorSubject} from 'rxjs';
import { CallToActionEnum } from './call-to-action';

export interface AdAuthoringWorkflowState {
  readonly landingUrl?: string;
  readonly landingType?: string;
  readonly callToAction?: CallToActionEnum;
}
// add a default state for the fields above
@Injectable({
  providedIn: 'root'
})
export class AdAuthoringWorkflowStateContainer {

    private state$: BehaviorSubject<AdAuthoringWorkflowState> = new BehaviorSubject({
    });

    getValue(): AdAuthoringWorkflowState {
        return this.state$.getValue();
    }

    getState(): Observable<AdAuthoringWorkflowState> {
      return this.state$.asObservable();
    }

    setState(nextState: AdAuthoringWorkflowState): void {
        this.state$.next(nextState);
    }
}
