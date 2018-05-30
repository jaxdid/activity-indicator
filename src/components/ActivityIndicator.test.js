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

  describe('when isLoading is true', () => {
    describe('given that 200ms have not yet passed', () => {
      it('should render nothing', () => {
        const wrapper = mount(
          <ActivityIndicator isLoading>
            <div>Hello</div>
          </ActivityIndicator>
        )
        expect(wrapper.html()).toBe(null)
        wrapper.unmount()
      })
    })

    describe('given that 200ms have passed', () => {
      it('should render activity indicator', () => {
        jest.useFakeTimers()
        const wrapper = mount(
          <ActivityIndicator isLoading>
            <div>Hello</div>
          </ActivityIndicator>
        )

        expect(setTimeout.mock.calls.length).toEqual(1)
        expect(setTimeout.mock.calls[0][1]).toEqual(200)

        jest.runAllTimers()
        expect(wrapper.html()).toEqual('<div>Loading...</div>')
        wrapper.unmount()
      })
    })
  })
})
