const RatingStar: React.FC<{ rating: string }> = ({ rating }) => {
    return (
        <div className="rating">
            <svg width="15px" height="15px" viewBox="0 -0.5 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.0005 0L21.4392 9.27275L32.0005 11.5439L24.8005 19.5459L25.889 30.2222L16.0005 25.895L6.11194 30.2222L7.20049 19.5459L0.000488281 11.5439L10.5618 9.27275L16.0005 0Z" fill="#FFCB45"></path>
            </svg>
            <small>{rating}</small>
        </div>
    );
};

export default RatingStar;
