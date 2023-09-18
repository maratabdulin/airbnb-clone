import { PersonDto } from "@app/persons/common";

export const PERSONS_DTO_STUB: PersonDto[] = [
  {
    id: 1,
    lastName: "García",
    firstName: "Carlos",
    middleName: "Antonio",
    buildings: [1, 2],
    phone: "9231002020",
    avatar: "/assets/images/persons/avatar-1.jpg",
    created: "2021-05-11T01:14:42.988Z",
    updated: "2021-05-11T01:14:44.000Z",
  },
  {
    id: 2,
    lastName: "López",
    firstName: "Isabella",
    middleName: "María",
    buildings: [3, 4],
    phone: "9222003030",
    avatar: "/assets/images/persons/avatar-2.jpg",
    created: "2021-05-12T02:20:55.123Z",
    updated: "2021-05-12T02:20:56.000Z",
  },
  {
    id: 3,
    lastName: "Martínez",
    firstName: "Eduardo",
    middleName: "Javier",
    buildings: [5, 6],
    phone: "9213004040",
    avatar: "/assets/images/persons/avatar-3.jpg",
    created: "2021-05-13T03:30:37.456Z",
    updated: "2021-05-13T03:30:38.000Z",
  },
];
