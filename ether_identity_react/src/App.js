import React, { Component } from 'react'
import Web3 from 'web3'
import './App.css'
import { USER_CREATION_ABI, USER_CREATION_ADDRESS } from './config'
import Registrar from './Registrar'

class App extends Component {
  componentWillMount() {
    this.loadBlockchainData()
  }

  async loadBlockchainData() {

    this.setState({
      username: '',
      account: '',
      userCount: 0,
      users: [],
      loading: true
    })

    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545")
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const identity = new web3.eth.Contract(USER_CREATION_ABI, USER_CREATION_ADDRESS)
    this.setState({ identity })
    const userCount = await identity.methods.userCount().call()
    this.setState({ userCount })
    for (var i = 1; i <= userCount; i++) {
      const user = await identity.methods.users(i).call()
      this.setState({
        users: [...this.state.users, user]
      })
      
      if (user.account === this.state.account) {
        this.state.username = user.username
      }
      
    }
    this.setState({ loading: false })
  }

  constructor(props) {
    super(props)
    this.state = {
      username: 'hello',
      account: '',
      userCount: 0,
      users: [],
      loading: true
    }

    this.createUser = this.createUser.bind(this)
    // this.toggleCompleted = this.toggleCompleted.bind(this)
  }

  createUser(content) {
    this.setState({ loading: true })
    const identity = this.state.account + content
    this.state.identity.methods.createUser(this.state.account, content).send({ from: this.state.account })
    .once('receipt', (receipt) => {
      this.loadBlockchainData()
      this.setState({ loading: false })
    })
  }

  // toggleCompleted(userId) {
  //   this.setState({ loading: true })
  //   console.log("ID", userId)
  //   this.state.todoList.methods.toggleCompleted(userId).send({ from: this.state.account })
  //   .once('receipt', (receipt) => {
  //     this.setState({ loading: false })
  //   })
  // }

  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="" target="_blank">Ether Identity </a>
          <ul className="navbar-nav px-3">
            <li className="nav-item text-nowrap d-none d-sm-none d-sm-block">
              <small><a className="nav-link" href="#"><span id="account">{this.state.username}</span></a></small>
            </li>
          </ul>
        </nav>
        <div className="container-fluid">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex justify-content-center">
              { this.state.loading
                ? <div id="loader" className="text-center"><p className="text-center">Loading...</p></div>
                : <Registrar
                  users={this.state.users}
                  createUser={this.createUser}/>
              }
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
