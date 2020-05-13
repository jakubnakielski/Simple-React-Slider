import React from 'react';
import PropTypes from 'prop-types';
import styles from './Slider.module.scss';

const Slider = ({ image }) => (
    <div className={styles.sliderWrapper}>
        <img
            className={styles.image}
            src={image}
            alt=""
        />
    </div>
);

export default Slider;

Slider.propTypes = {
    image: PropTypes.string.isRequired,
}