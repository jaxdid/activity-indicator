import React from 'react'
import ReactDOM from 'react-dom'
import ActivityIndicator from './components/ActivityIndicator'

ReactDOM.render(<ActivityIndicator isLoading>
  <div>Loaded!</div>
</ActivityIndicator>, document.getElementById('root'))
