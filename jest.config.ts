export default {
	clearMocks: true,

	globals : {
		__IS_DEV__:true
	},

	moduleDirectories: ["node_modules", "src"],

	moduleFileExtensions: [
		"js",
		"mjs",
		"cjs",
		"jsx",
		"ts",
		"tsx",
		"json",
		"node",
	],

	testEnvironment: "jsdom",

	testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],

	testPathIgnorePatterns: ["/node_modules/"],

	moduleNameMapper: {
		"\\.(scss)$": "identity-obj-proxy",
		"\\.svg": "<rootDir>/__mocks__/svg.ts"
	},
	setupFilesAfterEnv: ["<rootDir>/setupTest.ts"]
}