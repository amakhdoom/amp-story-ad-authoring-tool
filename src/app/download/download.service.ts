import {Injectable} from '@angular/core';
import {AdAuthoringWorkflowStateContainer} from '../ad-authoring/ad-authoring.state';
import {map} from 'rxjs/operators';
import {generateHtmlForDownload} from '../ad-authoring/generate-amp-html';

@Injectable({
  providedIn: 'root',
})
export class DownloadService {
  constructor(
    private readonly adAuthoringState: AdAuthoringWorkflowStateContainer
  ) {}

  downloadDisabled() {
    return this.adAuthoringState.getState().pipe(
      map(state => {
        const {file, landingUrl} = state;
        return file && landingUrl ? false : true;
      })
    );
  }

  getAsset() {
    return this.adAuthoringState.getValue().file;
  }

  generateHtmlForDownload() {
    const landingUrl = this.adAuthoringState.getValue().landingUrl;
    const landingType = this.adAuthoringState.getValue().landingType;
    const callToAction = this.adAuthoringState.getValue().callToAction;
    const file = this.adAuthoringState.getValue().file;
    const assetPath = file.name;

    const adAmpHtml = generateHtmlForDownload({
      callToActionStr: callToAction,
      landingUrl: landingUrl,
      landingType: landingType,
      assetFilePath: assetPath,
      assetFile: file,
    });

    return adAmpHtml;
  }
}
