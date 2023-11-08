import React, { useState, useRef, useEffect } from "react";
import "./create-blog-category.css";
import Category from "../../../model/category";
import { categoryApi } from "../../../config/axios";

interface CreateBlogCategoriesProps {
    setCategory: (category: Category | undefined) => void;
    uri: string;
}

const CreateBlogCategories: React.FC<CreateBlogCategoriesProps> = ({ setCategory, uri }) => {

    const [bCategory, setBCategory] = useState<Category | undefined>(undefined);
    const [inputValue, setInputValue] = useState<string>("");
    const [placeholder, setPlaceholder] = useState<string>("Add a Category...");
    const [showOptions, setShowOptions] = useState<boolean>(false);

    const inputRef = useRef<HTMLInputElement | null>(null);
    const optionsRef = useRef<HTMLUListElement | null>(null);

    const fetchBCategoryData = async () => {
        const response = await categoryApi.get(uri, { withCredentials: true });
        setBCategory(response.data);
    };

    useEffect(() => {
        fetchBCategoryData();
    }, [uri]);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInputValue(value);

        // You can filter the options based on the input value here if needed
    };

    const handleOptionClick = () => {
        if (bCategory) {
            setCategory(bCategory);
            setInputValue("");
            setPlaceholder("Category selected");
            hideOptions();
        }
    };

    const clearCategory = () => {
        setCategory(undefined);
        setInputValue("");
        setPlaceholder("Add a Category...");
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
        <div className="post-categories">
            <input
                type="text"
                placeholder={placeholder}
                value={inputValue}
                onChange={handleInputChange}
                onClick={showOptionsOnInputClick}
                ref={inputRef}
            />
            {showOptions && bCategory && (
                <ul className="category-options" ref={optionsRef}>
                    <li onClick={handleOptionClick}>
                        {bCategory.categoryName}
                    </li>
                </ul>
            )}
            {bCategory && (
                <button onClick={clearCategory}>Clear Category</button>
            )}
        </div>
    );
};

export default CreateBlogCategories;
