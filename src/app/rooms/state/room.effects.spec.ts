import { Observable } from "rxjs";
import { TestBed } from "@angular/core/testing";
import { provideMockActions } from "@ngrx/effects/testing";
import { provideMockStore } from "@ngrx/store/testing";

import { RoomStorage } from "@app/rooms/storage";

import { RoomEffects } from "./room.effects";
import { ROOM_FEATURE_KEY, roomInitialState } from "./room.reducer";

describe("RoomEffects", () => {
  let actions$: Observable<any>;
  let effects: RoomEffects;
  let storage: RoomStorage;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RoomEffects,
        provideMockActions(() => actions$),
        provideMockStore({
          initialState: { [ROOM_FEATURE_KEY]: roomInitialState },
        }),
        {
          provide: RoomStorage,
          useValue: {} as Partial<RoomStorage>,
        },
      ],
    });

    effects = TestBed.inject(RoomEffects);
    storage = TestBed.inject(RoomStorage);
  });

  it("should be created", () => {
    expect(effects).toBeTruthy();
  });
});
