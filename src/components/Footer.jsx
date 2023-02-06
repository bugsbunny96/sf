import React from "react";
import {
    AiFillFacebook,
    AiOutlineInstagram,
    AiOutlineLinkedin,
} from "react-icons/ai";

const Footer = () => {
    return (
        <footer className="bg-black text-white py-16">
            <div className="container mx-auto">
                <div className="flex flex-wrap">
                    {/* Row 1 */}
                    <div className="w-full text-left text-lg">
                        <p className="text-white font-bold">Logo</p>
                    </div>

                    {/* Row 2 */}
                    <div className="w-full mt-8">
                        <div className="flex flex-wrap">
                            {/* Section 1 - Address */}
                            <div className="w-full md:w-1/4 px-4 pt-4">
                                <p className="mb-4 font-medium">Address</p>
                                <p className="text-gray-500">
                                    123 Main Street
                                    <br />
                                    Anytown, USA 12345
                                </p>
                            </div>

                            {/* Section 2 - Email & Phone */}
                            <div className="w-full md:w-1/4 px-4 pt-4">
                                <p className="mb-4 font-medium">Contact</p>
                                <p className="text-gray-500">
                                    Email:{" "}
                                    <a
                                        className="text-white hover:text-gray-500"
                                        href="mailto:contact@example.com"
                                    >
                                        contact@example.com
                                    </a>
                                    <br />
                                    Phone:{" "}
                                    <a
                                        className="text-white hover:text-gray-500"
                                        href="tel:555-555-5555"
                                    >
                                        555-555-5555
                                    </a>
                                </p>
                            </div>

                            {/* Section 3 - Copyright & Privacy */}
                            <div className="w-full md:w-1/4 px-4 pt-4">
                                <p className="mb-4 font-medium">©</p>
                                <p className="text-gray-500">
                                    Copyright &copy; {new Date().getFullYear()} Silver Fern
                                    <br />
                                    <a
                                        className="text-white hover:text-gray-500"
                                        href="/privacy-policy"
                                    >
                                        Privacy Policy
                                    </a>
                                </p>
                            </div>

                            {/* Section 4 */}
                            <div className="w-full md:w-1/4 px-4 pt-4">
                                {/* SubSection 1 - Newsletter */}
                                <p className="mb-4 font-medium">Subscribe</p>
                                <p className="text-gray-500">
                                    <a
                                        className="text-white hover:text-gray-500"
                                        href="/newsletter"
                                    >
                                        Subscribe to our Newsletter
                                    </a>
                                </p>

                                {/* SubSection 2 - Social Media */}
                                <div className="flex">
                                    <a className="text-gray-500 mr-4" href="./">
                                        <AiOutlineInstagram
                                            className="text-gray-500 hover:text-white mr-6 mt-3"
                                            size={20}
                                        />
                                    </a>
                                    <a className="text-gray-500 mr-4" href="./">
                                        <AiFillFacebook 
                                            className="text-gray-500 hover:text-white mr-6 mt-3"
                                            size={20} />
                                    </a>
                                    <a className="text-gray-500 mr-4" href="./">
                                        <AiOutlineLinkedin
                                            className="text-gray-500 hover:text-white mr-6 mt-3"
                                            size={20}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}


export default Footer;
