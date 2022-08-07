import { FaTwitter } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';

const Footer = () => {
  return (
    <div className="h-16 w-full bg-[#202027] flex items-center justify-between px-6 md:px-16">
        <div className="flex items-center space-x-8 font-medium">
            <h3 className="cursor-pointer">About Us</h3>
            <h3 className="cursor-pointer">Contact</h3>
        </div>

        <div className="flex items-center space-x-8 font-medium">
            <h3 className="cursor-pointer flex items-center"><FaTwitter className='mr-4'/> Twitter</h3>
            <h3 className="cursor-pointer flex items-center"><ImFacebook2 className='mr-4'/> Facebook</h3>
        </div>
    </div>
  )
}

export default Footer