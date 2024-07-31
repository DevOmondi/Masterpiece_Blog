import React from "react";
import Image from "next/image";

const ArticleCard: React.FC = () => {
  return (
    <div className="max-w-md">
      <Image
        src="https://www.pexels.com/photo/person-walking-between-green-forest-trees-15286/"
        alt="Nature picture"
        width={400}
        height={400}
        loading="lazy"
        quality={80}
      />
      <p>2024-07-01</p>
      <p>Exploring the Wonders of Nature</p>
      <p>
        Nature has an incredible ability to inspire and rejuvenate us. From
        majestic mountains to serene lakes, the beauty of the natural world is
        unparalleled...
      </p>
      <span>READ MORE</span>
    </div>
  );
};

export default ArticleCard;
