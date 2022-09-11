import Document, { Html, Head, Main, NextScript } from 'next/document';

class CustomDocument extends Document {
  render() {
    return (
      <Html lang={this.props.locale}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="As an online auction platform, “Vse-bude” provides a simple and secure environment for anyone who wants to both support Ukraine and sell an item which they no longer find a need in and hand it over to new potential owners via the auction bidding system. The funds that will be raised during those auctions will be donated to one of Ukraine's accredited charity organisations/funds and the item will be delivered to its new owner."
          />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="theme-color" content="#f5f5f5" />
          <link rel="shortcut icon" href="/images/favicon/favicon.ico" />
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
          <div id="tooltip" />
          <div id="popover" />
          <div id="modal" />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
