
import PropTypes from 'prop-types';
const DonationCard = ({ catagory }) => {
    console.log(catagory);
    return (
        <div className="card card-side bg-base-100 shadow-xl" style={{
            backgroundColor: `${catagory.card_bg}`
        }}>
            <figure><img className='h-full w-[300px]' src={catagory.image_url} alt="Movie" /></figure>
            <div className="card-body">
                <h1><span className='px-3 py-2 rounded-md text-base font-normal' style={{
                    backgroundColor: `${catagory.category_bg}`, color: `${catagory.t_b_color}`
                }}>{catagory.Category}</span></h1>
                <h2 className="card-title text-2xl font-semibold" style={{
                    color: `${catagory.t_b_color}`
                }}>{catagory.title}</h2>
                <p className=' text-base font-semibold' style={{
                    color: `${catagory.t_b_color}`
                }}>$290</p>
                <div className="card-actions">
                    <button className="btn px-4 py-3 text-[#fff] text-lg font-semibold" style={{ backgroundColor: `${catagory.t_b_color}` }}>View Details</button>
                </div>
            </div>
        </div>
    );
};

DonationCard.propTypes = {
    gatagory: PropTypes.object,
};

export default DonationCard;