interface SellerInfoProps {
    location: string;
    seller: string;
}
const SellerInfo: React.FC<SellerInfoProps> = (
    { location, seller }: SellerInfoProps
) => {
    return (
        <div className="seller-info">
            <svg width="15px" height="15px" viewBox="-2 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M23.1397 4.05909C20.4929 1.35303 17.2979 0 13.5549 0C9.81179 0 6.61688 1.35303 3.97014 4.05909C1.32338 6.76515 0 10.0317 0 13.8586C0 17.6855 1.32338 20.952 3.97014 23.6582L11.1323 30.9808C12.4615 32.3397 14.6483 32.3397 15.9775 30.9808L23.1397 23.6582C25.7864 20.952 27.1097 17.6855 27.1097 13.8586C27.1097 10.0317 25.7864 6.76515 23.1397 4.05909Z" fill="url(#paint0_radial_103_1597)"></path>
                <defs>
                    <radialGradient id="paint0_radial_103_1597" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(13.5549) rotate(90) scale(32 27.1097)">
                        <stop stop-color="#A2E458"></stop>
                        <stop offset="1" stop-color="#5AD010"></stop>
                    </radialGradient>
                </defs>
            </svg>
            <div className="product-card__seller__interaction">
                <span className="product-card__seller__name">{seller}</span>
                <span className="product-card__seller__name">{location}</span>
            </div>
        </div>
    );
};

export default SellerInfo;
