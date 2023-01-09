import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Input from "../input";
import Spinner from "../spinner";
import SearchIcon from "./icons/search.svg";
import useDebounce from "./hooks/use-debounce";
import styles from "./search.module.scss";

const SearchBar = ({
  onSearch,
  results,
  resultTemplate,
  placeholder,
  isLoading,
  options,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    if (!options.searchOnType) {
      return;
    }

    searchAndExpand(value);
  }, [debouncedValue]);

  // change the key to a unique id
  const defaultResultTemplate = (item, index) => {
    return (
      <li key={`item-${index}`} className={styles["results__item"]}>
        {item.toString()}
      </li>
    );
  };

  const searchAndExpand = (searchValue) => {
    if (searchValue) {
      if (!isExpanded) {
        setIsExpanded(true);
      }
      onSearch?.(searchValue);
    }
  };

  const onInputChanged = (e) => {
    setValue(e.target.value);

    if (isExpanded && !e.target.value) {
      setIsExpanded(false);
    }
  };

  const items = results.map((item) => {
    if (resultTemplate) {
      return resultTemplate(item);
    } else {
      return defaultResultTemplate(item);
    }
  });

  const expandedContent = isLoading ? (
    <Spinner className={styles["spinner"]} />
  ) : (
    items
  );

  const onSearchClicked = () => {
    searchAndExpand(value);
  };

  return (
    <div className={styles["search"]}>
      <Input
        placeholder={placeholder}
        primary
        icon={SearchIcon}
        onChange={onInputChanged}
        onClick={onSearchClicked}
      />
      {isExpanded && (
        <ul className={styles["search__results"]}>{expandedContent}</ul>
      )}
    </div>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onSearch: PropTypes.func,
  resultTemplate: PropTypes.func,
  placeholder: PropTypes.string,
  results: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool,
  options: PropTypes.object,
};

SearchBar.defaultProps = {
  onSearch: null,
  resultTemplate: null,
  placeholder: "",
  results: [],
  isLoading: false,
  options: { searchOnType: true },
};
