import React, { useEffect, useState } from 'react';
import TagsPageTags from './tags-page-tags';
import Tag from '../../../model/tag';
import { loginApi, tagApi } from '../../../config/axios';
import User from '../../../model/user';
import TagPageTagsAdmin from './tags-page-tags-admin';

type TagsPageMain = {
    uri: string;
}

const TagsPageTagsList: React.FC<TagsPageMain> = ({ uri }) => {

    const [tags, setTags] = useState<Tag[]>([]);
    const fetchUserData = async () => {
        const response = await tagApi.get(uri, { withCredentials: true });

        setTags(response.data);
        console.log(response.data);
    };
    useEffect(() => {
        fetchUserData();
    }, [tagApi]);

    const [loginUser, setLoginUser] = useState<User>();
    const fetchLoginData = async () => {
        const response = await loginApi.get('/currentUser', { withCredentials: true });
        setLoginUser(response.data);
    };
    useEffect(() => {
        fetchLoginData();
    }, [loginApi]);

    /* TAG CREATION METHODS */

    const [tagName, setTagName] = useState("");
    const [status] = useState(true);

    const handleCreate = () => {
        // Trim the tagName to remove leading and trailing spaces
        const trimmedTagName = tagName.trim();
    
        // Check if the trimmedTagName is empty
        if (!trimmedTagName) {
            console.error("Tag name cannot be empty or contain only spaces.");
            // Optionally, you can set an error state or display a message to the user
            return;
        }
    
        // Create a data object to send to the backend
        const tagData = {
            tagName: trimmedTagName,
            status
        };
    
        // Send a POST request to your backend
        tagApi
            .post("/show", tagData, { withCredentials: true })
            .then((response) => {
                console.log(tagData);
                window.location.href = `${import.meta.env.VITE_FRONTEND_URL}`;
                console.log("TAG created:", response.data);
            })
            .catch((error) => {
                console.log(tagData);
                console.error("Error creating tag: ", error);
            });
    };
    

    const handleTagNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTagName(event.target.value);
    };

    if (!loginUser) {
        return (
            <h1 style={{ color: 'white' }}> Loading...</h1>
        );
    }
    else if (loginUser?.role === 'ROLE_USER') {
        return (
            <div className='tags-page-body'>
                <div className='tags-page-container'>
                    {tags
                        .filter(tag => tag.status === true) // Filter tags with status true
                        .map(tag => (
                            <TagsPageTags tags={tag} key={tag.tagId} />
                        ))}
                </div>
            </div>
        );
    } else {
        return (
            <>
                <div className='tags-page-body'>
                    <div className='tags-page-container'>
                        {tags
                            .filter(tag => tag.status === true) // Filter tags with status true
                            .map(tag => (
                                <TagPageTagsAdmin tags={tag} key={tag.tagId} />
                            ))
                        }
                        <form className="create-tag-form">
                            <input
                                placeholder="Enter tag name"
                                value={tagName}
                                onChange={handleTagNameChange}
                            />
                            <div className="create-tag-form-footer">
                                <button
                                    className='create-tag-button'
                                    onClick={handleCreate}
                                >
                                    Create
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );
    }



};
export default TagsPageTagsList;
