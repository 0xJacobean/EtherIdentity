pragma solidity ^0.5.0;

contract Identity {
  uint public userCount = 0;

  struct User {
    string account;
    string username;
    bool completed;
  }

  mapping(uint => User) public users;

  event UserCreated(
    string account,
    string username,
    bool completed
  );

  constructor() public {
  }

  function createUser(string memory _account, string memory _username) public {

    uint id = 0;
    bool exists = false; 

    for (uint i=0; i<userCount; i++) {
      // if user already exists overwrite username
       if(keccak256(abi.encodePacked(users[i].account)) == keccak256(abi.encodePacked(_account))) {
          // users[i] = User(_account, _username, false);
          exists = true;
          id = 0;
        } 
    }

    if(exists == true) {
      users[id] = User(_account, _username, false);
    } else {
      userCount ++;
      users[userCount] = User(_account, _username, false);
    }
    
    emit UserCreated(_account, _username, false);
   
  }
// keccak256(abi.encodePacked(users[i].account)) == keccak256(abi.encodePacked(_account))
}
