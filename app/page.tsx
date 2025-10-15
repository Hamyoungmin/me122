import Navigation from './components/Navigation';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div
      style={{
        position: 'relative',
        width: '1440px',
        height: '4811px',
        background: '#FFFFFF',
        margin: '0 auto',
      }}
    >
      <Navigation />
      {/* Copy */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: '0px',
          gap: '40px',
          position: 'absolute',
          width: '844px',
          height: '289px',
          left: '79px',
          top: '212px',
          zIndex: 100,
        }}
      >
        {/* Page title */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '0px',
            gap: '24px',
            width: '844px',
            height: '173px',
            flex: 'none',
            order: 0,
            alignSelf: 'stretch',
            flexGrow: 0,
          }}
        >
          <h1
            style={{
              width: '844px',
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
            랜딩 페이지 제목
          </h1>
          <p
            style={{
              width: '844px',
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
            상황을 설명하고, 웹사이트에 대한 추가 정보를 공유하며, 사람들이 계속 스크롤하도록 흥미를 유발하는 부제목.
          </p>
        </div>

        {/* Button */}
        <button
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '20px 32px',
            gap: '8px',
            width: '109px',
            height: '76px',
            background: '#000000',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            flex: 'none',
            order: 1,
            flexGrow: 0,
          }}
        >
          <span
            style={{
              width: '45px',
              height: '36px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '24px',
              lineHeight: '150%',
              display: 'flex',
              alignItems: 'center',
              color: '#FFFFFF',
              flex: 'none',
              order: 0,
              flexGrow: 0,
            }}
          >
            버튼
          </span>
        </button>
      </div>

      {/* Hero Image */}
      <div
        style={{
          position: 'absolute',
          height: '640px',
          left: '5.56%',
          right: '5.56%',
          top: 'calc(50% - 640px/2 - 1504.5px)',
          overflow: 'hidden',
          borderRadius: '8px',
          backgroundColor: '#F7F7F7',
        }}
      >
        <img 
          src="/Hero Image.png" 
          alt="Hero"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* 섹션 제목 */}
      <h2
        style={{
          position: 'absolute',
          width: '624px',
          height: '58px',
          left: 'calc(50% - 624px/2 - 328px)',
          top: '1371px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '48px',
          lineHeight: '58px',
          letterSpacing: '-0.02em',
          color: '#000000',
          margin: 0,
        }}
      >
        섹션 제목
      </h2>

      {/* Cards Section */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '0px',
          gap: '32px',
          position: 'absolute',
          width: '1279px',
          height: '541px',
          left: '80px',
          top: '1477px',
        }}
      >
        {[18, 19, 20].map((imgNum, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '0px',
              gap: '24px',
              width: '405px',
              height: '541px',
              flex: 'none',
              order: i,
              flexGrow: 1,
            }}
          >
            {/* Image */}
            <div
              style={{
                width: '405px',
                height: '405px',
                overflow: 'hidden',
                borderRadius: '8px',
                backgroundColor: '#F7F7F7',
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 0,
              }}
            >
              <img 
                src={`/Image (${imgNum}).png`}
                alt={`Card ${i + 1}`}
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
                width: '381px',
                height: '112px',
                flex: 'none',
                order: 1,
                flexGrow: 0,
              }}
            >
              <h3
                style={{
                  width: '381px',
                  height: '36px',
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '24px',
                  lineHeight: '150%',
                  color: '#000000',
                  margin: 0,
                  flex: 'none',
                  order: 0,
                  alignSelf: 'stretch',
                  flexGrow: 0,
                }}
              >
                부제목
              </h3>
              <p
                style={{
                  width: '381px',
                  height: '72px',
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '24px',
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
                {i === 0
                  ? '부제목에 넣고 싶은 내용을 추가하는 본문 텍스트.'
                  : i === 1
                  ? '요점에 추가하고 싶은 내용을 적을 수 있는 본문 텍스트.'
                  : '더 공유하고 싶은 내용을 적을 수 있는 본문 텍스트.'}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 섹션 제목 2 */}
      <h2
        style={{
          position: 'absolute',
          width: '624px',
          height: '58px',
          left: '80px',
          top: '2198px',
          fontFamily: 'Inter',
          fontWeight: 600,
          fontSize: '48px',
          lineHeight: '58px',
          letterSpacing: '-0.02em',
          color: '#000000',
          margin: 0,
        }}
      >
        섹션 제목
      </h2>

      {/* Text Section */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          padding: 0,
          gap: '48px',
          position: 'absolute',
          width: '516px',
          left: '79px',
          top: '2304px',
        }}
      >
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              padding: 0,
              gap: '8px',
              width: '516px',
            }}
          >
            <h3
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '24px',
                lineHeight: '150%',
                color: '#000000',
                margin: 0,
              }}
            >
              부제목
            </h3>
            <p
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '24px',
                lineHeight: '150%',
                color: '#828282',
                margin: 0,
              }}
            >
              {i === 1
                ? '요점에 추가하고 싶은 내용을 적을 수 있는 본문 텍스트.'
                : i === 2
                ? '하고 싶은 말을 적을 수 있는 본문 텍스트. 요점, 인용문, 일화를 추가해 보세요.'
                : '요점에 추가하고 싶은 내용을 적을 수 있는 본문 텍스트. 세부 정보, 설명, 맥락을 제공합니다.'}
            </p>
          </div>
        ))}
      </div>

      {/* Image Right */}
      <div
        style={{
          position: 'absolute',
          width: '704px',
          height: '704px',
          left: '736px',
          top: '2198px',
          overflow: 'hidden',
          borderRadius: '8px 0px 0px 8px',
          backgroundColor: '#F7F7F7',
        }}
      >
        <img 
          src="/Image (21).png"
          alt="Section image"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Buttons */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: 0,
          gap: '16px',
          position: 'absolute',
          left: '79px',
          top: '2831px',
        }}
      >
        <button
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '12px 24px',
            gap: '8px',
            background: '#000000',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: '24px',
            color: '#FFFFFF',
          }}
        >
          버튼
        </button>
        <button
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            padding: '12px 24px',
            gap: '8px',
            background: '#E6E6E6',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: '24px',
            color: '#000000',
          }}
        >
          보조 버튼
        </button>
      </div>

      {/* 섹션 제목 3 */}
      <h2
        style={{
          position: 'absolute',
          width: '624px',
          height: '58px',
          left: 'calc(50% - 624px/2 - 328px)',
          top: '3082px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '48px',
          lineHeight: '58px',
          letterSpacing: '-0.02em',
          color: '#000000',
          margin: 0,
        }}
      >
        섹션 제목
      </h2>

      {/* Cards Section 2 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '0px',
          gap: '31px',
          position: 'absolute',
          width: '1280px',
          height: '453px',
          left: '80px',
          top: '3188px',
        }}
      >
        {[22, 23].map((imgNum, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '0px',
              gap: '32px',
              width: '624.5px',
              height: '453px',
              flex: 'none',
              order: i,
              flexGrow: 1,
            }}
          >
            {/* Image */}
            <div
              style={{
                width: '624.5px',
                height: '341px',
                overflow: 'hidden',
                borderRadius: '8px',
                backgroundColor: '#F7F7F7',
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 0,
              }}
            >
              <img 
                src={`/Image (${imgNum}).png`}
                alt={`Card ${i + 1}`}
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
                alignItems: 'flex-start',
                padding: '0px',
                gap: '8px',
                width: i === 0 ? '548.44px' : '547.56px',
                height: '80px',
                flex: 'none',
                order: 1,
                flexGrow: 0,
              }}
            >
              <h3
                style={{
                  width: '548px',
                  height: '36px',
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  fontSize: '24px',
                  lineHeight: '150%',
                  color: '#000000',
                  margin: 0,
                  flex: 'none',
                  order: 0,
                  flexGrow: 0,
                }}
              >
                부제목
              </h3>
              <p
                style={{
                  width: '548px',
                  height: '36px',
                  fontFamily: 'Inter',
                  fontStyle: 'normal',
                  fontWeight: 400,
                  fontSize: '24px',
                  lineHeight: '150%',
                  display: 'flex',
                  alignItems: 'center',
                  color: '#828282',
                  margin: 0,
                  flex: 'none',
                  order: 1,
                  flexGrow: 0,
                }}
              >
                {i === 0
                  ? '부제목에 넣고 싶은 내용을 추가하는 본문 텍스트.'
                  : '요점에 추가하고 싶은 내용을 적을 수 있는 본문 텍스트.'}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* 섹션 제목 4 */}
      <h2
        style={{
          position: 'absolute',
          width: '625px',
          height: '58px',
          left: 'calc(50% - 625px/2 - 327.5px)',
          top: '3857px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '48px',
          lineHeight: '58px',
          letterSpacing: '-0.02em',
          color: '#000000',
          margin: 0,
        }}
      >
        섹션 제목
      </h2>

      {/* Customer Quotes */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          padding: '0px',
          gap: '32px',
          position: 'absolute',
          width: '1280px',
          height: '198px',
          left: '80px',
          top: '3963px',
        }}
      >
        {['"훌륭한 칭찬 한마디"', '"환상적인 피드백"', '"진정으로 빛나는 리뷰"'].map((quote, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: '32px',
              gap: '48px',
              width: '405.33px',
              height: '198px',
              background: '#FFFFFF',
              border: '1px solid #E6E6E6',
              borderRadius: '12px',
              flex: 'none',
              order: i,
              flexGrow: 1,
            }}
          >
            <p
              style={{
                width: '341.33px',
                height: '36px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '24px',
                lineHeight: '150%',
                color: '#000000',
                margin: 0,
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 0,
              }}
            >
              {quote}
            </p>
            
            {/* Avatar */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '0px',
                gap: '16px',
                width: '91px',
                height: '50px',
                flex: 'none',
                order: 1,
                flexGrow: 0,
              }}
            >
              <div
                style={{
                  width: '45px',
                  height: '45px',
                  background: '#D9D9D9',
                  borderRadius: '50%',
                  flex: 'none',
                  order: 0,
                  flexGrow: 0,
                }}
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  padding: '0px',
                  gap: '2px',
                  width: '30px',
                  height: '50px',
                  flex: 'none',
                  order: 1,
                  flexGrow: 0,
                }}
              >
                <div
                  style={{
                    width: '30px',
                    height: '24px',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '150%',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#000000',
                    flex: 'none',
                    order: 0,
                    flexGrow: 0,
                  }}
                >
                  이름
                </div>
                <div
                  style={{
                    width: '30px',
                    height: '24px',
                    fontFamily: 'Inter',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '150%',
                    display: 'flex',
                    alignItems: 'center',
                    color: '#828282',
                    flex: 'none',
                    order: 1,
                    flexGrow: 0,
                  }}
                >
                  설명
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div
        style={{
          position: 'absolute',
          width: '1440px',
          height: '236px',
          left: '0px',
          top: '4311px',
          background: '#F7F7F7',
        }}
      >
        <h2
          style={{
            position: 'absolute',
            width: '625px',
            height: '58px',
            left: 'calc(50% - 625px/2 - 327.5px)',
            top: '89px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '48px',
            lineHeight: '58px',
            letterSpacing: '-0.02em',
            color: '#000000',
            margin: 0,
          }}
        >
          섹션 제목
        </h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
            padding: '0px',
            gap: '24px',
            position: 'absolute',
            width: '292px',
            height: '76px',
            right: '80px',
            top: '80px',
          }}
        >
          <button
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '20px 32px',
              gap: '8px',
              width: '109px',
              height: '76px',
              background: '#000000',
              boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              flex: 'none',
              order: 0,
              flexGrow: 0,
            }}
          >
            <span
              style={{
                width: '45px',
                height: '36px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '24px',
                lineHeight: '150%',
                display: 'flex',
                alignItems: 'center',
                color: '#FFFFFF',
                flex: 'none',
                order: 0,
                flexGrow: 0,
              }}
            >
              버튼
            </span>
          </button>
          <button
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '20px 32px',
              gap: '8px',
              width: '159px',
              height: '76px',
              background: '#E6E6E6',
              boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              flex: 'none',
              order: 1,
              flexGrow: 0,
            }}
          >
            <span
              style={{
                width: '95px',
                height: '36px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '24px',
                lineHeight: '150%',
                display: 'flex',
                alignItems: 'center',
                color: 'rgba(0, 0, 0, 0.9)',
                flex: 'none',
                order: 0,
                flexGrow: 0,
              }}
            >
              보조 버튼
            </span>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}
