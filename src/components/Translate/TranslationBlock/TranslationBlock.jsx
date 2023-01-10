import { Dropdown } from "../../Dropdown/Dropdown";

import styles from "./TranslationBlock.module.scss";
import CloseIcon from "../../../assets/svgs/Close.svg";

export const TranslationBlock = ({
  value,
  heading,
  translateOptions,
  selectedOption,
  placeholder,
  dropdownCallback,
  withIcon,
  readOnly,
  onClear,
  rows = 10,
  onChange = Function,
}) => {
  return (
    <div className={styles.translationBlock}>
      <div className={styles.translateHeading}>
        <h2>{heading}</h2>

        <Dropdown
          options={translateOptions}
          selectedOption={selectedOption}
          callback={dropdownCallback}
        />
      </div>

      <div className={styles.inputField}>
        <textarea
          className={styles.textBlock}
          value={value}
          rows={rows}
          onChange={onChange}
          placeholder={placeholder}
          readOnly={readOnly}
        />

        {value.length > 0 && withIcon && (
          <img
            className={styles.closeIcon}
            src={CloseIcon}
            width={26}
            height={26}
            onClick={onClear}
          />
        )}
      </div>
    </div>
  );
};
