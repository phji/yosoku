pragma solidity ^0.4.21;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";


contract Migrations is Ownable {
    uint256 public lastCompletedMigration;

    function setCompleted(uint256 completed) onlyOwner public {
        lastCompletedMigration = completed;
    }

    function upgrade(address newAddress) onlyOwner public {
        Migrations upgraded = Migrations(newAddress);
        upgraded.setCompleted(lastCompletedMigration);
    }
}
