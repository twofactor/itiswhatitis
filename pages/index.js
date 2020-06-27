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
      <CSSReset />
      <div>
        <Box
          maxWidth="700px"
          margin="auto"
          pt="48px"
          pb="48px"
          pl="12px"
          pr="12px"
        >
          <article id="93f2d57b-1a66-4357-a094-a53e113f59c2">
            <header></header>
            <div class="page-body">
              <Heading size="2xl">👁👄👁 WHAT IT REALLY IS</Heading>
              <p id="fb8866d3-4afe-4754-bf56-7116e17eca80">JUNE 26TH, 2020</p>
              <p id="7cffe764-87c4-45f0-bbc5-b5e4b680c176" class="">
                You’re probably wondering what this is. Well, it started off as
                just what it is.
              </p>
              <br />
              <p id="cced6513-836a-45bd-b40e-97dbad54986b" class="">
                A group of us changed our Twitter names to include
                &quot;👁👄👁&quot; because we thought it was a funny trend from
                TikTok. People started noticing the change on their timelines,
                noting the creepiness of the emojis in particular. For a brief
                period of time, everyone who added the emojis to their name were
                added to a giant Twitter group conversation. From there, things
                unfolded.
              </p>
              <br />
              <p id="085e997f-9ed1-4005-90ba-deacf082700d" class="">
                What started out as a meme in our small group chat grew bigger
                than we ever imagined. So we thought about how to make use of
                the hype cycle we’d stumbled upon. But honestly, we didn’t have
                to think too hard: in this moment, there’s pretty much no
                greater issue to amplify than the systemic racism and
                anti-Blackness much of the world is only beginning to wake up
                to. We’re excited that we could use our newfound platform to
                drive action towards a few causes that are doing important work
                towards racial justice:{" "}
                <a href="https://thelovelandfoundation.org/loveland-therapy-fund/">
                  Loveland Foundation Therapy Fund
                </a>
                , <a href="https://www.theokraproject.com/">The Okra Project</a>
                ,{" "}
                <a href="https://www.innocenceproject.org/">
                  The Innocence Project
                </a>
                , and others.
              </p>
              <br />
              <p id="26abd5e2-4cfe-4a52-9070-1911b800769a" class="">
                We’ve done pretty well for a non-existent product. 👁👄👁.fm was
                the top product of the day on Product Hunt (Theranos who?); the
                website accumulated 20,000 email signups, thousands of tweets
                sharing the link, coverage in{" "}
                <a href="https://www.independent.co.uk/life-style/gadgets-and-tech/news/face-emoji-twitter-it-is-what-it-is-promo-a9587351.html">
                  The Independent
                </a>
                ,{" "}
                <a href="https://www.forbes.com/sites/paularmstrongtech/2020/06/26/what-is--oh-it-is-what-it-is/amp/?__twitter_impression=true">
                  Forbes
                </a>
                , we got shoutouts from{" "}
                <a href="https://constine.substack.com/p/what-does-mean-well">
                  Josh Constine
                </a>
                ,{" "}
                <a href="https://wfh.substack.com/p/the-6-builders-who-will-thrive-in">
                  Brianne Kimmel
                </a>
                ,{" "}
                <a href="https://www.reddit.com/r/OutOfTheLoop/comments/hg26ip/whats_the_deal_with_this_it_is_what_it_is_app/">
                  some folks on Reddit puzzled over who we were
                </a>
                ,{" "}
                <a href="https://twitter.com/andrewchen/status/1276585276626726913?s=20">
                  Andrew Chen
                </a>
                ,{" "}
                <a href="https://twitter.com/shannonpurser/status/1276631647157235712">
                  Shannon Purser of Stranger Things
                </a>
                , and{" "}
                <a href="https://twitter.com/elonmusk/status/1276418907968925696">
                  Elon Musk may have subtweeted us
                </a>
                ? The{" "}
                <a href="https://twitter.com/itiseyemoutheye">
                  @itiseyemoutheye
                </a>{" "}
                Twitter and accounts of our teammates were inundated with invite
                requests. Most importantly, we raised over $15,000 in donations
                from people who hoped to get special treatment within our fabled
                waitlist.
              </p>
              <br />
              <p id="0399e83b-6c21-41d9-948d-2ffd28d66387" class="">
                In a strange way, this sort of became an anti-statement against
                what we’d all seen on tech Twitter. We’re a{" "}
                <a href="https://i.imgur.com/ld8FrUD.png">diverse</a>, ragtag
                group of young technologists tired of the status quo tech
                industry, and thought that we could make the industry think a
                bit more about its actions. Despite calls-to-action like that “
                <a href="https://a16z.com/2020/04/18/its-time-to-build/">
                  It’s Time to Build
                </a>
                ” essay we’ve all read, most of the industry (from product teams
                to VC) still stays obsessed with exclusive social apps that
                regularly ignore — or even silence — real needs faced by
                marginalized people all over the world, and exclude these folks
                from the building process. As an industry, we need to do better.
              </p>
              <br />
              <p id="6eaec13f-5a23-4904-9a79-263f7443ef16" class="">
                We sincerely thank you for spreading the word and donating to
                these important causes. In conclusion, it is what it is: a meme
                that leveraged the relentless hype of exclusive apps and
                redirected it towards a critical social need. Thank you, and
                remember that unlike 👁👄👁, #BlackLivesMatter and other social
                movements aren&#x27;t trends or hype cycles. Let’s keep giving
                back as best as we can.
              </p>
              <br />
              <p id="ef3010e9-1920-423b-9cc3-64156d053074" class="">
                Signed,
              </p>
              <p id="d5739505-d8d3-4d47-aeae-e9d6bb5e730c" class="">
                <a href="https://twitter.com/itiseyemoutheye/following">
                  The 👁👄👁 Team
                </a>
              </p>
              <br />
              <br />
              <br />
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
              <br />
              <br />
              <br />

              <strong>P.S.: Some of us are job hunting. Hire us!</strong>

              <ul
                id="7c639fef-2864-4b1b-b6b8-1bb701c1df44"
                class="bulleted-list"
              >
                <li>
                  <a href="http://dtbui.com/">David</a> is looking for software
                  engineering and design roles.
                </li>
              </ul>
              <ul
                id="d81ac2a2-3b65-4711-b5f2-e995fe3c896c"
                class="bulleted-list"
              >
                <li>
                  <a href="https://yasmeenroumie.com/">Yasmeen</a> is looking
                  for software engineering roles.
                </li>
              </ul>
              <ul
                id="0c29dcb8-2ef1-4061-b414-0dc96cc7e8c3"
                class="bulleted-list"
              >
                <li>
                  <a href="http://gefenskolnick.com/">Gefen</a> is looking for
                  product management roles.
                </li>
              </ul>
              <ul
                id="9c2bc233-ebaf-4973-87e8-e12ecca1042d"
                class="bulleted-list"
              >
                <li>
                  <a href="https://www.linkedin.com/in/joelmontanoucf/">Joel</a>{" "}
                  is looking for product management and business development
                  roles.
                </li>
              </ul>
              <ul
                id="09425ca1-de3a-4809-ae6f-2be5681ff361"
                class="bulleted-list"
              >
                <li>
                  <a href="https://www.enandini.com/">Eshita</a> is looking for
                  data and product management roles.
                </li>
              </ul>
              <ul
                id="9372fd92-a761-48d5-83cf-e191e3b4db0a"
                class="bulleted-list"
              >
                <li>
                  <a href="https://www.linkedin.com/in/elenalape">Elena</a> is
                  looking for business development, partnerships, growth roles.
                </li>
              </ul>
              <br />
              <br />
              <br />
            </div>
          </article>
        </Box>
      </div>
      <style global jsx>{`
        body {
          font-family: "Inter", Sans-serif;
        }

        p {
          margin-bottom: 20px;
          line-height: 160%;
        }

        a {
          color: #add8e6;
          font-weight: bold;
        }

        a:hover {
          color: #add8e6;
          font-weight: bold;
          text-decoration: underline;
        }
      `}</style>
    </ThemeProvider>
  );
}
