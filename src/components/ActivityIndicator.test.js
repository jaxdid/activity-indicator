/* eslint-env jest */

import React from 'react'
import ReactDOM from 'react-dom'
import ActivityIndicator from './ActivityIndicator'

describe('ActivityIndicator', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ActivityIndicator />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
