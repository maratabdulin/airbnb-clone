import { map, Observable, ReplaySubject } from "rxjs";

export interface AsyncStorage {
  readonly storage: Storage;
  readonly state$: Observable<Record<string, any>>;

  getItem<T>(key: string): Observable<T>;
  setItem<T>(key: string, value: T): void;
  removeItem(key: string): void;
  clear(): void;
}

export const STORAGE_KEY = "AIR_BNB_CLONE";

export abstract class AbstractStorage implements AsyncStorage {
  readonly state$ = new ReplaySubject<Record<string, any>>(1);

  protected key = STORAGE_KEY;
  protected state!: Record<string, any>;

  protected constructor(public readonly storage: Storage) {
    this.setState(this.getLocalState());
  }

  get length(): number {
    return this.state ? Object.keys(this.state).length : 0;
  }

  clear() {
    this.setState({});
  }

  getItem<T = any>(key: string): Observable<T> {
    return this.state$.pipe(
      map((state) => (state.hasOwnProperty(key) ? state[key] : null)),
    );
  }

  removeItem(key: string) {
    if (key in this.state) {
      delete this.state[key];
      this.setState({ ...this.state });
    }
  }

  setItem<T = any>(key: string, value: T) {
    this.setState({ ...this.state, [key]: value });
  }

  protected setState(state: Record<string, any>): void {
    try {
      this.storage.setItem(this.key, JSON.stringify(state));
    } catch (error) {
      console.log(error);
    }
  }

  protected getLocalState(): Record<string, any> {
    const state = this.storage.getItem(this.key);
    return state ? JSON.parse(state) : {};
  }
}
