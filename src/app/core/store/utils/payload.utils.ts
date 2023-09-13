import { ActionCreatorProps, props } from "@ngrx/store";

export function payload<P>(): ActionCreatorProps<{ payload: P }> {
  return props<{ payload: P }>();
}

export function payloadOptional<P>(): ActionCreatorProps<{ payload: P }> {
  return props<{ payload: P }>();
}
