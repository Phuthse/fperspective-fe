import React, { useState } from 'react';
import './tags-page.css';
import TagsPageMain from './TagsPageMain/tags-page-main';
import TagsPageHeader from './TagsPageHeader/tags-page-header';


const TagsPage: React.FC = () => {
    const [tagsPageMainComponents] = useState<JSX.Element[]>([
    
        <div className='tags-page-container'>
            <TagsPageMain
                TagsName='javascript'
                TagsDesc='Once relegated to the browser as one of the 3 core technologies of'
                NumberOfPosts='42351'
            />
            <TagsPageMain
                TagsName='react'
                TagsDesc='Official tag for Facebook React JavaScript library for building user'
                NumberOfPosts='21421'
            />
            <TagsPageMain
                TagsName='python'
                TagsDesc='import antigravity'
                NumberOfPosts='12575'
            />
            <TagsPageMain
                TagsName='discuss'
                TagsDesc='Craft a prompt and start a conversation!'
                NumberOfPosts='12437'
            />
            <TagsPageMain
                TagsName='node'
                TagsDesc='A JavaScript runtime built on Chrome V8 JavaScript engine.'
                NumberOfPosts='9823'
            />
            <TagsPageMain
                TagsName='angular'
                TagsDesc='One of the world most popular frontend JavaScript frameworks.'
                NumberOfPosts='7923'
            />
            <TagsPageMain
                TagsName='java'
                TagsDesc='More than just a cup of coffee, Java is a high-level, class-based'
                NumberOfPosts='32823'
            />
            <TagsPageMain
                TagsName='docker'
                TagsDesc='Stories about Docker as a technology (containers, CLI, Engine)'
                NumberOfPosts='4823'
            />
            <TagsPageMain
                TagsName='php'
                TagsDesc='Home for all the PHP-related posts on Dev.to!'
                NumberOfPosts='7823'
            />
            <TagsPageMain
                TagsName='css'
                TagsDesc='Cascading Style Sheets (CSS) is a simple language for adding'
                NumberOfPosts='13823'
            />
            <TagsPageMain
                TagsName='android'
                TagsDesc='Brought to you by the good folks at Google...'
                NumberOfPosts='5912'
            />
            <TagsPageMain
                TagsName='tutorial'
                TagsDesc='Tutorial is a general purpose tag. We welcome all types of '
                NumberOfPosts='3023'
            />
        </div>
    ]);

    return (
        <div className='tags-page-top'>
            <TagsPageHeader NumberOfTags={12} />
            <div className='tags-page-body'>    
                {tagsPageMainComponents}    
            </div>
        </div>
    );
};

export default TagsPage;
