export default function Home() {
  return (
    <div>
      <head>
        {" "}
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <span>It is what it is. We're live.</span>
      <p>Donate and discover.</p>
      <br></br>
      <p>Donate and discover.</p>
      <style jsx>{`
        span {
          color: white;
        }
        p {
          color: gray;
        }
        div {
        }
        @media (max-width: 600px) {
          div {
            background: blue;
          }
        }
      `}</style>
      <style global jsx>{`
        body {
          font-family: "Noto Sans";
          background: black;
        }
      `}</style>
    </div>
  );
}
