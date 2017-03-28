import dictionary from 'json!./../i18n/ru.json';

export default (text) => {
  const dictionary = Context.dictionary;
  if (dictionary[text]) {
    return dictionary[text];
  }
  return text;
}
