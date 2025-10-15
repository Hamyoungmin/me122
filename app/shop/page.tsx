import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Shop() {
  return (
    <div
      style={{
        position: 'relative',
        width: '1442px',
        height: '3905px',
        background: '#FFFFFF',
        margin: '0 auto',
      }}
    >
      {/* Header with image */}
      <div
        style={{
          position: 'absolute',
          width: '1442px',
          height: '720px',
          left: 'calc(50% - 1442px/2 - 1px)',
          top: 0,
          background: "url('/Image%20(7).png') center/cover, #F7F7F7",
        }}
      >
        {/* Dimmer */}
        <div
          style={{
            position: 'absolute',
            width: '1442px',
            height: '720px',
            left: 0,
            top: 0,
            background: 'rgba(0, 0, 0, 0.24)',
          }}
        />

        {/* Navigation */}
        <div style={{ position: 'relative', zIndex: 10 }}>
          <Navigation variant="transparent" />
        </div>

        {/* Copy */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 0,
            gap: '40px',
            position: 'absolute',
            width: '844px',
            height: '256px',
            left: 'calc(50% - 844px/2)',
            top: '284px',
            zIndex: 5,
          }}
        >
          {/* Page Title */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: 0,
              gap: '16px',
              width: '844px',
              height: '140px',
              flex: 'none',
              order: 0,
              alignSelf: 'stretch',
              flexGrow: 0,
            }}
          >
            {/* 쇼핑 사이트 이름 */}
            <h1
              style={{
                width: '844px',
                height: '90px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 700,
                fontSize: '64px',
                lineHeight: '140%',
                textAlign: 'center',
                letterSpacing: '-0.02em',
                color: '#FFFFFF',
                margin: 0,
                flex: 'none',
                order: 0,
                alignSelf: 'stretch',
                flexGrow: 0,
              }}
            >
              쇼핑 사이트 이름
            </h1>

            {/* 쇼핑 사이트 설명이 포함된 부제목 */}
            <p
              style={{
                width: '844px',
                height: '34px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '24px',
                lineHeight: '140%',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                color: '#FFFFFF',
                margin: 0,
                flex: 'none',
                order: 1,
                alignSelf: 'stretch',
                flexGrow: 0,
              }}
            >
              쇼핑 사이트 설명이 포함된 부제목
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
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '24px',
                lineHeight: '150%',
                display: 'flex',
                alignItems: 'center',
                color: '#FFFFFF',
              }}
            >
              버튼
            </span>
          </button>
        </div>
      </div>

      {/* Image - 오른쪽 상단 */}
      <div
        style={{
          position: 'absolute',
          height: '400px',
          left: '51.04%',
          right: '5.69%',
          top: '840px',
          background: "url('/Image%20(8).png') center/cover, #F7F7F7",
          borderRadius: '8px',
        }}
      />

      {/* Copy - 왼쪽 상단 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: 0,
          gap: '24px',
          position: 'absolute',
          height: '228px',
          left: '5.55%',
          right: '58.67%',
          top: '926px',
        }}
      >
        <h2
          style={{
            width: '516px',
            height: '48px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '40px',
            lineHeight: '120%',
            color: '#000000',
            margin: 0,
            flex: 'none',
            order: 0,
            alignSelf: 'stretch',
            flexGrow: 0,
          }}
        >
          제목
        </h2>

        <p
          style={{
            width: '516px',
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
          이 섹션의 부제목 길이는 원하는 대로 길거나 짧게 입력할 수 있습니다
        </p>

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '48px',
            width: '284px',
            height: '60px',
            flex: 'none',
            order: 2,
            flexGrow: 0,
          }}
        >
          <button
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '12px 24px',
              gap: '8px',
              width: '93px',
              height: '60px',
              background: '#000000',
              boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '24px',
                lineHeight: '150%',
                color: '#FFFFFF',
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
              padding: '12px 24px',
              gap: '8px',
              width: '143px',
              height: '60px',
              background: '#E6E6E6',
              boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '24px',
                lineHeight: '150%',
                color: '#000000',
              }}
            >
              보조 버튼
            </span>
          </button>
        </div>
      </div>

      {/* Image - 왼쪽 하단 */}
      <div
        style={{
          position: 'absolute',
          height: '400px',
          left: '5.55%',
          right: '51.11%',
          top: '1320px',
          background: "url('/Image%20(9).png') center/cover, #F7F7F7",
          borderRadius: '8px',
        }}
      />

      {/* Copy - 오른쪽 하단 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: 0,
          gap: '24px',
          position: 'absolute',
          height: '228px',
          left: '58.53%',
          right: '5.69%',
          top: '1406px',
        }}
      >
        <h2
          style={{
            width: '516px',
            height: '48px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '40px',
            lineHeight: '120%',
            color: '#000000',
            margin: 0,
            flex: 'none',
            order: 0,
            alignSelf: 'stretch',
            flexGrow: 0,
          }}
        >
          제목
        </h2>

        <p
          style={{
            width: '516px',
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
          이 섹션의 부제목 길이는 원하는 대로 길거나 짧게 입력할 수 있습니다
        </p>

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '48px',
            width: '284px',
            height: '60px',
            flex: 'none',
            order: 2,
            flexGrow: 0,
          }}
        >
          <button
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              padding: '12px 24px',
              gap: '8px',
              width: '93px',
              height: '60px',
              background: '#000000',
              boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '24px',
                lineHeight: '150%',
                color: '#FFFFFF',
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
              padding: '12px 24px',
              gap: '8px',
              width: '143px',
              height: '60px',
              background: '#E6E6E6',
              boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <span
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '24px',
                lineHeight: '150%',
                color: '#000000',
              }}
            >
              보조 버튼
            </span>
          </button>
        </div>
      </div>

      {/* 섹션 제목 - 두 번째 */}
      <h2
        style={{
          position: 'absolute',
          width: '742px',
          height: '58px',
          left: '80px',
          top: '1870px',
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

      {/* Card big */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 0,
          gap: '24px',
          position: 'absolute',
          width: '735px',
          height: '863px',
          left: '80px',
          top: '1976px',
        }}
      >
        <div
          style={{
            width: '735px',
            height: '735px',
            background: "url('/Image%20(25).png') center/cover, #F7F7F7",
            borderRadius: '8px',
            flex: 'none',
            order: 0,
            alignSelf: 'stretch',
            flexGrow: 0,
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: 0,
            gap: '4px',
            width: '735px',
            height: '104px',
            flex: 'none',
            order: 1,
            alignSelf: 'stretch',
            flexGrow: 0,
          }}
        >
          <h3
            style={{
              width: '735px',
              height: '36px',
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '24px',
              lineHeight: '150%',
              color: '#000000',
              margin: 0,
            }}
          >
            주요 제품
          </h3>
          <p
            style={{
              width: '735px',
              height: '30px',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '150%',
              color: '#828282',
              margin: 0,
            }}
          >
            대표 제품 설명
          </p>
          <p
            style={{
              width: '735px',
              height: '30px',
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '150%',
              color: '#000000',
              margin: 0,
            }}
          >
            $10.99
          </p>
        </div>
      </div>

      {/* Card list */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 0,
          gap: '40px',
          position: 'absolute',
          width: '515px',
          height: '863px',
          left: '847px',
          top: '1976px',
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: 0,
            gap: '24px',
            width: '515px',
            height: '411.5px',
            flex: 'none',
            order: 0,
            alignSelf: 'stretch',
            flexGrow: 1,
          }}
        >
          <div
            style={{
              width: '515px',
              height: '283.5px',
              background: "url('/Image%20(10).png') center/cover, #F7F7F7",
              borderRadius: '8px',
              flex: 'none',
              order: 0,
              alignSelf: 'stretch',
              flexGrow: 1,
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              padding: 0,
              gap: '4px',
              width: '515px',
              height: '104px',
              flex: 'none',
              order: 1,
              alignSelf: 'stretch',
              flexGrow: 0,
            }}
          >
            <h3
              style={{
                width: '515px',
                height: '36px',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '24px',
                lineHeight: '150%',
                color: '#000000',
                margin: 0,
              }}
            >
              제품
            </h3>
            <p
              style={{
                width: '515px',
                height: '30px',
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '150%',
                color: '#828282',
                margin: 0,
              }}
            >
              상단 제품 설명
            </p>
            <p
              style={{
                width: '515px',
                height: '30px',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '150%',
                color: '#000000',
                margin: 0,
              }}
            >
              $10.99
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: 0,
            gap: '24px',
            width: '515px',
            height: '411.5px',
            flex: 'none',
            order: 1,
            alignSelf: 'stretch',
            flexGrow: 1,
          }}
        >
          <div
            style={{
              width: '515px',
              height: '283.5px',
              background: "url('/Image%20(11).png') center/cover, #F7F7F7",
              borderRadius: '8px',
              flex: 'none',
              order: 0,
              alignSelf: 'stretch',
              flexGrow: 1,
            }}
          />

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              padding: 0,
              gap: '4px',
              width: '515px',
              height: '104px',
              flex: 'none',
              order: 1,
              alignSelf: 'stretch',
              flexGrow: 0,
            }}
          >
            <h3
              style={{
                width: '515px',
                height: '36px',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '24px',
                lineHeight: '150%',
                color: '#000000',
                margin: 0,
              }}
            >
              제품
            </h3>
            <p
              style={{
                width: '515px',
                height: '30px',
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '20px',
                lineHeight: '150%',
                color: '#828282',
                margin: 0,
              }}
            >
              하단 제품 설명
            </p>
            <p
              style={{
                width: '515px',
                height: '30px',
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '20px',
                lineHeight: '150%',
                color: '#000000',
                margin: 0,
              }}
            >
              $10.99
            </p>
          </div>
        </div>
      </div>

      {/* 섹션 제목 - 첫 번째 */}
      <h2
        style={{
          position: 'absolute',
          width: '625px',
          height: '58px',
          left: '80px',
          top: '2989px',
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

      {/* List - 왼쪽 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 0,
          gap: '48px',
          position: 'absolute',
          height: '336px',
          left: '5.55%',
          right: '58.74%',
          top: '3095px',
        }}
      >
        {/* Copy 1 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: 0,
            gap: '8px',
            width: '515px',
            height: '144px',
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        >
          <div style={{ width: '32px', height: '32px', background: '#454545', borderRadius: '50%' }} />
          <h3
            style={{
              width: '515px',
              height: '36px',
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
              width: '515px',
              height: '60px',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '150%',
              color: '#828282',
              margin: 0,
            }}
          >
            하고 싶은 말을 적을 수 있는 본문 텍스트. 요점, 인용구, 일화 또는 아주 짧은 이야기를 추가하세요.
          </p>
        </div>

        {/* Copy 2 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: 0,
            gap: '8px',
            width: '515px',
            height: '144px',
            flex: 'none',
            order: 1,
            flexGrow: 0,
          }}
        >
          <div style={{ width: '32px', height: '32px', background: '#454545', borderRadius: '50%' }} />
          <h3
            style={{
              width: '515px',
              height: '36px',
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
              width: '515px',
              height: '60px',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '150%',
              color: '#828282',
              margin: 0,
            }}
          >
            주장하고자 하는 내용을 적을 수 있는 본문 텍스트. 요점, 인용구, 일화 또는 아주 짧은 이야기를 추가하세요.
          </p>
        </div>
      </div>

      {/* List - 오른쪽 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 0,
          gap: '48px',
          position: 'absolute',
          height: '336px',
          left: '58.6%',
          right: '5.69%',
          top: '3095px',
        }}
      >
        {/* Copy 1 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: 0,
            gap: '8px',
            width: '513px',
            height: '144px',
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        >
          <div style={{ width: '32px', height: '32px', background: '#454545', borderRadius: '50%' }} />
          <h3
            style={{
              width: '513px',
              height: '36px',
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
              width: '513px',
              height: '60px',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '150%',
              color: '#828282',
              margin: 0,
            }}
          >
            제안하고 싶은 내용을 적을 수 있는 본문 텍스트. 요점, 인용구, 일화 또는 아주 짧은 이야기를 추가하세요.
          </p>
        </div>

        {/* Copy 2 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: 0,
            gap: '8px',
            width: '513px',
            height: '144px',
            flex: 'none',
            order: 1,
            flexGrow: 0,
          }}
        >
          <div style={{ width: '32px', height: '32px', background: '#454545', borderRadius: '50%' }} />
          <h3
            style={{
              width: '513px',
              height: '36px',
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
              width: '513px',
              height: '60px',
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '20px',
              lineHeight: '150%',
              color: '#828282',
              margin: 0,
            }}
          >
            입력하고자 하는 내용을 적을 수 있는 본문 텍스트. 요점, 인용구, 일화 또는 아주 짧은 이야기를 추가하세요.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
