import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Product() {
  return (
    <div
      style={{
        position: 'relative',
        width: '1440px',
        minHeight: '2115px',
        background: '#FFFFFF',
        margin: '0 auto',
      }}
    >
      <Navigation />

      {/* Image */}
      <div
        style={{
          position: 'absolute',
          height: '613px',
          left: '80px',
          width: '625px',
          top: '164px',
          background: "url('/Image%20(24).png') center/cover, #F7F7F7",
          borderRadius: '12px',
        }}
      />

      {/* Copy */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
          padding: 0,
          gap: '24px',
          position: 'absolute',
          left: '845px',
          right: '80px',
          top: '164px',
        }}
      >
        {/* Product name */}
        <h1
          style={{
            fontFamily: 'Inter',
            fontWeight: 600,
            fontSize: '40px',
            lineHeight: '120%',
            color: '#000000',
            margin: 0,
          }}
        >
          Product name
        </h1>

        {/* Subheading */}
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
          Description or small heading
        </p>

        {/* Price */}
        <p
          style={{
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: '24px',
            lineHeight: '150%',
            color: '#000000',
            margin: 0,
          }}
        >
          Price
        </p>

        {/* Description */}
        <p
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '150%',
            color: '#828282',
            margin: 0,
          }}
        >
          Description
        </p>

        {/* Button */}
        <button
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '14px 24px',
            gap: '8px',
            width: '515px',
            height: '52px',
            background: '#000000',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '150%',
            color: '#FFFFFF',
          }}
        >
          장바구니에 추가
        </button>

        {/* Additional text */}
        <p
          style={{
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '150%',
            color: '#828282',
            margin: 0,
          }}
        >
          추가 세부 정보 또는 작은 글씨를 위한 텍스트 상자
        </p>
      </div>

      {/* 관련 제품 */}
      <h2
        style={{
          position: 'absolute',
          left: '80px',
          top: '857px',
          fontFamily: 'Inter',
          fontWeight: 600,
          fontSize: '32px',
          lineHeight: '150%',
          color: '#000000',
          margin: 0,
        }}
      >
        관련 제품
      </h2>

      {/* Card grid */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          alignContent: 'flex-start',
          padding: 0,
          gap: '32px',
          position: 'absolute',
          width: '1282px',
          left: '80px',
          top: '937px',
        }}
      >
        {[
          '/Image%20(1).png',
          '/Image%20(2).png',
          '/Image%20(3).png',
          '/Image%20(4).png',
          '/Image%20(5).png',
          '/Image%20(6).png',
        ].map((img, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              padding: 0,
              gap: '24px',
              width: '404px',
            }}
          >
            {/* Image */}
            <div
              style={{
                width: '404px',
                height: '238px',
                background: `url('${img}') center/cover, #F7F7F7`,
                borderRadius: '8px',
              }}
            />

            {/* Copy */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', width: '404px' }}>
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
                제품
              </h3>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: '150%',
                  color: '#828282',
                  margin: 0,
                }}
              >
                {[
                  '첫 번째 제품 설명',
                  '두 번째 제품 설명',
                  '세 번째 제품 설명',
                  '네 번째 제품 설명',
                  '다섯 번째 제품 설명',
                  '여섯 번째 제품 설명',
                ][i]}
              </p>
              <p
                style={{
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
        ))}
      </div>

      <Footer />
    </div>
  );
}
