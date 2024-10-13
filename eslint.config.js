// @ts-check
const eslint = require("@eslint/js");
const tseslint = require("typescript-eslint");
const angular = require("angular-eslint");

module.exports = tseslint.config(
	{
		files: ["**/*.ts"],
		extends: [
			eslint.configs.recommended,
			...tseslint.configs.recommended,
			...tseslint.configs.stylistic,
			...angular.configs.tsRecommended
		],
		processor: angular.processInlineTemplates,
		rules: {
			"@angular-eslint/directive-selector": [
				"off",
				{
					"type": "attribute",
					"prefix": "app",
					"style": "camelCase"
				}
			],
			"@angular-eslint/component-selector": [
				"off",
				{
					"type": "element",
					"prefix": "app",
					"style": "kebab-case"
				}
			],
			"@angular-eslint/no-output-native": "off",
			"@angular-eslint/no-output-rename": "off",
			"@angular-eslint/no-output-on-prefix": "off",
			"@angular-eslint/component-class-suffix": "off",
			"@angular-eslint/no-host-metadata-property": "off",
			"@typescript-eslint/no-unused-vars": "off",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-inferrable-types": "off",
			"@typescript-eslint/ban-types": "off",
			"@typescript-eslint/no-this-alias": "off",
			"@typescript-eslint/no-non-null-assertion": "off",
      		"@typescript-eslint/no-wrapper-object-types": "off",
			"@typescript-eslint/consistent-type-assertions": "off",
			"@angular-eslint/no-empty-lifecycle-method": "off",
			"semi": ["error", "always"],
			"no-console": "off",
			"prefer-spread": "off",
			"prefer-rest-params": "error",
			"no-useless-escape": "off",
			"no-prototype-builtins": "off"
		}
	},
	{
		files: ["**/*.html"],
		extends: [
			...angular.configs.templateRecommended,
			...angular.configs.templateAccessibility
		],
		rules: {}
	}
);