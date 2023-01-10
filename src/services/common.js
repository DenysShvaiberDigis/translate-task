import translate from "translate";

translate.engine = "google";
translate.key = import.meta.env.VITE_GOOGLE_KEY;

export const translateText = async (text, from, to) => {
  return translate(text, { from, to });
};
