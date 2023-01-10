import { useEffect, useState } from "react";

import { TranslationBlock } from "./TranslationBlock/TranslationBlock";
import { translateText } from "../../services/common";
import { useDebounce } from "../../hooks/useDebounce";

import styles from "./Translate.module.scss";

const translateOptions = [
  { label: "English", value: "en" },
  { label: "Spanish", value: "es" },
  { label: "Japanese", value: "ja" },
  { label: "German", value: "de" },
];

export const Translate = () => {
  const [enteredText, setEnteredText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [translateFrom, setTranslateFrom] = useState({
    label: "English",
    value: "en",
  });
  const [translateTo, setTranslateTo] = useState({
    label: "Spanish",
    value: "es",
  });

  const debouncedValue = useDebounce(enteredText, 400);

  useEffect(() => {
    if (debouncedValue) {
      const handleTranslate = async () => {
        const translation = await translateText(
          debouncedValue,
          translateFrom.value,
          translateTo.value
        );
        setTranslatedText(translation);
      };

      handleTranslate();
    } else {
      setTranslatedText("");
    }
  }, [debouncedValue, translateTo.value, translateFrom.value]);

  const handleChange = (event) => {
    setEnteredText(event.target.value);
  };

  const clearEnteredValue = () => {
    setEnteredText("");
  };

  const onTranslateFromClick = (language) => {
    setTranslateFrom(language);
  };

  const onTranslateToClick = (language) => {
    setTranslateTo(language);
  };

  return (
    <div className={styles.translator}>
      <TranslationBlock
        heading="Text for translation"
        value={enteredText}
        onChange={handleChange}
        translateOptions={translateOptions}
        dropdownCallback={onTranslateFromClick}
        onClear={clearEnteredValue}
        placeholder="Enter text to translate"
        selectedOption={translateFrom.label}
        withIcon
      />

      <TranslationBlock
        heading="Translation"
        value={translatedText}
        translateOptions={translateOptions}
        dropdownCallback={onTranslateToClick}
        selectedOption={translateTo.label}
        readOnly
      />
    </div>
  );
};
