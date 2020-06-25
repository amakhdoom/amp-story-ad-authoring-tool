import { Component } from '@angular/core';
import { AdAuthoringService } from './ad-authoring.service';
import { AdAuthoringWorkflowState } from './ad-authoring.state';
import { Observable } from 'rxjs';
import { CallToActionEnum, CallToActionMapping, sortedCallToAction } from './call-to-action';
import { tap } from 'rxjs/operators';
import { LandingTypeEnum, LandingTypeMapping,  sortedLandingType } from './landing-type-values';

@Component({
  selector: 'app-ad-authoring',
  templateUrl: './ad-authoring.component.html',
  styleUrls: ['./ad-authoring.component.scss']
})
export class AdAuthoringComponent {

  adAuthoringObs: Observable<AdAuthoringWorkflowState>;

  landingPageUrl = "";

  public CallToActionMapping = CallToActionMapping;
  public callToActionValues = sortedCallToAction;

  public LandingTypeMapping = LandingTypeMapping;
  public landingTypeValues = sortedLandingType;

  constructor(private service: AdAuthoringService) {
    this.adAuthoringObs = service.getAdAuthorings().pipe(tap(state => console.log(state)));
  }

  updateLandingUrl(landingUrl: string) {
    this.service.updateLandingUrl(landingUrl);
  }

  updateLandingType(landingType: LandingTypeEnum) {
    this.service.updateLandingType(landingType);
  }

  updateCallToAction(callToAction: CallToActionEnum) {
    console.log("Updating call to action")
    this.service.updateCallToAction(callToAction);
  }
}
