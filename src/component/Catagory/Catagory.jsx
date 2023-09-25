
import PropTypes from 'prop-types';

const Catagory = ({ catagory }) => {


    return (
        <div className={`card card-compact shadow-xl`} style={{ background: `${catagory.card_bg}` }}>
            <figure><img className='w-full h-[220px]' src={catagory.image_url} /></figure>
            <div className="p-5">
                <p className=' my-3 '> <span className='text-sm font-medium px-3 py-2 my-3 rounded-md' style={{
                    color: `${catagory.t_b_color}`, background: `${catagory.category_bg}`
                }}>{catagory.Category}</span></p>
                <p className=" text-xl font-semibold" style={{
                    color: `${catagory.t_b_color}`
                }}>{catagory.title}</p>
            </div>
        </div>
    );
};

Catagory.propTypes = {
    catagory: PropTypes.object.isRequired,

};

export default Catagory;