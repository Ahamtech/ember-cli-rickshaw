module.exports = {
  description: 'add rickshaw bower package',
  normalizeEntityName: function() {},
  afterInstall: function(options) {
    return this.addBowerPackageToProject('rickshaw', '1.6.0-rc.0');
  }
};
