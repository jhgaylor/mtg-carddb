Package.describe({
  name: 'mtg:carddb',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.3');
  api.use('mongo');
  api.use('underscore');
  api.use('aldeed:collection2@2.5.0');
  api.use('aldeed:simple-schema');
  api.use('dburles:collection-helpers@1.0.0');
  api.use('mtg:json');
  api.addFiles('Cards.js');
  api.addFiles('carddb.js');
  api.export('MTGCard');
  api.export('MTGCardSchema');
  api.export('MTGCards');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('mtg:carddb');
  api.addFiles('carddb-tests.js');
});
