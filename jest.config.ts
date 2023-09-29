import type { Config } from "jest";

const config: Config = {
  preset: "jest-preset-angular",
  setupFilesAfterEnv: ["<rootDir>/src/test-setup.ts"],
  transform: {
    "\\.(html|svg)$": "ts-jest",
  },
  coverageDirectory: "coverage",
  snapshotSerializers: [
    "jest-preset-angular/build/serializers/no-ng-attributes",
    "jest-preset-angular/build/serializers/ng-snapshot",
    "jest-preset-angular/build/serializers/html-comment",
  ],
  testRunner: "jest-jasmine2",
  moduleNameMapper: {
    "@app/ui/theme/layout": ["<rootDir>/src/app/ui/theme/layout/index.ts"],
    "@app/ui/icons": ["<rootDir>/src/app/ui/icons/index.ts"],
    "@app/core/common": ["<rootDir>/src/app/core/common/index.ts"],
    "@app/core/logger": ["<rootDir>/src/app/core/logger/index.ts"],
    "@app/core/testing": ["<rootDir>/src/app/core/testing/index.ts"],
    "@app/core/storage": ["<rootDir>/src/app/core/storage/index.ts"],
    "@app/core/store/utils": ["<rootDir>/src/app/core/store/utils/index.ts"],
    "@app/core/environments": ["<rootDir>/src/app/core/environments/index.ts"],
    "@app/rooms/common": ["<rootDir>/src/app/rooms/common/index.ts"],
    "@app/rooms/storage": ["<rootDir>/src/app/rooms/storage/index.ts"],
    "@app/rooms/state": ["<rootDir>/src/app/rooms/state/index.ts"],
    "@app/buildings/common": ["<rootDir>/src/app/buildings/common/index.ts"],
    "@app/buildings/storage": ["<rootDir>/src/app/buildings/storage/index.ts"],
    "@app/buildings/state": ["<rootDir>/src/app/buildings/state/index.ts"],
    "@app/persons/common": ["<rootDir>/src/app/persons/common/index.ts"],
    "@app/persons/storage": ["<rootDir>/src/app/persons/storage/index.ts"],
    "@app/persons/state": ["<rootDir>/src/app/persons/state/index.ts"],
  },
};

export default config;
