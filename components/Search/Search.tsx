import React, {useCallback, useState} from 'react';
import debounce from "lodash.debounce"
import {SearchProps} from "./Search.props";
import styles from './Search.module.css';

const Search = ({children, ...props}: SearchProps): JSX.Element => {
    const [value, setValue] = useState("")
    const [_, setSearch] = useState("")

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const updateSearchValue = useCallback(
        debounce((str) => {
            setSearch(str)
            console.log(str)
        }, 300),
        []
    )
    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>)  => {
        setValue(event.target.value)
        updateSearchValue(event.target.value)
    }
    return (
        <div className={styles.search}>
            <input
                className={styles.input}
                value={value}
                placeholder="Найти пиццу..."
                onChange={onChangeInput}
            />
        </div>
    );
};

export default Search;