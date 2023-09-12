import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LayoutComponent } from "src/app/ui/theme/layout/components/layout.component";
import { RouterTestingModule } from "@angular/router/testing";
import { MockComponents } from "ng-mocks";
import { HeaderComponent } from "src/app/ui/theme/layout/modules/header/components/header.component";
import { FooterComponent } from "src/app/ui/theme/layout/modules/footer/components/footer.component";
import { MainComponent } from "src/app/ui/theme/layout/modules/main/components/main.component";

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
