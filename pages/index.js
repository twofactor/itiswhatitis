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
// import Widget from '../components/Widget'

import { motion } from "framer-motion";

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
          <p className="emoji">👁👄👁</p>
          <p className="tt">It is what it is. We're live.</p>
          <p>Donate and discover.</p>
          <p>‎‎‏‏‎ ‎</p>
          <p>Donate to any of</p>
          <p>
            <a href="https://thelovelandfoundation.org/loveland-therapy-fund/">
              a. Loveland Foundation
            </a>
          </p>
          <p>
            <a href="https://www.innocenceproject.org/donate/">
              b. The Innocence Project
            </a>
          </p>
          <p>
            <a href="https://www.theokraproject.com/">c. The Okra Project</a>
          </p>
          <p>‎‎‏‏‎ ‎</p>
          <p>
            and{" "}
            <a href="https://google.com" className="submit">
              {" "}
              submit your receipt
            </a>{" "}
            to find out.{" "}
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
          height: 100vh;
          width: 100wh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-content: center;
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
