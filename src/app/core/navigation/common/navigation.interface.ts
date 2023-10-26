export enum NavigationPath {
  HOME = "",
  ROOMS = "rooms",
  BUILDINGS = "buildings",
  PERSONS = "persons",
  ROOM_PAGE = "rooms/:id",
  ADMIN = "admin",
  ADMIN_ROOM_PAGE = "admin/rooms",
  ADMIN_BUILDINGS_PAGE = "admin/buildings",
}

export interface NavigationLink {
  route: NavigationPath;
  label: string;
  params?: Record<string, any>;
}
