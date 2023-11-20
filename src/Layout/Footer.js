import Image from 'next/image'
import Link from 'next/link';
import FooterLogo from '../assets/images/tgif-large.png'

export const Footer = () => {
    return (
        <>
            <div className='flex items-center flex-wrap p-5 bg-darkGreen justify-center md:p-15 sm:p-20'>
                <Image 
                src={FooterLogo}
                alt="TGIF"
                className="max-w-[80%] md:max-w-[100%]"
                />
            </div>
        </>
    );
};