import { Injectable } from '@angular/core';
import { AdAuthoring } from './ad-authoring.state';
import { AdAuthoringStateContainer } from './ad-authoring.state';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdAuthoringService {

  constructor(private readonly adAuthoringState: AdAuthoringStateContainer) {}

  addAdAuthoring(landingUrl: string, landingType: string, callToAction: string) {
    this.adAuthoringState.setState({
      adAuthorings: [ {landingUrl, landingType, callToAction}],
    });
  }

  getAdAuthorings(): Observable<ReadonlyArray<AdAuthoring>> {
    return this.adAuthoringState.getState().pipe(map(state => state.adAuthorings));
  }
}