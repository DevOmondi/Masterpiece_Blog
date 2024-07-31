import React from "react";
import Image from "next/image";
import { FaTwitter, FaLinkedin, FaMedium } from "react-icons/fa";
import Navbar from "./Navbar";
import Button from "./Button";
import landingIllustration from "../../public/landingIllustrator.svg";

const HeroSection: React.FC = () => {
  return (
    <div >
      <Navbar />
      <div className="flex gap-[6rem] w-[90%] lg:w-[80%] items-center mx-auto my-[6rem]">
        <div className="w-[60%]">
          <p className="font-extrabold text-primaryColor text-[3rem]">
            Blog Posts
          </p>
          <p className="text-[2.5rem] text-textSecondaryColor py-[1rem]">
            I think so, this is it.
          </p>
          <p className="">
            Design begins after I begin to think about how to present an
            experience most successfully, whether a button I put in can solve a
            problem. The only point in design is not ui design, if the user does
            not have a good experience at the end of the product, the design
            will be considered unsuccessful in my opinion.
          </p>
          <div className="flex gap-[1rem] my-[1.5rem]">
            <Button content="Twitter" bgColor="#47ace0" Icon={FaTwitter} />
            <Button content="Linkedin" bgColor="#1175b1" Icon={FaLinkedin} />
            <Button content="Medium" bgColor="#000000" Icon={FaMedium} />
          </div>
        </div>
        <div>
          <Image
            src={landingIllustration}
            alt="Blog picture"
            width={400}
            height={400}
            loading="lazy"
            quality={80}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
