module.exports = {
  bracketSpacing: true,
  tabWidth: 2,
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'all',
  useTabs: false,
  semi: true,
  arrowParens: 'avoid',
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      options: {
        parser: 'typescript',
      },
    },
    {
      files: ['*.md', '*.json', '*.yaml', '*.yml'],
      options: {
        tabWidth: 2,
      },
    },
  ],
};
