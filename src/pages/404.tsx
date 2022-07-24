import { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const CustomError: NextPage = () => {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <Image
                alt=""
                height={300}
                objectFit="contain"
                src="/404.png"
                width={500}
            />

            <h2 className="mb-5 text-2xl font-semibold font-sora">
                Lost in the void?
            </h2>
            <p className="text-center">
                The page you&apos;re looking for doesn&apos;t exist. <br />
                We suggest you back to home :)
            </p>

            <Link href="/">
                <a className="mt-4 cursor-pointer flex items-center px-5 py-2 duration-100 border-2 rounded-lg fill-current stroke-current text-darkerBlue bg-neon border-neon hover:bg-transparent hover:text-neon">
                    Back to Home
                </a>
            </Link>
        </div>
    );
};

export default CustomError;
