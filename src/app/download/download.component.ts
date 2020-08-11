import {Component} from '@angular/core';
import {DownloadService} from './download.service';
import * as JSZip from 'jszip';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss'],
})
export class DownloadComponent {
  disabledVal = false;

  constructor(private downloadService: DownloadService) {}

  downloadFileZip() {
    const zip = new JSZip();
    const data = this.downloadService.generateHtmlForDownload();
    zip.file('index.html', data);

    const asset = this.downloadService.getAsset();
    const assetFileName = asset.name;
    zip.file(assetFileName, asset);

    zip.generateAsync({type: 'blob'}).then(function (content) {
      const objectUrl: string = URL.createObjectURL(content);
      const downloadLink = document.createElement('a');
      document.body.appendChild(downloadLink);
      downloadLink.style.display = 'none';
      downloadLink.href = objectUrl;
      downloadLink.download = 'AmpAd.zip';
      downloadLink.click();
      window.URL.revokeObjectURL(objectUrl);
      document.body.removeChild(downloadLink);
    });
  }
}
