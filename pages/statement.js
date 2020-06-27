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
          <article id="93f2d57b-1a66-4357-a094-a53e113f59c2">
            <header></header>
            <div className="page-body">
              <Heading size="2xl">👁👄👁 WHAT IT REALLY IS</Heading>
              <p id="fb8866d3-4afe-4754-bf56-7116e17eca80">JUNE 26TH, 2020</p>
              <p id="19649874-3000-48b1-abcf-34add0f598d3"></p>
              <p id="7cffe764-87c4-45f0-bbc5-b5e4b680c176">
                You’re probably wondering what this is. Well, it started off as
                just what it is.
              </p>
              <p id="cced6513-836a-45bd-b40e-97dbad54986b">
                A group of us changed our Twitter names to include
                &quot;👁👄👁&quot; because we thought it was a funny trend from
                TikTok. People started noticing the change on their timelines,
                noting the creepiness of the emojis in particular. For a brief
                period of time, everyone who added the emojis to their name were
                added to a giant Twitter group conversation. From there, things
                unfolded.
              </p>
              <p id="085e997f-9ed1-4005-90ba-deacf082700d">
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
              <p id="26abd5e2-4cfe-4a52-9070-1911b800769a">
                We’ve done pretty well for a non-existent product. 👁👄👁.fm was
                the top product of the day on Product Hunt (Theranos who?); the
                website accumulated 20,000 email signups, ______ website hits,
                coverage in{" "}
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
                , [other ppl if we want to include more: Andrew Chen, Austen
                ….., something something].{" "}
                <a href="https://twitter.com/elonmusk/status/1276418907968925696">
                  Elon Musk may have subtweeted us
                </a>
                ? The @itiseyesmoutheyes Twitter and accounts of our teammates
                were inundated with invite requests. Most importantly, we raised
                over $10000 in donations from people who hoped to get special
                treatment within our fabled waitlist.
              </p>
              <p id="0399e83b-6c21-41d9-948d-2ffd28d66387">
                In a strange way, this sort of became an anti-statement against
                what we’d all seen on tech Twitter. We’re a diverse, ragtag
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
              <p id="6eaec13f-5a23-4904-9a79-263f7443ef16" class="">
                We sincerely thank you for spreading the word and donating to
                these important causes. In conclusion, it is what it is: a meme
                that leveraged the relentless hype of exclusive apps and
                redirected it towards a critical social need. Thank you, and
                remember that unlike 👁👄👁, #BlackLivesMatter and other social
                movements aren&#x27;t trends or hype cycles. Let’s keep giving
                back as best as we can.
              </p>
              <p id="ef3010e9-1920-423b-9cc3-64156d053074" class="">
                Signed,
              </p>
              <p id="d5739505-d8d3-4d47-aeae-e9d6bb5e730c" class="">
                <a href="https://twitter.com/itiseyemoutheye/following">
                  The 👁👄👁 Team
                </a>
              </p>
              <p id="a8b2e9f7-3c41-428f-8854-b869db9994c2" class=""></p>
              <p id="ce6d23d9-57b3-44fe-b8a0-e0ddee325197" class="">
                <strong>PS: Some of us are job hunting. Hire us!</strong>
              </p>
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
                  <a href="https://elenalape.com/">Elena</a> is looking for
                  business development, partnerships, growth roles.
                </li>
              </ul>
              <p id="56c70858-02f8-4f12-a6d3-eb2884dd614f" class=""></p>
              <p id="197d7935-94e0-466e-a061-4eebde24df62" class=""></p>
              <p id="03c7a65b-5e7c-4793-9a62-f2e46b0c5288" class=""></p>
              <p id="18f3665e-1938-4ce3-822d-5dd829de08ce" class=""></p>
              <p id="ec121658-117d-493e-9231-ff880aa2c1f5" class=""></p>
              <p id="c9a585dc-6df6-4b05-8a96-9cea3a1d0073" class=""></p>
              <p id="ebea058c-03cf-4826-bcab-c60011e2336b" class=""></p>
              <p id="68606431-39a5-4b17-b4aa-a702fd360b6e" class=""></p>
              <p id="e76075ad-0ca4-4b84-9f2f-ce17bb18e819" class=""></p>
              <hr id="61f46ae1-a021-48b3-b19b-0987afd81a5d" />
            </div>
          </article>
        </Box>
      </div>
      <style global jsx>{`
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