import bannerImage from '../../../assets/banner-main.png';
import banner from '../../../assets/bg-shadow.png';

const Banner = ({addCoin}) => {


    return (
        <div className='relative mt-6 md:mt-12 mb-12 md:mb-24'>
            {/* Banner Image */}
            <figure className="relative w-full h-72 md:h-[512px] rounded-2xl">
                <img className="w-full h-full object-cover rounded-2xl bg-gray-900" src={banner} alt="Banner" />
            </figure>
            {/* banner content */}
            <div className='absolute inset-0 flex flex-col items-center justify-center text-center gap-3 md:gap-4'>
                <img 
                    src={bannerImage} 
                    alt="Banner" 
                    className="w-24 h-16 md:w-48 md:h-32 object-contain mx-auto"
                />
                <h1 className='text-[#E7FE29] text-[22px] md:text-[40px] font-bold leading-tight'>
                    Assemble Your Ultimate Dream 11 Cricket Team
                </h1>
                <h4 className='text-gray-300 text-lg md:text-2xl'>
                    Beyond Boundaries Beyond Limits
                </h4>
                {/* Button */}
                <button 
                    onClick={addCoin}
                    className="border-2 border-[#E7FE29] p-1 md:p-2 mt-2 md:mt-4 w-fit rounded-2xl group"
                >
                    <div 
                    className="bg-[#E7FE29] text-black font-bold py-2 px-4 md:py-3 md:px-6 rounded-xl cursor-pointer text-base group-hover:scale-105 transition-transform duration-300">
                        Claim Free Credit
                    </div>
                </button>
            </div>
        </div>
    );
};

export default Banner;