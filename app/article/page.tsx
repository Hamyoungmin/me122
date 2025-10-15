import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Article() {
  return (
    <div
      style={{
        position: 'relative',
        width: '1440px',
        height: '3603px',
        background: '#FFFFFF',
        margin: '0 auto',
      }}
    >
      <Navigation />

      {/* Article title */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: '0px',
          gap: '24px',
          position: 'absolute',
          height: '173px',
          left: '5.56%',
          right: '43.54%',
          top: '244px',
        }}
      >
        <h1
          style={{
            width: '733px',
            height: '77px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '64px',
            lineHeight: '77px',
            letterSpacing: '-0.02em',
            color: '#000000',
            margin: 0,
            flex: 'none',
            order: 0,
            alignSelf: 'stretch',
            flexGrow: 0,
          }}
        >
          기사 또는 게시물 제목
        </h1>

        <p
          style={{
            width: '733px',
            height: '72px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '24px',
            lineHeight: '150%',
            display: 'flex',
            alignItems: 'center',
            color: 'rgba(0, 0, 0, 0.75)',
            margin: 0,
            flex: 'none',
            order: 1,
            alignSelf: 'stretch',
            flexGrow: 0,
          }}
        >
          상황을 설명하고, 작성자에 대한 추가 정보를 공유하며, 사람들이 계속 읽고 싶도록 흥미를 유발하는 부제목
        </p>
      </div>

      {/* Image */}
      <div
        style={{
          position: 'absolute',
          height: '650px',
          left: '5.56%',
          right: '5.49%',
          top: '497px',
          overflow: 'hidden',
          borderRadius: '8px',
          backgroundColor: '#F7F7F7',
        }}
      >
        <img 
          src="/Image (12).png" 
          alt="Article main"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Paragraph 1 */}
      <div
        style={{
          position: 'absolute',
          height: '450px',
          left: '20.76%',
          right: '20.76%',
          top: '1227px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '20px',
          lineHeight: '150%',
          color: '#000000',
        }}
      >
        <p style={{ margin: 0 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          <br /><br />
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
        </p>
      </div>

      {/* Images */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          padding: '0px',
          gap: '32px',
          position: 'absolute',
          width: '1280px',
          height: '436px',
          left: 'calc(50% - 1280px/2)',
          top: '1757px',
        }}
      >
        <div
          style={{
            width: '624px',
            height: '436px',
            overflow: 'hidden',
            borderRadius: '8px',
            backgroundColor: '#F7F7F7',
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        >
          <img 
            src="/Image (13).png" 
            alt="Content image 1"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
        <div
          style={{
            width: '624px',
            height: '436px',
            overflow: 'hidden',
            borderRadius: '8px',
            backgroundColor: '#F7F7F7',
            flex: 'none',
            order: 1,
            flexGrow: 0,
          }}
        >
          <img 
            src="/Image (14).png" 
            alt="Content image 2"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        </div>
      </div>

      {/* Paragraph 2 */}
      <div
        style={{
          position: 'absolute',
          height: '270px',
          left: '20.76%',
          right: '20.76%',
          top: '2273px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '20px',
          lineHeight: '150%',
          color: '#000000',
        }}
      >
        <p style={{ margin: 0 }}>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
        </p>
      </div>

      {/* 관련 기사 또는 게시물 */}
      <h2
        style={{
          position: 'absolute',
          width: '625px',
          height: '44px',
          left: '80px',
          top: '2663px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '40px',
          lineHeight: '110%',
          color: '#000000',
          margin: 0,
        }}
      >
        관련 기사 또는 게시물
      </h2>

      {/* Cards */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          padding: '0px',
          gap: '32px',
          position: 'absolute',
          width: '1276px',
          height: '434px',
          left: '81px',
          top: '2755px',
        }}
      >
        {[15, 16, 17].map((i, index) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '0px',
              gap: '24px',
              width: '404px',
              height: '434px',
              flex: 'none',
              order: index,
              flexGrow: 0,
            }}
          >
            {/* Image */}
            <div
              style={{
                width: '404px',
                height: '346px',
                overflow: 'hidden',
                borderRadius: '8px',
                backgroundColor: '#F7F7F7',
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 1,
              }}
            >
              <img 
                src={`/Image (${i}).png`}
                alt={`Related article ${index + 1}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </div>

            {/* Copy */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: '0px',
                gap: '4px',
                width: '404px',
                height: '64px',
                flex: 'none',
                order: 1,
                alignSelf: 'stretch',
                flexGrow: 0,
              }}
            >
              <h3
                style={{
                  width: '404px',
                  height: '30px',
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: '150%',
                  color: '#000000',
                  margin: 0,
                  flex: 'none',
                  order: 0,
                  alignSelf: 'stretch',
                  flexGrow: 0,
                }}
              >
                제목
              </h3>
              <p
                style={{
                  width: '404px',
                  height: '30px',
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: '150%',
                  display: 'flex',
                  alignItems: 'center',
                  color: '#828282',
                  margin: 0,
                  flex: 'none',
                  order: 1,
                  alignSelf: 'stretch',
                  flexGrow: 0,
                }}
              >
                작성자
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div
        style={{
          position: 'absolute',
          height: '264px',
          left: '-1px',
          right: '1px',
          top: '3339px',
        }}
      >
        <Footer />
      </div>
    </div>
  );
}
