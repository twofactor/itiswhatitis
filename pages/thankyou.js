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




export default function ThankYou() {
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
          <p className="tt">Thank you for your donation.</p>
          <p>‎‎‏‏‎ ‎</p>
          <p>This isn't a real app. None of this is real. It is what it is.</p>
          <p>‎‎‏‏‎ ‎</p>
          <p><a href="https://it-is-eyes-mouth-eyes.myshopify.com/">We do have merch though.</a></p>
          <p>‎‎‏‏‎Use the password <a className="password">BlackLivesMATTER</a></p>
          <p>‎‎‏‏‎ ‎</p>
          <p>All proceeds go to organizations supporting #BlackLivesMatter.</p>

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
        }
        a:hover {
          color: white;
        }
        a.password {
            color: red;
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