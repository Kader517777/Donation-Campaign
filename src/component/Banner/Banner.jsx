
import PropTypes from 'prop-types';
import { useState } from 'react';


const Banner = ({ handleSearch }) => {

    const [searchValue, setSearchValue] = useState('');
    const handleChange = (e) => {
        const search = String(e.target.value);
        setSearchValue(search)
    }

    return (
        <div className="container mx-auto ">
            <div className="hero h-96 " style={{ backgroundImage: 'url(https://i.ibb.co/7rc9vh1/fc1f79e18cdc1a12320b9b10ec3e253d.jpg)', }}>
                <div className="hero-overlay "></div>
                <div className="hero-content text-center text-neutral-content">
                    <input type="text" onChange={handleChange} className=" h-12 w-96 rounded-md" />
                    <button onClick={() => handleSearch(`${searchValue}`)} className="btn text-base h-12 bg-[#FF444A] text-[#fff]">Search</button>
                </div>
            </div>
        </div>
    )
};

Banner.propTypes = {
    handleSearch: PropTypes.func,
};

export default Banner;