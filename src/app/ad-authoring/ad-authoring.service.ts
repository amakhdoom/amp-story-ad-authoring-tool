import { Injectable } from '@angular/core';
import { AdAuthoringState, AdAuthoringStateContainer } from './ad-authoring.state';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdAuthoringService {

  constructor(private readonly adAuthoringState: AdAuthoringStateContainer) {}

  addAdAuthoring(landingUrl: string, landingType: string, callToAction: string) {
    this.adAuthoringState.setState({
      landingUrl, landingType, callToAction
    });
  }

  getAdAuthorings(): Observable<AdAuthoringState> {
    return this.adAuthoringState.getState();
  }
}