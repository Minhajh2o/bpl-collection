import banner from '../../../assets/bg-shadow.png';

const NewsLatter = () => {
    return (
        <div className='relative z-10 -mb-48 bg-white/10 rounded-3xl'>
            <figure className="relative w-full h-96 p-6 border-2 border-white rounded-3xl">
                <img className='w-full h-full object-cover rounded-2xl bg-white border-2 border-gray-100' src={banner} alt="" />
            </figure>
            <div className='absolute inset-0 flex flex-col items-center justify-center text-center gap-6 rounded-3xl'>
                <h2 className='text-4xl font-bold mb-4'>Subscribe to our Newsletter</h2>
                <p className='text-xl text-gray-600 mb-6
                '>Get the latest updates and news right in your inbox!</p>
                <form className='flex flex-col items-center justify-center md:flex-row gap-4 w-full'>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="input input-bordered p-4 h-11"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-gradient-to-r from-pink-400 via-orange-300 to-yellow-300 text-black font-semibold px-6 py-3 rounded-xl shadow-md cursor-pointer hover:opacity-90 transition"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewsLatter;