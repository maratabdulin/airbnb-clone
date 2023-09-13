import { Injectable } from "@angular/core";
import { AbstractStorage } from "src/app/core/storage/interfaces/storage.interface";
import { storageAvailable } from "src/app/core/storage/utils/storage.util";
import { MemoryStorage } from "src/app/core/storage/storages/memory.storage";

@Injectable({ providedIn: "root" })
export class SessionStorage extends AbstractStorage {
  constructor() {
    super(
      storageAvailable("sessionStorage")
        ? window.sessionStorage
        : new MemoryStorage(),
    );
  }
}
