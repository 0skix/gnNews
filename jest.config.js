module.exports = {
	testEnvironment: "jest-environment-jsdom",
	moduleNameMapper: {
		"\\.(css|less|scss|sass)$": "identity-obj-proxy",
	},
	setupFilesAfterEnv: ["@testing-library/jest-dom"],
};
