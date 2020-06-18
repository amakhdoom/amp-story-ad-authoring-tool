import { Injectable } from '@angular/core';
import { AdAuthoringWorkflowState, AdAuthoringWorkflowStateContainer } from './ad-authoring.state';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdAuthoringService {

  constructor(private readonly adAuthoringState: AdAuthoringWorkflowStateContainer) {}

  addAdAuthoring(landingUrl: string, landingType: string, callToAction: string) {
    this.adAuthoringState.setState({
      landingUrl, landingType, callToAction
    });
  }

  getAdAuthorings(): Observable<AdAuthoringWorkflowState> {
    return this.adAuthoringState.getState();
  }
}
