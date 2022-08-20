import React from 'react'
import Display from './components/display/Display'
import './App.css'
import Button from './components/buttons/Button'
const numbers = ['C', 'del', '%', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '=']
class App extends React.Component {
  state = {
    sumOperation: '0',
    numbersOperation: []
  }

  addNumber = (e) => {
    const specOpr = ['C', '=', 'del']
    if (e.target.innerText === '=') {
      this.calculate()
    }
    if (e.target.innerText === 'C') {
      this.setState({
        sumOperation: '0'
      })
      // eslint-disable-next-line react/no-direct-mutation-state
      this.state.numbersOperation.length = 0
    }
    if (e.target.innerText === 'del') {
      this.setState({
        numbersOperation: this.state.numbersOperation.slice(0, -1)
      })
    }
    if (e.target.innerText && !specOpr.includes(e.target.innerText)) {
      this.state.numbersOperation.push(e.target.innerText)
      this.setState({ numbersOperation: this.state.numbersOperation })
    }
  }

  calculate () {
    // eslint-disable-next-line no-eval
    const operation = eval(this.state.numbersOperation.join(''))
    this.setState({
      sumOperation: operation.toString()
    })
  }

  render () {
    return (
      <div className={' container '}>
        <Display
          operation={this.state.numbersOperation}
          // eslint-disable-next-line no-eval
          result={this.state.sumOperation}
        />
        <div className={'keyboard'}>
          {numbers.map((nr, index) => {
            return (
              <Button
                key={index}
                label={nr}
                onClick={this.addNumber}
              />
            )
          })
        }
        </div>
      </div>
    )
  }
}
export default App
