// import React, { Component } from 'react'
// import PropTypes from 'prop-types'
// import { connect } from 'react-redux'
// import { addTodo } from '../actions.js'


// class AddTodo extends Component {
//     constructor(props, context) {
//         super(props, context);
//         this.onSubmit = this.onSubmit.bind(this);
//         this.refInput = this.refInput.bind(this)
//     }
//     onSubmit(ev) {
//         ev.preventDefault();
//         const input = this.input;
//         if (!input.value.trim()) {
//             return
//         }
//         this.props.onAdd(input.value)
//         input.value = ''
//     }
//     refInput(node) {
//         this.input = node
//     }
//     getOwnState() {
//         const state = this.context.store.getState();
//         let sum = 0;
//         for (const key in state) {
//             if (state.hasOwnProperty(key)) {
//                 sum += state[key];
//             }
//         }

//         return { sum: sum };
//     }
//     render() {
//         return (
//             <div className="add-todo">
//                 <form onSubmit={this.onSubmit}>
//                     <input className="new-todo" ref={this.refInput} />
//                     <button className="add-btn" type="submit">添加</button>
//                 </form>
//             </div>
//         )
//     }

// }
// AddTodo.PropTypes = {
//     onAdd: PropTypes.func.isRequired
// }
// const mapDispatchToProps = (dispatch) => {
//     return {
//         onAdd: (text) => {
//             dispatch(addTodo(text))
//         }
//     }
// }

// export default connect(null, mapDispatchToProps)(AddTodo)



import React, { Component } from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

import { addTodo } from '../actions.js';

class AddTodo extends Component {

    constructor(props, context) {
        super(props, context);

        this.onSubmit = this.onSubmit.bind(this);
        this.refInput = this.refInput.bind(this);
    }

    onSubmit(ev) {
        ev.preventDefault();

        const input = this.input;
        if (!input.value.trim()) {
            return;
        }
        this.props.onAdd(input.value);
        input.value = '';
    }

    refInput(node) {
        this.input = node;
    }

    render() {
        return (
            <div className="add-todo">
                <form onSubmit={this.onSubmit}>
                    <input className="new-todo" ref={this.refInput} />
                    <button className="add-btn" type="submit">
                        添加
          </button>
                </form>
            </div>
        )
    }
}

AddTodo.propTypes = {
    onAdd: PropTypes.func.isRequired
};


const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (text) => {
            dispatch(addTodo(text));
        }
    }
};

export default connect(null, mapDispatchToProps)(AddTodo);

