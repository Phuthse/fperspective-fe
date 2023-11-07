import React, { useState, useRef, useEffect } from "react";
import "./create-blog-tags.css";
import Tag from "../../../model/tag";
import { tagApi } from "../../../config/axios";

interface CreateBlogTagsProps {
  setTags: (tags: Tag[]) => void;
  uri: string;
}

const CreateBlogTags: React.FC<CreateBlogTagsProps> = ({ setTags, uri }) => {
  const [btags, setBTags] = useState<Tag[]>([]);
  const [filteredOptions, setFilteredOptions] = useState<Tag[]>([]);

  const fetchBTagData = async () => {
    const response = await tagApi.get(uri, { withCredentials: true });
    setBTags(response.data);
    setFilteredOptions(response.data);
  };

  useEffect(() => {
    fetchBTagData();
  }, [uri]);

  const [tags, setTagsState] = useState<Tag[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [placeholder, setPlaceholder] = useState<string>("Add up to 4 tags");
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const optionsRef = useRef<HTMLUListElement | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    filterOptions(value);
  };

  const filterOptions = (filterText: string) => {
    // Filter options based on the filterText
    const filtered = btags.filter((option) =>
      option.tagName.toLowerCase().includes(filterText.toLowerCase())
    );

    setFilteredOptions(filtered);
  };

  const handleOptionClick = (option: Tag, event: React.MouseEvent) => {
    if (tags.length < 4 && !tags.includes(option)) {
      const updatedTags = [...tags, option];
      setTags(updatedTags);
      setTagsState(updatedTags);
      setInputValue("");
      setFilteredOptions(btags); // Reset the filtered options
      if (tags.length === 3) {
        setPlaceholder("Max tags reached");
      } else if (tags.length === -1) {
        setPlaceholder("Add up to 4 tags");
      } else {
        setPlaceholder("Add another");
      }
      hideOptions();
    }

    // Prevent the click event from propagating to the input field
    event.stopPropagation();
  };

  const handleTagRemove = (tagToRemove: Tag) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
    setTagsState(updatedTags);
  };

  const showOptionsOnInputClick = () => {
    setShowOptions(true);
    filterOptions(inputValue); // Filter options when the input field is clicked
  };

  const hideOptions = () => {
    setShowOptions(false);
  };

  useEffect(() => {
    // Add a click event listener to the document to hide options when clicking outside
    const handleDocumentClick = (event: MouseEvent) => {
      if (
        inputRef.current &&
        optionsRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        !optionsRef.current.contains(event.target as Node)
      ) {
        hideOptions();
      }
    };

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className="post-tags">
      <ul className="current-tags">
        {tags.map((tag) => (
          <li key={tag.tagId}>
            {tag.tagName}
            <button onClick={() => handleTagRemove(tag)}>X</button>
          </li>
        ))}
        <li>
          <input
            type="text"
            placeholder={placeholder}
            value={inputValue}
            onChange={handleInputChange}
            onClick={showOptionsOnInputClick}
            ref={inputRef}
          />
          {showOptions && (
            <ul className="tag-options" ref={optionsRef}>
              {filteredOptions
                .filter((option) => option.status === true && !tags.includes(option))
                .map((option) => (
                  <li
                    key={option.tagId}
                    onClick={(event) => handleOptionClick(option, event)}
                  >
                    {option.tagName}
                  </li>
                ))}
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default CreateBlogTags;
