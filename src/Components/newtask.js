import './styles/newtask.css';

export const NewTask = ({ createTask }) => {

    return (
        <div className='newTask' onClick={createTask}>
            <svg xmlns="http://www.w3.org/2000/svg" width="510" height="40" viewBox="0 0 510 40" fill="none">
                <line y1="16" x2="510.001" y2="16" stroke="#FF0000" strokeWidth="2" />
                <g filter="url(#filter0_d_8_33)">
                    <rect x="235" width="32" height="32" fill="#D9D9D9" />
                    <rect x="236.5" y="1.5" width="29" height="29" stroke="#F9756A" strokeWidth="3" />
                </g>
                <line x1="251" y1="6.20001" x2="251" y2="25.4" stroke="black" strokeWidth="4" />
                <line x1="241" y1="15.6667" x2="260.6" y2="15.6667" stroke="black" strokeWidth="4" strokeLinejoin="bevel" />
                <defs>
                    <filter id="filter0_d_8_33" x="231" y="0" width="40" height="40" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_8_33" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_8_33" result="shape" />
                    </filter>
                </defs>
            </svg>
        </div>
    );
}
