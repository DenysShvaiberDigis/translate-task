import { useState } from "react";

import { DropdownItem } from "./DropdownItem/DropdownItem";

import styles from "./Dropdown.module.scss";
import ChevronUpIcon from "../../assets/svgs/ChevronUp.svg";
import ChevronDownIcon from "../../assets/svgs/ChevronDown.svg";

export const Dropdown = ({ options, selectedOption, callback }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const onOptionClick = (selectedValue) => () => {
    callback(selectedValue);
    setDropdownOpen(false);
  };

  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.dropdownHeader} onClick={toggleDropdown}>
        {selectedOption || "Spanish"}

        {isDropdownOpen ? (
          <img src={ChevronUpIcon} height={18} width={18} />
        ) : (
          <img src={ChevronDownIcon} height={18} width={18} />
        )}
      </div>

      {isDropdownOpen && (
        <ul className={styles.dropdownList}>
          {options.map((option) => (
            <DropdownItem
              key={option.value}
              option={option}
              onOptionClick={onOptionClick}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
