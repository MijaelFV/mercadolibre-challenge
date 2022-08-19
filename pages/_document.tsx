import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initalProps = await Document.getInitialProps(ctx)

    return initalProps
  }

  render() {
    return (
      <Html>
        <Head>
          {/* <meta charSet="UTF-8" /> */}
          <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
          {/* <title>Mercado Libre</title> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument