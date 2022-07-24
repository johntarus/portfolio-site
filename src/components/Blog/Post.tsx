import { CommentIcon, LikeIcon } from '../../Icons';
import { PostType } from '@/types/PostType';
import Image from 'next/image';
import { FC } from 'react';

interface Props {
    post: PostType;
}

const Post: FC<Props> = ({ post }) => {
    return (
        <a
            className="relative flex flex-col m-5 my-5 mt-5 rounded-lg md:mb-0 md:mx-5 w-80 md:w-96 dark:bg-darkerBlue"
            href={`https://blog.avneesh.tech/${post.slug}`}
            key={post._id}
            rel="noreferrer"
            target="_blank"
        >
            {post.coverImage && (
                <Image
                    alt={post.title}
                    className="rounded-lg"
                    height={786}
                    objectFit="cover"
                    src={post.coverImage}
                    width={1500}
                />
            )}

            <div className="flex flex-col p-4 pb-0">
                <h2 className="text-2xl font-semibold text-neon">
                    {post.title}
                </h2>
                <p className="mt-4 text-base break-words text-text">
                    {post.brief}
                </p>
            </div>
            <div className="flex justify-between w-full p-4 mt-auto">
                <div className="flex">
                    <LikeIcon className="w-6 h-6 mr-2 fill-current text-text" />
                    <p className="text-text">{post.totalReactions}</p>
                </div>
                <div className="flex">
                    <CommentIcon className="w-6 h-6 mr-2 fill-current text-text" />
                    <p className="text-text">
                        {post.replyCount + post.responseCount}
                    </p>
                </div>
            </div>
        </a>
    );
};

export default Post;
