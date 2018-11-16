import store from '../../store'
import * as Actions from '../../store/Actions.js'
import React, { Component } from 'react'
const buttonStyle = {
    margin: '10px'
}
class Counter extends Component {
    constructor(props) {
        super(props)

        this.onIncrement = this.onIncrement.bind(this)
        this.onDecrement = this.onDecrement.bind(this)
        this.onChange = this.onChange.bind(this)
        this.getOwnState = this.getOwnState.bind(this)

        this.state = this.getOwnState()
    }
    getOwnState() {
        return {
            value: store.getState()[this.props.caption]
        };
    }
    onChange() {
        this.setState(this.getOwnState())
    }
    onIncrement() {
        store.dispatch(Actions.increment(this.props.caption))
    }
    onDecrement() {
        store.dispatch(Actions.decrement(this.props.caption))
    }
    componentDidMount() {
        store.subscribe(this.onChange)
    }
    componentWillUnmount() {
        store.unsubscribe(this.onChange)
    }
    render() {
        const value = this.state.value
        const { caption } = this.props
        return (
            <div>
                <button style={buttonStyle} onClick={this.onIncrement}>+</button>
                <button style={buttonStyle} onClick={this.onDecrement}>-</button>
                <span>{caption} count: {value}</span>
            </div>
        )
    }
}

export default Counter


/**
 * 一个React组件基本上要完成一个两个功能
 * 1. 和Redux Store打交道,读取Store的状态，用于初始化组件的状态,同时还要监听Store的状态改变, 更新组件状态。
 * 
 */