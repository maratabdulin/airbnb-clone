import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { MatButtonModule } from "@angular/material/button";
import { MockModule } from "ng-mocks";

import { IconsModule } from "@app/ui/icons";

import { FooterComponent } from "./footer.component";

describe("FooterComponent", () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(waitForAsync(() => {
    void TestBed.configureTestingModule({
      imports: [MatButtonModule, MockModule(IconsModule)],
      declarations: [FooterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
