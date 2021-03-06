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
    
            <p>You’re probably wondering what this is. Well, it started off as just what it is.</p>
    
            <p>A group of us changed our Twitter names to include "👁👄👁" because we thought it was a funny trend from
            TikTok. People started noticing the change on their timelines, noting the creepiness of the emojis in
            particular. For a brief period of time, everyone who added the emojis to their name were added to a giant
              Twitter group conversation. From there, things unfolded.</p>
    
            What started out as a meme in our small group chat grew bigger than we ever imagined. So we thought about
            how to make use of the hype cycle we’d stumbled upon. But honestly, we didn’t have to think too hard: in
            this moment, there’s pretty much no greater issue to amplify than the systemic racism and anti-Blackness
            much of the world is only beginning to wake up to. We’re excited that we could use our newfound platform
              to drive action towards a few causes that are doing important work towards racial justice:  
              <a href="https://thelovelandfoundation.org/loveland-therapy-fund/">Loveland Foundation Therapy Fund</a>, 
              <a href="https://www.theokraproject.com/">The Okra Project</a>, 
              <a href="https://www.innocenceproject.org/">The Innocence Project</a>, and others.
            
    
            <p>We’ve done pretty well for a non-existent product. 👁👄👁.fm was the top product of the day on Product
            Hunt (Theranos who?); the website accumulated 20,000 email signups, thousands of tweets sharing the link,
              coverage in <a
                href="https://www.independent.co.uk/life-style/gadgets-and-tech/news/face-emoji-twitter-it-is-what-it-is-promo-a9587351.html">The
                Independent</a>, <a
                href="https://www.forbes.com/sites/paularmstrongtech/2020/06/26/what-is--oh-it-is-what-it-is/amp/?__twitter_impression=true">Forbes</a>,
              we got shoutouts from <a href="https://constine.substack.com/p/what-does-mean-well">Josh Constine</a>, <a
                href="https://wfh.substack.com/p/the-6-builders-who-will-thrive-in">Brianne Kimmel</a>, <a
                  href="https://www.reddit.com/r/OutOfTheLoop/comments/hg26ip/whats_the_deal_with_this_it_is_what_it_is_app/">some
                folks on Reddit puzzled over who we were</a>, <a
                href="https://twitter.com/andrewchen/status/1276585276626726913?s=20">Andrew Chen</a>, <a
                  href="https://twitter.com/shannonpurser/status/1276631647157235712">Shannon Purser of Stranger
                Things</a>, and <a href="https://twitter.com/elonmusk/status/1276418907968925696">Elon Musk may have
                subtweeted us</a>? The <a href="https://twitter.com/itiseyemoutheye">@itiseyemoutheye</a> Twitter and
              accounts of our teammates were inundated with invite requests. Most importantly, we raised over $60,000 in
              donations from people who hoped to get special treatment within our fabled waitlist.</p>
  
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
