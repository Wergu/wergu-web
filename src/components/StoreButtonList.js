import React from 'react';
import StoreButton from './StoreButton';
import apple from '../img/apple.png';
import play_store from '../img/play_store.png';

const StoreButtonList = () => {
    return (
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "95%" }}>
            <div>
                <StoreButton img={apple} title={"App Store"} />
            </div>
            <div>
                <StoreButton img={play_store} title={"Google Play"} />
            </div>
        </div>
    );
};

export default StoreButtonList;