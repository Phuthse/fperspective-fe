import React, { useEffect, useState } from 'react';
import './tags-page-tags-admin.css';
import Tag from '../../../model/tag';
import { tagApi } from '../../../config/axios';
import { Link } from 'react-router-dom';

type TagsPageAdminProp = {
    tags: Tag;
}

const TagPageTagsAdmin: React.FC<TagsPageAdminProp> = ({ tags }) => {

    /* TAG UPDATE AND DELETE METHODS */

    const [tagName, setTagName] = useState(tags.tagName);
    //const [status] = useState(tags.status);
    const [count, setCount] = useState<number>(1);
    const fetchTagData = async () => {
        const response = await tagApi.get(`/count/${tags.tagName}`, { withCredentials: true });
        setCount(response.data);
    };
    useEffect(() => {
        fetchTagData();
    }, [tagApi]);

    // const handleUpdate = () => {
    //     const tagData = {
    //         tagId: tags.tagId,
    //         tagName: tagName,
    //         status
    //     };
    //     tagApi
    //         .post(`/update`, tagData, { withCredentials: true })
    //         .then((response) => {
    //             console.log(tagData);
    //             window.location.href = "http://localhost:5173/tag-page";
    //             console.log("TAG updated:", response.data);
    //         })
    //         .catch((error) => {
    //             console.log(tagData);
    //             console.error("Error updating tag: ", error);
    //         });
    // };

    const handleDelete = () => {
        tagApi
            .delete(`/delete/${tags.tagId}`, { withCredentials: true })
            .then((response) => {
                tagApi.delete(`/subject/${tags.tagName}`, { withCredentials: true })
                window.location.href = `${import.meta.env.VITE_FRONTEND_URL}/tag-page`;
                console.log("TAG updated:", response.data);
            })
            .catch((error) => {
                console.error("Error deleting tag: ", error);
            });
    };


    const handleTagNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTagName(event.target.value);
    };

    return (

        <div className="admin-tag-page-content">
            <div className='admin-tag-name-num'>
                <h3>
                    <Link
                        to={`/tag/${tags.tagName}`}
                        key={tags.tagId}
                    >
                        <span>#</span>
                    </Link>

                    <input
                        key={tags.tagId}
                        onChange={handleTagNameChange}
                        value={tagName}
                    />
                </h3>
                <h4>{count} posts</h4>
            </div>
            <div className="admin-tag-button">
                {/* <button className='admin-tag-update' onClick={handleUpdate}>Update</button> */}
                <button className='admin-tag-delete' onClick={handleDelete}>Delete</button>
            </div>
        </div>

    );
};

export default TagPageTagsAdmin;
