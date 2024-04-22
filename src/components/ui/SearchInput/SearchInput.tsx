import { useEffect, useRef } from "react";

type SearchInputProps = {
  onChange: (searchTerm: string) => void;
};

/**
 * A search input component that triggers a onChange callback when the input changes
 */
const SearchInput: React.FC<SearchInputProps> = ({ onChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "/") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    <input
      ref={inputRef}
      id="search-input"
      className="h-10 w-full max-w-sm rounded-md border px-3 py-2 text-sm text-black focus:ring-2"
      placeholder="Filter podcasts..."
      type="text"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchInput;
