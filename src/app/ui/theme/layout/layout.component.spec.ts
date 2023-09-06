import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LayoutComponent } from "./layout.component";
import { RouterTestingModule } from "@angular/router/testing";
import { MockComponents } from "ng-mocks";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MainComponent } from "./components/main/main.component";

describe("LayoutComponent", () => {
  let component: LayoutComponent;
  let fixture: ComponentFixture<LayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        LayoutComponent,
        MockComponents(HeaderComponent, FooterComponent, MainComponent),
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
