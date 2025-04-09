module.exports = {
  "*.{js,ts,jsx,tsx}": [
    "biome check --write",
    "biome format --write"
  ]
};
