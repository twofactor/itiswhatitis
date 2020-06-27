import Head from "next/head";
import dynamic from "next/dynamic";

import Autoplay from "../components/Autoplay";
import Signup from "../components/Signup";
import {
  ThemeProvider,
  CSSReset,
  Heading,
  Flex,
  Box,
  Text,
  Input,
  Button,
} from "@chakra-ui/core";
// import Widget from '../components/Widget'


import { motion } from "framer-motion";

const MotionText = motion.custom(Text);

const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/Autoplay"),
  { ssr: false }
);


export default function Home() {
  return (
    <div>
      <head>
        {" "}
        <link
          href="https://fonts.googleapis.com/css?family=Inter"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <div className="holder">
        <span>
          <p className="emoji">👁👄👁</p>
          <p className="tt">It is what it is. We're live.</p>
          <p>Donate and discover.</p>
          <p>‎‎‏‏‎ ‎</p>
          <p>Donate to any of</p>
          <p><a href="https://thelovelandfoundation.org/loveland-therapy-fund/">a. Loveland Foundation</a></p>
          <p><a href="https://www.innocenceproject.org/donate/">b. The Innocence Project</a></p>
          <p><a href="https://www.theokraproject.com/">c. The Okra Project</a></p>
          <p>‎‎‏‏‎ ‎</p>
          <p>and <a href="https://google.com" className="submit"> submit your receipt</a> to find out. </p>

        </span>
      </div>
      <style jsx>{`
        span {
          color: white;
          font-size: 26px;
          text-align: center;
          // width: 50%;
          // margin: 0 auto;
          position: relative;
          top: 50%;
          translate: transformY(-50%)
        }
        a {
          color: #dbd9d8;
          text-decoration: none;
        }
        a:hover {
          color: white;
        }
        p.emoji {
          font-size: 40px;
          line-height: 1.5;
        }
        p.tt {
          color: white;
          font-size: 26px;
          line-height: 1.5;
        }
        p {
          color: gray;
          font-size: 18px; 
          line-height: 0.6;
        }
        div.holder {
          height: 100%;
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
      <style global jsx>{`
        body {
          font-family: "Inter";
          background: black;
          
        }
      `}</style>
    </div>
  );
}