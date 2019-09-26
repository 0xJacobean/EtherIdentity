# EtherIdentity

![Demonstration Gif](https://github.com/jsmellz/EtherIdentity/blob/master/ether_identity_demo.gif)

This Dapp was an experiment in attaching identity to ethereum accounts. When a user enters a new username it is mapped to their public key within the smart contract. Notice that in the gif, once the user enters a username it appears below with the corresponding address as well as simultaneously on the right side of the navbar. This list of usernames and addresses can grow with each new user added acting kind of like an ethereum registry. However, the username which appears on the top right of the navbar is unique to the user that is signed in and would appear anytime they open this dapp. This illustrates how an identity service, such as this one, could be used to keep a user signed in across a variety of dapps based solely on their current metamask account.

Users can also overwrite their usernames easily just by entering a different name in the form. 

Must run npm install on React and Smart Contract repo seperately. I have the smart contract setup to run on Ganache at HTTP://127.0.0.1:7545. HMU if you have questions.

Some packages seem to have vulnerabilites which I've ignored for my purposes. Be aware of this if used for production ready dapps. 
