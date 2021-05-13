import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ value, onChange, onSubmit }) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={value} onChange={onChange}/>
                <button>Search</button>
            </form>
        </div>
    );
};

Search.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default Search;
