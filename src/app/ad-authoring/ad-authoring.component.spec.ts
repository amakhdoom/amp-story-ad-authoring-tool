import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {HarnessLoader} from '@angular/cdk/testing';
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed';
import {MatSelectHarness} from '@angular/material/select/testing';
import {MatExpansionPanelHarness} from '@angular/material/expansion/testing'
import {AppModule} from '../app.module'
import {MatInputHarness} from '@angular/material/input/testing';

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

  beforeEach(async () => {
    const expansion = await loader.getHarness(MatExpansionPanelHarness);
    await expansion.expand();
  })

  it('should create ad-authoring component', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct number of mat selects', async () => {
    const selects = await loader.getAllHarnesses(MatSelectHarness);
    const expansion = await loader.getHarness(MatExpansionPanelHarness);
    expect(selects.length).toEqual(2);
  });

  it('should have the correct number of options for landing type select', async () => {
    const landingTypeSelect = await loader.getHarness(MatSelectHarness.with({
      selector: '.landingPage'
    }));
    await landingTypeSelect.open();
    const typeOptions = await landingTypeSelect.getOptions();
    expect(typeOptions.length).toBe(3);
  });

  it('should click the AMP option', async () => {
    const landingTypeSelect = await loader.getHarness(MatSelectHarness.with({
      selector: '.landingPage'
    }));
    await landingTypeSelect.open();
    await landingTypeSelect.clickOptions({text:'AMP'});
    const selectedText = await landingTypeSelect.getValueText();
    expect(selectedText).toBe('AMP');
  });

  it('should have the correct number of options for call to action select', async () => {
    const callToActionSelect = await loader.getHarness(MatSelectHarness.with({
      selector: '.callToAction'
    }));
    await callToActionSelect.open();
    const typeOptions = await callToActionSelect.getOptions();
    expect(typeOptions.length).toBe(21);
  });

  it('should click the Read Now option', async () => {
    const callToActionSelect = await loader.getHarness(MatSelectHarness.with({
      selector: '.callToAction'
    }));
    await callToActionSelect.open();
    await callToActionSelect.clickOptions({text:'Read Now'});
    const selectedText = await callToActionSelect.getValueText();
    expect(selectedText).toBe('Read Now');
  });

  it('should get correct placeholder for mat input', async () => {
    const landingUrlInput = await loader.getHarness(MatInputHarness);
    const placeholder = await landingUrlInput.getPlaceholder();
    expect(placeholder).toBe('Landing Page URL');
  });

  it('should set value correctly for mat input', async () => {
    const landingUrlInput = await loader.getHarness(MatInputHarness);
    await landingUrlInput.setValue('google.com');
    const value = await landingUrlInput.getValue();
    expect(value).toBe('google.com');
  });
});
