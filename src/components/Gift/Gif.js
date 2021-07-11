import React from 'react';
import PropTypes from 'prop-types';

import './Gif.scss';
import User from '../../images/user.svg';


const Gif = ({ url, user, refData }) => {
    return (
        <div className="gif" ref={refData}>
            <div className="gif__img-container">
                <img alt={user.display_name ? user.display_name : 'No data'} src={url} alt="" />
            </div>

            <div className="gif__user-info">
                <img alt={user.display_name ? user.display_name : 'No data'} src={user.avatar_url ? user.avatar_url : User} alt="" />
                <span className="gif__user-name">
                    {user.display_name ? user.display_name : 'No data'}
                </span>
            </div>
            <span className="gif__animation first"></span>
            <span className="gif__animation second"></span>
            <span className="gif__animation third"></span>
            <span className="gif__animation fourth"></span>
        </div>
    );
};

Gif.propTypes = {
    url: PropTypes.string.isRequired,
    user: PropTypes.object,
    refData: PropTypes.any,
}

Gif.defaultProps = {
    url: '',
    user: {},
    refData: undefined
}

export default Gif;