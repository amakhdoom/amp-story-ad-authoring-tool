import { Injectable } from '@angular/core';
import { AdAuthoringWorkflowState, AdAuthoringWorkflowStateContainer } from './ad-authoring.state';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdAuthoringService {

  constructor(private readonly adAuthoringState: AdAuthoringWorkflowStateContainer) {}
  
  //split adauthoring into 3 separta
  // addAdAuthoring(landingUrl: string, landingType: string, callToAction: string) {
  //   this.adAuthoringState.setState({
  //     landingUrl, landingType, callToAction
  //   });
  // }

  addLandingUrl(landingUrl: string) {
    this.adAuthoringState.setState({
      ...this.adAuthoringState.getValue(), landingUrl
    });
  }

  addLandingType(landingType: string) {
    this.adAuthoringState.setState({
      ...this.adAuthoringState.getValue(), landingType
    });
  }

  addCallToAction(callToAction: string) {
    this.adAuthoringState.setState({
      ...this.adAuthoringState.getValue(), callToAction
    });
  }

  getAdAuthorings(): Observable<AdAuthoringWorkflowState> {
    return this.adAuthoringState.getState();
  }
}
