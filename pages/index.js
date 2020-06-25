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
  Button
} from "@chakra-ui/core";

import { motion } from "framer-motion";

const MotionText = motion.custom(Text);

const DynamicComponentWithNoSSR = dynamic(
  () => import("../components/Autoplay"),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="container">
      <div style={{ display: "hidden " }}>
        This website literally doesnt mean anything. We're not a social app.
      </div>
      <Head>
        <title>👁👄👁</title>
        <link rel="icon" href="/favicon.png" />
        <meta property="og:title" content="👁👄👁" />
        <meta property="og:description" content="IT IS WHAT IT IS" />
        <meta
          property="og:image"
          content="https://itiswhatitis-ten.vercel.app/socialmedia.png"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="twitter:card" content="player" />
      </Head>
      <ThemeProvider>
        <CSSReset />
        <main>
          <motion.div
            animate={{
              rotate: [-1, 1, -1],
              backgroundColor: [
                "#ffffff",
                "#ff0000",
                "#00ff00",
                "#0000ff",
                "#ffffff"
              ]
            }}
            transition={{ loop: Infinity, duration: 8 }}
          >
            <Flex
              width="100%"
              height="100vh"
              align="center"
              justify="center"
              flexDirection="row"
            >
              <Box>
                <MotionText
                  animate={{
                    scale: [0.1, 0.1, 0.1, 1, 0.1, 0.1, 0.1, 1, 0.1, 1, 0.1],
                    opacity: [0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0]
                  }}
                  transition={{
                    loop: Infinity,
                    duration: 4
                  }}
                  fontSize="2xl"
                  fontWeight="bold"
                >
                  It is what it is
                </MotionText>
                <Box height="60vh"></Box>
                <MotionText
                  animate={{
                    scale: [0.1, 1, 0.1, 0.1, 0.1, 0.1, 1, 0.1],
                    opacity: [0, 1, 0, 0, 0, 0, 1, 0]
                  }}
                  transition={{
                    loop: Infinity,
                    duration: 4
                  }}
                  fontSize="2xl"
                  fontWeight="bold"
                >
                  It is what it is
                </MotionText>
              </Box>
              <Flex
                flexGrow="2"
                align="center"
                justify="center"
                flexDirection="column"
              >
                <MotionText
                  animate={{
                    scale: [
                      2,
                      4,
                      1,
                      0.5,
                      2,
                      4,
                      0.8,
                      2,
                      1,
                      4.3,
                      2,
                      4,
                      2,
                      3,
                      1,
                      5,
                      3,
                      2,
                      3,
                      4,
                      3.5,
                      2.5,
                      1.5,
                      1,
                      3
                    ],
                    x: [
                      155,
                      83,
                      178,
                      141,
                      -104,
                      -139,
                      -273,
                      -101,
                      -84,
                      -192,
                      238,
                      179,
                      -29,
                      177,
                      -19,
                      140,
                      -292,
                      124,
                      144,
                      -247,
                      135,
                      -237,
                      149,
                      -257
                    ],
                    y: [
                      -55,
                      60,
                      -291,
                      -214,
                      257,
                      -23,
                      -189,
                      49,
                      -76,
                      2,
                      -34,
                      -142,
                      -287,
                      219,
                      -250,
                      47,
                      212,
                      119,
                      -188,
                      41,
                      -248,
                      -128,
                      -195,
                      30,
                      202,
                      20,
                      197,
                      -100
                    ]
                  }}
                  transition={{
                    loop: Infinity,
                    duration: 8
                  }}
                  fontSize="4xl"
                  flexGrow="2"
                >
                  👁👄👁
                </MotionText>
                <Signup />
              </Flex>
              <Box>
                <MotionText
                  animate={{
                    scale: [0.1, 0.1, 0.1, 1, 0.1, 1, 0.1],
                    opacity: [0, 0, 0, 1, 0, 1, 0]
                  }}
                  transition={{
                    loop: Infinity,
                    duration: 4
                  }}
                  fontSize="2xl"
                  fontWeight="bold"
                >
                  It is what it is
                </MotionText>
                <Box height="60vh"></Box>
                <MotionText
                  animate={{
                    scale: [0.1, 1, 0.1, 0.1, 1, 0.1],
                    opacity: [0, 1, 0, 0, 1, 0]
                  }}
                  transition={{
                    loop: Infinity,
                    duration: 4
                  }}
                  fontSize="2xl"
                  fontWeight="bold"
                >
                  It is what it is
                </MotionText>
              </Box>
              <Box width="1px" height="1px" opacity="0">
                <DynamicComponentWithNoSSR />
              </Box>
            </Flex>
          </motion.div>
        </main>
      </ThemeProvider>
    </div>
  );
}
