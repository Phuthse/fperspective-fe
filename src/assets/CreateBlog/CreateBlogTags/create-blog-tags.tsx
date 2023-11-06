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
  const fetchBTagData = async () => {
    const response = await tagApi.get(uri, { withCredentials: true });
    setBTags(response.data);
  };
  useEffect(() => {
    fetchBTagData();
  }, [uri]);

  const [tags, setTagsState] = useState<Tag[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [placeholder, setPlaceholder] = useState<string>("Add up to 4 tags...");
  const [showOptions, setShowOptions] = useState<boolean>(false);

  const options: Tag[] = [];

  btags.map((btag) => {
    options.push(btag)
  })

  const inputRef = useRef<HTMLInputElement | null>(null);
  const optionsRef = useRef<HTMLUListElement | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
  };

  const handleOptionClick = (options:Tag) => {
    if (tags.length < 4 && !tags.includes(options)) {
      const updatedTags = [...tags, options];
      setTags(updatedTags);
      setTagsState(updatedTags);
      setInputValue("");
      if (tags.length === 3) {
        setPlaceholder("Max tags reached");
      } else if (tags.length >= 0) {
        setPlaceholder("Add another...");
      }
    }
    hideOptions();
  };

  const handleTagRemove = (tagToRemove: Tag) => {
    const updatedTags = tags.filter((tag) => tag !== tagToRemove);
    setTags(updatedTags);
    setTagsState(updatedTags);
  };

  const showOptionsOnInputClick = () => {
    setShowOptions(true);
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
              {options
                .filter((option) => !tags.includes(option))
                .map((option) => (
                  <li key={option.tagId} onClick={() => handleOptionClick(option)}>
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
