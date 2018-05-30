import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ActivityIndicator extends Component {
  render () {
    return this.props.isLoading
      ? null
      : this.props.children
  }
}

ActivityIndicator.propTypes = {
  children: PropTypes.node,
  isLoading: PropTypes.bool
}
