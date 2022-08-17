import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GoogleFonts } from 'next-google-fonts';

class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang={this.props.locale}>
        <Head>
          <GoogleFonts href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;600;700;800&display=swap" />
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
