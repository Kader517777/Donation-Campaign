
import PropTypes from 'prop-types';
import { useState } from 'react';


const Banner = ({ handleSearch }) => {

    const [searchValue, setSearchValue] = useState('');
    const handleChange = (e) => {
        const search = String(e.target.value);
        setSearchValue(search)
    }

    return (
        <div className="lg:container sm:w-full mx-auto bg-[#a25f5ff8]">
            <div className="hero h-[500px] text-[#a25f5ff8] " style={{ backgroundImage: 'url(https://i.ibb.co/7rc9vh1/fc1f79e18cdc1a12320b9b10ec3e253d.jpg)' }}>

                <div className="hero-overlay bg-[#FFFFFFF3]	"></div>

                <div className="hero-content text-center text-neutral-content flex flex-col ">
                    <h1 className=' text-5xl font-bold text-[#0B0B0B]'>I Grow By Helping People In Need</h1>
                    <div>
                        <input type="text" onChange={handleChange} className=" h-12 w-96 rounded-l-md text-[#0B0B0B] font-bold text-sm border border-spacing-y-2 border-spacing-l-2" />
                        <button onClick={() => handleSearch(`${searchValue}`)} className="btn text-base h-12 bg-[#FF444A] text-[#fff]  rounded-s-none">Search</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

Banner.propTypes = {
    handleSearch: PropTypes.func,
};

export default Banner;