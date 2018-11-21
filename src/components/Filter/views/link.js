import React from 'react';
import { connect } from 'react-redux';
import { setFilter } from '../actions.js'
import PropTypes from 'prop-types'
const Link = ({ active, children, onClick }) => {
    if (active) {
        return <b className="filter selected">{children}</b>;
    } else {
        return (
            <a href="www.baidu.com" className="filter not-selected" onClick={(ev) => { ev.preventDefault(); onClick(); }}>{children}</a>
        )
    }
}


Link.propTypes = {
    active: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
};

const mapSateToProps = (state, ownProps) => {
    return {
        active: state.filter === ownProps.filter
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch(setFilter(ownProps.filter))
    }
})

export default connect(mapSateToProps, mapDispatchToProps)(Link)