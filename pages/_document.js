import Document, { Head, Html, Main, NextScript } from 'next/document'

// page 폴더의 하위 모듈로 사용한다.
// overriding 하기 위해 확장이 가능한 class component를 사용한다.
class MyDocument extends Document {
  render() {
    return (
      <Html>
        {/* Html에 lang 속성을 추가할 수 있다. */}
        <Head />
        <body>
          {/* portals 구현 시 overlay 추가해서 root 외부에 접근할 수 있다. */}
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
