import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { MatDialog } from "@angular/material/dialog";
import { mock } from "ts-mockito";
import { RouterTestingModule } from "@angular/router/testing";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

import { providerOf } from "@app/core/testing";

import { HeaderComponent } from "./header.component";

describe("HeaderComponent", () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let matDialogMock: MatDialog;

  beforeEach(() => {
    matDialogMock = mock(MatDialog);
  });

  beforeEach(waitForAsync(() => {
    void TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
      ],
      declarations: [HeaderComponent],
      providers: [providerOf(MatDialog, matDialogMock)],
    }).compileComponents();
  }));

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
    });
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
