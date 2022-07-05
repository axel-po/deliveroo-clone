import Document, { Html, Head, Main, NextScript } from "next/document";

export class MyDocument extends Document {
  render() {
    return (
      <Html lang='fr'>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}


export default MyDocument;