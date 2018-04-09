const YosokuToken = artifacts.require('YosokuToken');

contract('YosokuToken', function (accounts) {
  let contract;

  before(async () => {
    contract = await YosokuToken.new();
  });

  it('name is Yosoku Token', async () => {
    const expect = 'Yosoku Token';
    const actual = await contract.name();

    assert.equal(actual, expect);
  });
});
