let LinkToken = artifacts.require('LinkToken');

module.exports = async (deployer) => {
  await deployer.deploy(LinkToken);
};
