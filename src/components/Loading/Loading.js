import React from 'react';
import PropTypes from 'prop-types';

import './Loading.scss';

const Loading = ({ loading }) => {
    return (
        <>{loading && <ul data-testid="loading" className="loading">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>}</>
    );
};

Loading.propTypes = {
    loading: PropTypes.bool.isRequired
}

Loading.defaultProps = {
    loading: false
}


export default Loading;