export const USER_CREATION_ADDRESS = '0x6c75b08BD534Be6Beee720e604a33Fbb70DCfD8e'

export const USER_CREATION_ABI = [
  {
    "constant": true,
    "inputs": [],
    "name": "userCount",
    "outputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "name": "",
        "type": "uint256"
      }
    ],
    "name": "users",
    "outputs": [
      {
        "name": "account",
        "type": "string"
      },
      {
        "name": "username",
        "type": "string"
      },
      {
        "name": "completed",
        "type": "bool"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "name": "account",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "username",
        "type": "string"
      },
      {
        "indexed": false,
        "name": "completed",
        "type": "bool"
      }
    ],
    "name": "UserCreated",
    "type": "event"
  },
  {
    "constant": false,
    "inputs": [
      {
        "name": "_account",
        "type": "string"
      },
      {
        "name": "_username",
        "type": "string"
      }
    ],
    "name": "createUser",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  }
]