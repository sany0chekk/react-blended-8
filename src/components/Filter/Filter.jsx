import React from "react";
import { CiSearch } from "react-icons/ci";
import styles from "./Filter.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  filteredComents,
  selectFilteredComents,
} from "../../redux/filterSlice";

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(filteredComents(event.target.value));
  };

  return (
    <div className={styles.search}>
      <div className={styles.searchWrapper}>
        <CiSearch className={styles.searchIcon} />

        <input
          className={styles.searchInput}
          type="text"
          id="search"
          placeholder="Search something.."
          onChange={handleChange}
        />
      </div>
    </div>
  );
};
