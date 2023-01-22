import React from 'react';
import PostItem from './PostItem';

const ItemList = ({posts,title}) => {
    return(
        <div>
           <h1 style={{textAlign: 'center'}}>{title}</h1>
            {posts.map((post) => <PostItem number = {index + 1} post = {post} key = {post.id}/>)}
        </div>
    );
};

export default ItemList