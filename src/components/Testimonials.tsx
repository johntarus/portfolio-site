import Title from './Common/Title';
import data from '@/data/data.json';
import Image from 'next/image';

const Testimonials = () => {
    return (
        <div id="testimonials">
            <Title num={2} title="Testimonials" />

            <div className="flex w-screen px-4  space-x-10 overflow-scroll hideScrollBar md:mx-auto md:-mr-0">
                {data.testimonials.map((testimonial, i) => (
                    <div
                        className="rotate-3 hover:rotate-0 cursor-pointer duration-100 backdrop-filter backdrop-blur-3xl shadow-2xl border-2 border-darkerBlue  bg-white/5  px-4 my-10 pb-3 md:w-[400px] min-w-[300px] rounded-lg"
                        key={i}
                    >
                        <h2 className="pt-5">{testimonial.value}</h2>
                        <a
                            className="flex items-center space-x-4"
                            href={testimonial.link}
                            rel="noreferrer"
                            target="_blank"
                        >
                            <div className="relative w-12 h-12 mt-4 rounded-full">
                                <Image
                                    alt={testimonial.name}
                                    className="w-12 h-12 mt-4 rounded-full"
                                    height={250}
                                    objectFit="contain"
                                    src={testimonial.pfp}
                                    width={250}
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <h2 className="mt-4 text-white">
                                    {testimonial.name}
                                </h2>
                                <h2 className="text-white">
                                    {testimonial?.relation}
                                </h2>
                            </div>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Testimonials;
