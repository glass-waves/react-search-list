import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ value, onChange, onSubmit }) => {
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value />
                <button>Search</button>
            </form>
        </div>
    );
};

Search.propTypes = {};

export default Search;
