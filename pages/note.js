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
    <ThemeProvider>
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <CSSReset />
      <style jsx>{`
        .page-body {
          line-height: 1.6;
          padding-top: 48px;
          padding-bottom: 48px;
          margin-left: 16px;
          margin-right: 16px;
        }
        p {
          margin: 24px 0;
        }
      `}</style>
      <div>
        <Box maxWidth="700px" margin="auto">
          <article className="markdown-body" id="body">
            <p><Heading size="2xl">👁👄👁</Heading></p>
            <p><Heading size="2xl">WHAT IT REALLY IS!</Heading></p>
            <p>JUNE 26TH, 2020</p>
            
            <p>In a strange way, this sort of became an anti-statement against what we’d all seen on tech Twitter. We’re
              a <a href="/demographics.png">diverse</a>, ragtag group of young technologists tired of the
              status quo tech industry, and thought that we could make the industry think a bit more about its actions.
              Despite calls-to-action like that “<a href="https://a16z.com/2020/04/18/its-time-to-build/">It’s Time to
                Build</a>” essay we’ve all read, most of the industry (from product teams to VC) still stays obsessed
              with exclusive social apps that regularly ignore — or even silence — real needs faced by marginalized
              people all over the world, and exclude these folks from the building process. As an industry, we need to
              do better.</p>
            <p>We sincerely thank you for spreading the word and donating to these important causes. In conclusion, it
            is what it is: a meme that leveraged the relentless hype of exclusive apps and redirected it towards a
            critical social need. Thank you, and remember that unlike 👁👄👁, #BlackLivesMatter and other social
              movements aren't trends or hype cycles. Let’s keep giving back as best as we can.</p>
            <p>Signed,</p>
            <p><a href="https://twitter.com/itiseyemoutheye/following">The 👁👄👁 Team</a></p>
            <br />

            <p>
              <a href="https://shop.itiswhatitis.fm/">
                We do have merch though.
                </a>
            </p>
            <p>
              ‎‎‏‏‎Use the password{" "}
              <strong className="password">BlackLivesMATTER</strong>
            </p>
            <br />

            <p><strong>P.S.: Some of us are job hunting. Hire us!</strong></p>
            <ul>
              <li><a href="http://dtbui.com/">David</a> is looking for software engineering and design roles.</li>
              <li><a href="https://yasmeenroumie.com/">Yasmeen</a> is looking for software engineering roles.</li>
              <li><a href="http://gefenskolnick.com/">Gefen</a> is looking for product management roles.</li>
              <li><a href="https://www.linkedin.com/in/joelmontanoucf/">Joel</a> is looking for product management and
                business development roles.
              </li>
              <li><a href="https://www.enandini.com/">Eshita</a> is looking for data and product management roles.</li>
              <li><a href="https://www.linkedin.com/in/elenalape">Elena</a> is looking for business development,
                partnerships, growth roles.
              </li>
            </ul>
          </article>
        </Box>
        <img src={"https://a.intern.world/statement.png"} />
      </div>
      <style global jsx>{`
      article {
        padding-top: 4em;
        padding-bottom: 4em;
        padding-left: 2em;
        padding-right: 2em;
      }
        body {
          font-family: "Inter", Sans-serif;
          background: #111111;
          color: white;
        }
        p {
          margin-bottom: 12px;
          line-height: 160%;
        }
        a {
          color: #add8e6;
          font-weight: bold;
          text-decoration: underline !important;
        }
        a:hover {
          color: #add8e6;
          font-weight: bold;
        }
      `}</style>
    </ThemeProvider>
  );
}
