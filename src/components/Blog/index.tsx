import Title from '../Common/Title';
import Post from './Post';
import { PostType } from '@/types/PostType';
import { FC } from 'react';

interface Props {
    Posts: [PostType];
}

const Blog: FC<Props> = ({ Posts }) => {
    return (
        <div
            className="flex flex-col items-center justify-center  md:justify-start md:items-start "
            id="blog"
        >
            <Title num={5} title="Blog" />

            <div className="flex flex-wrap justify-between mt-10">
                {Posts.slice(0, 3).map(post => {
                    return <Post key={post._id} post={post} />;
                })}
            </div>
        </div>
    );
};

export default Blog;
