/* eslint-env jest */

import React from 'react'
import ReactDOM from 'react-dom'
import '../configureTests'
import { mount } from 'enzyme'
import ActivityIndicator from './ActivityIndicator'

describe('ActivityIndicator', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ActivityIndicator isLoading />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  describe('when isLoading is false', () => {
    it('should render children', () => {
      const wrapper = mount(
        <ActivityIndicator isLoading={false}>
          <div>Hello</div>
        </ActivityIndicator>
      )
      expect(wrapper.html()).toEqual('<div>Hello</div>')
      wrapper.unmount()
    })
  })
})
