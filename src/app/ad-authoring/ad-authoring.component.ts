import { Component } from '@angular/core';
import { AdAuthoringService } from './ad-authoring.service'
import { AdAuthoringWorkflowState } from './ad-authoring.state';
import { Observable } from 'rxjs';
import { CallToActionEnum, CallToActionMapping } from './call-to-action';

@Component({
  selector: 'app-ad-authoring',
  templateUrl: './ad-authoring.component.html',
  styleUrls: ['./ad-authoring.component.scss']
})
export class AdAuthoringComponent {

  public CallToActionMapping = CallToActionMapping;

  public texts = Object.values(CallToActionEnum);

  adAuthoringObs: Observable<AdAuthoringWorkflowState>

  constructor(private service: AdAuthoringService) {
    this.adAuthoringObs = service.getAdAuthorings();
  }

  addAdAuthoring(landingUrl: string, landingType: string, callToAction: string) {
    this.service.addAdAuthoring(landingUrl, landingType, callToAction);
  }

}
