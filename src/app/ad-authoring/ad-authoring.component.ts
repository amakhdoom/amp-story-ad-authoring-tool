import { Component, OnInit } from '@angular/core';
import { AdAuthoringService } from './ad-authoring.service'
import { AdAuthoring } from './ad-authoring';
import { Observable } from 'rxjs';

interface Text {
  value: string;
}

@Component({
  selector: 'app-ad-authoring',
  templateUrl: './ad-authoring.component.html',
  styleUrls: ['./ad-authoring.component.scss']
})
export class AdAuthoringComponent implements OnInit {

  texts: Text[] = [
    {value: "Apply Now"},
    {value: "Book"},
    {value: "Buy Tickets"},
    {value: "Download"},
    {value: "Explore Now"},
    {value: "Get Now"},
    {value: "Install Now"},
    {value: "Listen Now"},
    {value: "More"},
    {value: "Open App"},
    {value: "Order Now"},
    {value: "Play"},
    {value: "Read Now"},
    {value: "Shop Now"},
    {value: "Showtimes"},
    {value: "Sign Up"},
    {value: "Subscribe Now"},
    {value: "Use App"},
    {value: "View"},
    {value: "Watch"},
    {value: "Watch Episode"}
  ];

  adAuthoringObs: Observable<ReadonlyArray<AdAuthoring>>

  constructor(private service: AdAuthoringService) {
    this.adAuthoringObs = service.getAdAuthorings();
  }

  addAdAuthoring(landingUrl: string, landingType: string, callToAction: string) {
    this.service.addAdAuthoring(landingUrl, landingType, callToAction);
  }

  ngOnInit(): void {
  }

}
