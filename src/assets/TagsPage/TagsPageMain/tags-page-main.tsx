import React from 'react';
import './tags-page-main.css';
import FollowButton from '../../home/button/FollowButton/follow-button';


type TagsPageMain = {
    
    TagsName: string;
    NumberOfPosts: string;
    TagsDesc: string;
    
}

const TagsPageMain: React.FC<TagsPageMain> = ({ TagsName, TagsDesc , NumberOfPosts }) => {
    return (
        

        <div className='tags-page-main'>
            
            <div className="tags-page-content">
                
                <div className='tags-name-num'>
                    <h3>
                        <a href='#'>#{TagsName}</a>
                    </h3>
                    <h4>
                        {NumberOfPosts} posts 
                    </h4>
                </div>
                <div className='tags-desc'>
                        <p>{TagsDesc}</p>
                </div>

                <FollowButton/>
                
            </div>

        </div>


    );
};
export default TagsPageMain;
