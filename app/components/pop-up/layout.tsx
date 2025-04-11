import { useState } from "react";

export function PopUpLayout ({children}: {children: React.ReactNode}) {

    const [showPopUp, setShowPopUp] = useState<boolean>(false);

    return (
        <div className={`${showPopUp ? 'absolute' : 'hidden'} z-40 inset-0 bg-black/20 bg-opacity-50 flex items-center justify-center cursor-pointer`} onClick={ () => { setShowPopUp(false)} }>
            <div className="popup absolute bg-white w-[calc(100%-20px)] md:w-1/2 h-auto rounded-lg shadow-lg p-4 flex flex-col z-40 cursor-default">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-x-lg text-black ml-auto mr-0 cursor-pointer" viewBox="0 0 16 16" onClick={ () => { setShowPopUp(false)} }>
                    <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
                </svg>
                {children}
            </div>
        </div>  
    );
}