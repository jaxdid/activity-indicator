import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ActivityIndicator extends Component {
  constructor (props) {
    super(props)

    this.state = {
      shouldDisplayIndicator: false
    }
  }

  componentDidMount () {
    this._timer = setTimeout(() => {
      this.setState({shouldDisplayIndicator: true})
    }, 200)
  }

  render () {
    if (this.props.isLoading) {
      return this.state.shouldDisplayIndicator
        ? <div>Loading...</div>
        : null
    } else {
      return this.props.children
    }
  }
}

ActivityIndicator.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool
}
