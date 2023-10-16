// @ts-ignore
export interface MapMarkerConfig<T = any> extends google.maps.LatLngLiteral {
  // @ts-ignore
  label?: string | google.maps.MarkerLabel | null;
  data: T;
}
