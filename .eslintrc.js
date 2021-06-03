module.exports = {
  extends: ["@humanoids/eslint-config", "plugin:cypress/recommended"],
  rules: {
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
  },
  env: {
    jest: true,
  },
};
