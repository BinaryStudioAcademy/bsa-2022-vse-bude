import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render() {
    return (
      <Html lang={this.props.locale}>
        <Head>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/images/favicon/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/images/favicon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/images/favicon/favicon-16x16.png"
          />
          <link rel="manifest" href="/images/favicon/site.webmanifest" />
          <link
            href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="portal"></div>
          <div id="popover"></div>
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
