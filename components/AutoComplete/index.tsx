import { useState } from "react";
import Input from "../Input";

const SuggestionsList = (props: any) => {
  const {
    suggestions,
    inputValue,
    onSelectSuggestion,
    displaySuggestions,
    selectedSuggestion,
  } = props;

  if (inputValue && displaySuggestions) {
    if (suggestions.length > 0) {
      return (
        <ul className='list-none p-0  overflow-y-auto max-w-250 border-2 border-gray-500 rounded-2xl'>
          {suggestions.map((suggestion: any, index: number) => {
            const isSelected = selectedSuggestion === index;
            const classname = ` p-2 text-gray-700 cursor-pointer ${
              isSelected ? "bg-gray-200 text-black" : ""
            }`;
            return (
              <li
                key={index}
                className={classname}
                onClick={() => onSelectSuggestion(index)}
              >
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    } else {
      return <div>No suggestions available...</div>;
    }
  }
  return <></>;
};
type Prop = {
  list: string[];
  placeholder: string;
  htmlFor: string;
  label: string;
};
export const Autocomplete = ({ list, placeholder, htmlFor, label }: Prop) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState<any>([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState(0);
  const [displaySuggestions, setDisplaySuggestions] = useState(false);

  const onChange = (event: any) => {
    const value = event.target.value;
    setInputValue(value);

    const filteredSuggestions = list.filter((suggestion) =>
      suggestion.toLowerCase().includes(value.toLowerCase())
    );

    setFilteredSuggestions(filteredSuggestions);
    setDisplaySuggestions(true);
  };

  const onSelectSuggestion = (index: number) => {
    setSelectedSuggestion(index);
    setInputValue(filteredSuggestions[index]);
    setFilteredSuggestions([]);
    setDisplaySuggestions(false);
  };

  return (
    <div>
      <Input
        value={inputValue}
        onChange={onChange}
        placeholder={placeholder}
        htmlFor={htmlFor}
        label={label}
        type={"type"}
      />
      <SuggestionsList
        inputValue={inputValue}
        selectedSuggestion={selectedSuggestion}
        onSelectSuggestion={onSelectSuggestion}
        displaySuggestions={displaySuggestions}
        suggestions={filteredSuggestions}
      />
    </div>
  );
};
