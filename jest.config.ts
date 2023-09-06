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
  },
};

export default config;
