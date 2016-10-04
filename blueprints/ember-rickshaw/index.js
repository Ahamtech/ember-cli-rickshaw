module.exports = {
  description: 'add rickshaw bower package',
  normalizeEntityName: function() {},
  beforeInstall: function(options) {
    return this.addBowerPackageToProject('rickshaw', '1.5.10');
  }
};
