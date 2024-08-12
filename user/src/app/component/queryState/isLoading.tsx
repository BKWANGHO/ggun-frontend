
import React from 'react';
import { WhiteBox } from '../style/whiteBox';

const IsLoading: React.FC = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
    <div className="w-[50%] h-[320px] text-center">
        <WhiteBox>
            <div className="flex-col">
                <h1 className="bold text-[60px]">!!!IS LOADING!!!</h1>
            </div>
        </WhiteBox>
    </div>
</div>
  );
};

export default IsLoading;