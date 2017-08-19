import React from 'react';

class PlayerWaitingForPlayersScreen extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div id="playerWaitingForPlayersScreen">

        <h2> Waiting for Players </h2>

        <ul>
          {this.props.players.map((player, index)=>{
            return (<li key={index}>{player}</li>)
          })}
        </ul>

        <p className="waitMessage"> Patience is a virtue.....</p>
        <div className="playerWaitingForPlayersScreenInput">
          <button className="leaveButton" onClick={this.props.leaveButtonClickHandler}>
            {'Leave'}
          </button>
        </div>

      </div>
      )}
}

export default PlayerWaitingForPlayersScreen;
