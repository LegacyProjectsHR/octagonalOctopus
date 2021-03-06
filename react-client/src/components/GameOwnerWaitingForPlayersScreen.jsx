import React from 'react';

class GameOwnerWaitingForPlayersScreen extends React.Component {

  constructor(props) {
    super(props);
    this.startGame = this.startGame.bind(this);
    this.leaveGame = this.leaveGame.bind(this); 
  }

  startGame() {
    if (this.props.players.length < 5 || this.props.players.length > 10) {
      alert('We can only accomodate 5-10 player games! Sowwy!');
    } else{
      this.props.socket.emit('start game', {roomname: this.props.accessCode});
    }
  }

  leaveGame() {
    this.props.socket.emit('player left', {roomname: this.props.accessCode});
  }



  render() {

    return (
      <div id="gameOwnerWaitingForPlayersScreen">

        <h2> Waiting for Players </h2>

        <p id="accessCode">
        Access Code: {this.props.accessCode}
        </p>
        <ul>
        {this.props.players.map((player, index)=>{
          return (<li key={index}>{player}</li>)
        })}
        </ul>

        <p className="waitMessage"> Patience is a virtue.....</p>
        <div className="gameOwnerWaitingForPlayersScreenInput">
          <button onClick={this.leaveGame}>
            {'Leave'}
          </button>


          <button onClick={this.startGame}>
            {'Start'}
          </button>
        </div>

      </div>
    )
  }
}

export default GameOwnerWaitingForPlayersScreen;
