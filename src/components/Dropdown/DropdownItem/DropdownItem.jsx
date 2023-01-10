import styles from './DropdownItem.module.scss';

export const DropdownItem = ({ option, onOptionClick }) => {
  return (
    <li
      onClick={onOptionClick(option)}
      className={styles.listItem}
    >
      {option.label}
    </li>
  );
};
