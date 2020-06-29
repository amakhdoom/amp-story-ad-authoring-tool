import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HarnessLoader} from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import {MatButtonHarness} from '@angular/material/button/testing';
import {MatSelectHarness} from '@angular/material/select/testing';
import {MatExpansionPanelHarness} from '@angular/material/expansion/testing'
import {AppModule} from '../app.module'

import { AdAuthoringComponent } from './ad-authoring.component';

let loader: HarnessLoader;

describe('AdAuthoringComponent', () => {
  let component: AdAuthoringComponent;
  let fixture: ComponentFixture<AdAuthoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppModule]
    })
    .compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(AdAuthoringComponent);
    loader = TestbedHarnessEnvironment.loader(fixture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create ad-authoring component', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct number of mat selects', async () => {
    const selects = await loader.getAllHarnesses(MatSelectHarness);
    const expansion = await loader.getHarness(MatExpansionPanelHarness);
    await expansion.expand();
    expect(selects.length).toEqual(2);
  });

  it('should have the correct number of options for landing type select', async () => {
    const expansion = await loader.getHarness(MatExpansionPanelHarness);
    await expansion.expand();
    const landingTypeSelect = await loader.getHarness(MatSelectHarness.with({
      selector: '.landingPage'
    }));
    await landingTypeSelect.open();
    const typeOptions = await landingTypeSelect.getOptions();
    expect(typeOptions.length).toBe(3);
  });
});
