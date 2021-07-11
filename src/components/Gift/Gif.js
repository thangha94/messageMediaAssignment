import React from 'react';
import PropTypes from 'prop-types';

import './Gif.scss';
import User from '../../images/user.svg';

const Gif = ({ data, refData, gifClass, onClick, closeImage }) => {
    const onCloseImage = (e) => {
        e.stopPropagation();
        closeImage();
    }
    return (
        <div onClick={onClick} className={`gif ${gifClass}`} ref={refData}>
            <div className="gif__img-container">
                <span className="close-btn" onClick={onCloseImage}></span>
                <img alt={data.user ? data.user.display_name : 'No data'} src={data.url} alt="" />
            </div>

            <div className="gif__user-info">
                <img alt={data.user ? data.user.display_name : 'No data'} src={data.user ? data.user.avatar_url : User} alt="" />
                <span className="gif__user-name">
                    {data.user ? data.user.display_name : 'No data'}
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
    data: PropTypes.object,
    refData: PropTypes.any,
    gifClass: PropTypes.string,
    onClick: PropTypes.func,
    closeImage: PropTypes.func,
}

Gif.defaultProps = {
    data: {},
    refData: undefined,
    gifClass: '',
}

export default Gif;