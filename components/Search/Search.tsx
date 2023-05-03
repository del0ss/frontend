import React, {useState} from 'react';
import {SearchProps} from "./Search.props";
import styles from './Search.module.css';

const Search = ({children, ...props}: SearchProps) : JSX.Element => {
   const [search, setSearch] = useState("")
    return (
        <div className={styles.search}>
            <input
                className={styles.input}
                value={search}

                placeholder="Найти пиццу..."
                onChange={e => setSearch(e.target.value)}
            />
        </div>
    );
};

export default Search;