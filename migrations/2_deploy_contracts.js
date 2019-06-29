const Migrations = artifacts.require("FormSubmit");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
