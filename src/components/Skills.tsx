import Title from './Common/Title';
import data from '@/data/data.json';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Skills = () => {
    return (
        <div id="skills">
            <Title num={4} title="Skills" />

            <div className="flex flex-wrap items-center justify-center mt-10 space-x-6 md:space-x-10 md:items-start md:justify-start">
                {data.skills.map((skill, i) => (
                    <motion.a
                        className="cursor-pointer relative w-20 h-20"
                        href={skill.link}
                        key={i}
                        rel="noreferrer"
                        target="_blank"
                        whileHover={{
                            scale: [1, 1.3, 1.15],
                            zIndex: 1,
                            transition: {
                                duration: 1,
                            },
                        }}
                    >
                        <Image
                            alt={skill.name}
                            layout="fill"
                            objectFit="contain"
                            src={skill.src}
                        />
                    </motion.a>
                ))}
            </div>
        </div>
    );
};

export default Skills;
