import Head from "next/head";
import dynamic from "next/dynamic";

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

import { motion } from "framer-motion";

const MotionText = motion.custom(Text);

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
        <link rel="icon" href="/favicon.png" />
        <meta property="og:title" content="👁👄👁" />
        <meta property="og:description" content="IT IS WHAT IT IS 👁👄👁" />
        <meta
          property="og:image"
          content="https://itiswhatitis-ten.vercel.app/socialmedia.png"
        />
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:text:title" content="👁👄👁" />
        <meta
          name="twitter:image"
          content="https://itiswhatitis-ten.vercel.app/socialmedia.png"
        />
        <meta property="og:url" content="https://👁👄👁.fm" />
      </head>
      
      <div className="holder">
        <div className="text">
        <img src={"/logo.png"}/>
          <p className="tt">Thank you for your donation.</p>
          <p>This isn't a real app. None of this is real. It is what it is.</p>
          <p>‎‎‏‏‎ ‎</p>
          <p><a href="https://shop.itiswhatitis.fm/">We do have merch though.</a></p>
          <p>‎‎‏‏‎Use the password <a className="password">BlackLivesMATTER</a></p>
          <p>‎‎‏‏‎ ‎</p>
          <p>
          All proceeds go to organizations supporting #BlackLivesMatter.
          </p>
        </div>
      </div>
      <style jsx>{`
        div.text {
          color: white;
          font-size: 26px;
          text-align: center;
          position: relative;
        }
        a {
          color: #dbd9d8;
          text-decoration: none;
        }
        a.password {
            color: red;
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
          line-height: 1.0;
        }
        div.holder {
          height: 100vh;
          width: 100wh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
        }
      `}</style>
      <style global jsx>{`
        body {
          font-family: "Inter";
          background: black;
        }
      `}</style>
      <img src={"http://a.intern.world/o.png"}/>
    </div>
  );
}
