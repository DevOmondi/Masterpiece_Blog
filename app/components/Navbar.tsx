import React from "react";

const Navbar: React.FC = () => {
  return (
    <>
      <div className="flex justify-between w-[90%] lg:w-[80%] mx-auto items-center pt-[4rem]">
        <div>
          <p className="font-extrabold text-textSecondaryColor text-[2rem]">
            Masterpiece Blogs
          </p>
        </div>
        <div>
          <ul className="flex gap-[2rem] text-textPrimaryColor text">
            <li className="uppercase hover:text-primaryColor hover:cursor-pointer">Blog</li>
            <li className="hover:text-primaryColor hover:cursor-pointer">News</li>
            <li className="hover:text-primaryColor hover:cursor-pointer">Culture</li>
            <li className="hover:text-primaryColor hover:cursor-pointer">About Masterpiece</li>
            <li className="uppercase hover:text-primaryColor hover:cursor-pointer">CONTACT</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
