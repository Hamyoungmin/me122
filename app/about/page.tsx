'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function About() {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from('contacts').insert([formData]);

    setLoading(false);

    if (error) {
      alert('문의 전송 실패: ' + error.message);
    } else {
      alert('문의가 성공적으로 전송되었습니다!');
      setFormData({ first_name: '', last_name: '', email: '', message: '' });
    }
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '1440px',
        height: '1788px',
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
          padding: 0,
          gap: '24px',
          position: 'absolute',
          width: '624px',
          height: '521px',
          left: '80px',
          top: '244px',
        }}
      >
        {/* 정보 */}
        <h1
          style={{
            width: '624px',
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
          리스트몰 소개
        </h1>

        {/* 설명 또는 안내 부제목 */}
        <p
          style={{
            width: '624px',
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
            alignSelf: 'stretch',
            flexGrow: 0,
          }}
        >
          당신의 일상을 특별하게 만드는 프리미엄 쇼핑 경험
        </p>

        {/* Paragraph */}
        <p
          style={{
            width: '624px',
            height: '360px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '150%',
            color: '#000000',
            margin: 0,
            flex: 'none',
            order: 2,
            alignSelf: 'stretch',
            flexGrow: 0,
          }}
        >
          리스트몰은 최고의 품질과 디자인을 갖춘 프리미엄 제품만을 엄선하여 제공합니다. 우리는 고객님의 라이프스타일을 한층 더 업그레이드할 수 있는 특별한 쇼핑 경험을 선사합니다.
          
          고객 만족을 최우선으로 생각하며, 빠른 배송과 친절한 고객 서비스를 통해 언제나 신뢰할 수 있는 쇼핑 파트너가 되겠습니다. 리스트몰과 함께 더욱 풍요로운 일상을 만나보세요.
        </p>
      </div>

      {/* Image */}
      <div
        style={{
          boxSizing: 'border-box',
          position: 'absolute',
          width: '508px',
          height: '657px',
          right: '85px',
          top: '244px',
          overflow: 'hidden',
          border: '1px solid #000000',
          borderRadius: '8px',
          backgroundColor: '#F7F7F7',
        }}
      >
        <img 
          src="/Image.png" 
          alt="About"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Heading */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          padding: 0,
          gap: '24px',
          position: 'absolute',
          width: '624px',
          height: '48px',
          left: '80px',
          top: '845px',
        }}
      >
        {/* 연락처 */}
        <h2
          style={{
            width: '624px',
            height: '48px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 600,
            fontSize: '32px',
            lineHeight: '150%',
            color: '#000000',
            margin: 0,
            flex: 'none',
            order: 0,
            alignSelf: 'stretch',
            flexGrow: 0,
          }}
        >
          연락처
        </h2>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          alignContent: 'flex-start',
          padding: 0,
          gap: '24px 32px',
          position: 'absolute',
          height: '488px',
          left: '5.56%',
          right: '50.97%',
          top: '925px',
        }}
      >
        {/* Input - 이름 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: 0,
            gap: '8px',
            width: '295px',
            height: '80px',
            flex: 'none',
            order: 0,
            flexGrow: 0,
          }}
        >
          <label
            style={{
              width: '295px',
              height: '24px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '150%',
              color: '#000000',
              flex: 'none',
              order: 0,
              alignSelf: 'stretch',
              flexGrow: 0,
            }}
          >
            이름
          </label>
          <div
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              padding: '12px 16px',
              gap: '8px',
              width: '295px',
              height: '48px',
              background: '#FFFFFF',
              border: '1px solid #E0E0E0',
              boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
              borderRadius: '8px',
              flex: 'none',
              order: 1,
              alignSelf: 'stretch',
              flexGrow: 1,
            }}
          >
            <input
              type="text"
              placeholder="Label"
              value={formData.first_name}
              onChange={(e) => setFormData({ ...formData, first_name: e.target.value })}
              required
              style={{
                width: '263px',
                height: '24px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '150%',
                color: '#828282',
                border: 'none',
                outline: 'none',
                background: 'transparent',
                flex: 'none',
                order: 0,
                flexGrow: 1,
              }}
            />
          </div>
        </div>

        {/* Input - 성 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: 0,
            gap: '8px',
            width: '297px',
            height: '80px',
            flex: 'none',
            order: 1,
            flexGrow: 0,
          }}
        >
          <label
            style={{
              width: '297px',
              height: '24px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '150%',
              color: '#000000',
              flex: 'none',
              order: 0,
              alignSelf: 'stretch',
              flexGrow: 0,
            }}
          >
            성
          </label>
          <div
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              padding: '12px 16px',
              gap: '8px',
              width: '297px',
              height: '48px',
              background: '#FFFFFF',
              border: '1px solid #E0E0E0',
              boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
              borderRadius: '8px',
              flex: 'none',
              order: 1,
              alignSelf: 'stretch',
              flexGrow: 1,
            }}
          >
            <input
              type="text"
              placeholder="Label"
              value={formData.last_name}
              onChange={(e) => setFormData({ ...formData, last_name: e.target.value })}
              required
              style={{
                width: '265px',
                height: '24px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '150%',
                color: '#828282',
                border: 'none',
                outline: 'none',
                background: 'transparent',
                flex: 'none',
                order: 0,
                flexGrow: 1,
              }}
            />
          </div>
        </div>

        {/* Input - 이메일 주소 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: 0,
            gap: '8px',
            width: '626px',
            height: '80px',
            flex: 'none',
            order: 2,
            flexGrow: 0,
          }}
        >
          <label
            style={{
              width: '626px',
              height: '24px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '150%',
              color: '#000000',
              flex: 'none',
              order: 0,
              alignSelf: 'stretch',
              flexGrow: 0,
            }}
          >
            이메일 주소
          </label>
          <div
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              padding: '12px 16px',
              gap: '8px',
              width: '626px',
              height: '48px',
              background: '#FFFFFF',
              border: '1px solid #E0E0E0',
              boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
              borderRadius: '8px',
              flex: 'none',
              order: 1,
              alignSelf: 'stretch',
              flexGrow: 1,
            }}
          >
            <input
              type="email"
              placeholder="Label"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
              style={{
                width: '594px',
                height: '24px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '150%',
                color: '#828282',
                border: 'none',
                outline: 'none',
                background: 'transparent',
                flex: 'none',
                order: 0,
                flexGrow: 1,
              }}
            />
          </div>
        </div>

        {/* Input - 메시지 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: 0,
            gap: '8px',
            width: '626px',
            height: '194px',
            flex: 'none',
            order: 3,
            flexGrow: 0,
          }}
        >
          <label
            style={{
              width: '626px',
              height: '24px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '150%',
              color: '#000000',
              flex: 'none',
              order: 0,
              alignSelf: 'stretch',
              flexGrow: 0,
            }}
          >
            메시지
          </label>
          <div
            style={{
              boxSizing: 'border-box',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'flex-start',
              padding: '12px 16px',
              gap: '8px',
              width: '626px',
              height: '162px',
              background: '#FFFFFF',
              border: '1px solid #E0E0E0',
              boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
              borderRadius: '8px',
              flex: 'none',
              order: 1,
              alignSelf: 'stretch',
              flexGrow: 1,
            }}
          >
            <textarea
              placeholder="Label"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
              style={{
                width: '594px',
                height: '24px',
                fontFamily: 'Inter',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '150%',
                color: '#828282',
                border: 'none',
                outline: 'none',
                background: 'transparent',
                resize: 'none',
                flex: 'none',
                order: 0,
                flexGrow: 1,
              }}
            />
          </div>
        </div>

        {/* Button */}
        <button
          type="submit"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '16px 32px',
            gap: '8px',
            width: '626px',
            height: '62px',
            background: '#000000',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            flex: 'none',
            order: 4,
            flexGrow: 1,
          }}
        >
          <span
            style={{
              width: '37px',
              height: '30px',
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '150%',
              display: 'flex',
              alignItems: 'center',
              color: '#FFFFFF',
              flex: 'none',
              order: 0,
              flexGrow: 0,
            }}
          >
            제출
          </span>
        </button>
      </form>

      <Footer />
    </div>
  );
}
