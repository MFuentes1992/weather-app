import React from 'react';
import propTypes from 'prop-types';

const Location = ({ city }) => {
    return(
        <div>
            <h1 className="locationCity">{city}</h1>
        </div>
    );
}
Location.propTypes = {
    city: propTypes.string.isRequired
}
export default Location;