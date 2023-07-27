import React, { useMemo } from "react";
import { Button } from "@mui/material";
import mob from "../assets/mob.jpeg";
import { motion } from "framer-motion";
import getScrollAnimation from "./utils/getScrollAnimation";
import ScrollAnimationWrapper from "./utils/ScrollAnimationWrapper";
import { Link } from "react-router-dom";

const Homepage = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div className="max-w-screen-xl mt-10 px-8 xl:px-16 mx-auto" id="about">
      <ScrollAnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={scrollAnimation}
        >
          <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1
              className="text-2xl lg:text-3xl xl:text-4xl font-medium text-black-600 leading-normal"
              style={{ color: "#1c54b2" }}
            >
              Search and Rescue System for MOB Detection.
            </h1>
            <p className="text-black-500 mt-4 mb-6">
              The scope of the project is to use deep learning techniques to
              detect a person from images captured by a drone in a maritime
              environment, particularly in case of a Man Overboard (MOB)
              situation. While the project is capable of processing videos,
              there is room for improving the accuracy of the model in this
              scenario.
            </p>
            <Link to={"/detection"}>
              <Button variant="outlined">TRY IT OUT</Button>
            </Link>
          </div>
          <div className="flex w-full">
            <motion.div className="h-full w-full" variants={scrollAnimation}>
              <img
                src={mob}
                alt="VPN Illustrasi"
                quality={100}
                width={500}
                height={300}
                layout="responsive"
              />
            </motion.div>
          </div>
        </motion.div>
      </ScrollAnimationWrapper>
    </div>
  );
};

export default Homepage;
