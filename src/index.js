import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import RaisedButton from 'material-ui/RaisedButton';

class Square extends React.Component {
  /* state managed by parent Board component */
  render() {
    return (
      <button className="square" onClick={ () => this.props.toggleSquare() }>
        {this.props.value}
      </button>
    );
  }
}


class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
    }
  }

  handleToggle(i) {
    const squares = this.state.squares.slice();
    /* slice is to make a copy of the array */    
    squares[i] = 'X';
    this.setState( {squares: squares} )
  }

  /* used in JSX below {this.renderSquare(0)} */
  renderSquare(i) {
    return (
      <Square 
        value={this.state.squares[i]}
        toggleSquare={() => this.handleToggle(i)}
      />
    );
  }

  render() {
    const status = 'Next player: X';

    return (
      <div className="board-status-container">
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        {/* </div>
        <div className="board-row"> */}
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        {/* </div>
        <div className="board-row"> */}
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}


  // ========================================
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  
