import bannerImage from '../../../assets/banner-main.png';
import banner from '../../../assets/bg-shadow.png';

const Banner = () => {
    return (
        <div className='relative mt-12 mb-24'>
            <figure className="relative w-full rounded-2xl">
                <img className="w-full h-full object-cover rounded-2xl bg-black/90" src={banner} alt="Banner" />
            </figure>
            {/* banner content */}
            <div className='absolute inset-0 flex flex-col items-center justify-center text-center gap-4'>
            <img className=""src={bannerImage} alt="Banner" />
            <h1 className='text-yellow-300 text-[40px] font-bold'>Assemble Your Ultimate Dream 11 Cricket Team</h1>
            <h4 className='text-gray-500 text-2xl'>Beyond Boundaries Beyond Limits</h4>
            <div className="border-2 border-[#E7FE29] p-2 mt-2 w-fit rounded-2xl">
                <button className="bg-[#E7FE29] text-black font-bold py-3 px-5 rounded-xl">
                    Join Now
                </button>
            </div>
            </div>
        </div>
    );
};

export default Banner;