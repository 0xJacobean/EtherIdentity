import React, { Component } from 'react'

class Registrar extends Component {

  render() {
    return (
      <div id="content">
        <form onSubmit={(event) => {
          event.preventDefault()
          this.props.createUser(this.user.value)
        }}>
          <input
            id="newUser"
            ref={(input) => {
              this.user = input
            }}
            type="text"
            className="form-control"
            placeholder="Pick Username..."
            required />
          <input type="submit" hidden={true} />
        </form>
        <ul id="users" className="list-unstyled">
          { this.props.users.map((user, key) => {
            return(
              <div className="userTemplate" className="checkbox" key={key}>
                <li><label>
                  <span className="content">{user.username}</span>
                </label>
                </li>
                <li><label style={{fontSize: '10px'}}>
                  <span className="content">{user.account}</span>
                </label></li>
              </div>
            )
          })}
        </ul>
        {/* <ul id="completedTaskList" className="list-unstyled">
        </ul> */}
      </div>
    );
  }
}

export default Registrar;
