'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface Article {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  author: string;
  image_url: string;
}

export default function Article() {
  const [mainArticle, setMainArticle] = useState<Article>({
    id: '1',
    title: '리스트몰의 새로운 제품 라인업',
    subtitle: '최신 트렌드를 반영한 프리미엄 제품들을 소개합니다.\n고객님의 라이프스타일을 한층 더 업그레이드할 기회를 만나보세요.',
    content: 'Welcome to our latest product showcase. We are excited to present our newest collection featuring cutting-edge technology and innovative design. Each product has been carefully selected to meet the highest standards of quality and functionality.\n\nOur commitment to excellence ensures that every item in our store represents the perfect blend of style, performance, and value. Discover products that will transform your everyday life and elevate your experience.',
    author: '리스트몰 에디터',
    image_url: '/Image (12).png'
  });
  const [relatedArticles, setRelatedArticles] = useState<Article[]>([
    { id: '1', title: '스마트 홈 가전 트렌드', subtitle: '', content: '', author: '테크 리뷰어', image_url: '/Image (15).png' },
    { id: '2', title: '프리미엄 제품 선택 가이드', subtitle: '', content: '', author: '쇼핑 큐레이터', image_url: '/Image (16).png' },
    { id: '3', title: '2024 베스트 제품 TOP 10', subtitle: '', content: '', author: '상품 전문가', image_url: '/Image (17).png' },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadArticles();
  }, []);

  async function loadArticles() {
    setLoading(true);
    
    // 메인 기사 1개 가져오기 (가장 최근 기사)
    const { data: main } = await supabase
      .from('articles')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1)
      .single();
    
    // 관련 기사 3개 가져오기
    const { data: related } = await supabase
      .from('articles')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(3);
    
    // 데이터가 있으면 업데이트
    if (main) {
      setMainArticle(main);
    }
    
    if (related && related.length > 0) {
      setRelatedArticles(related);
    }
    
    setLoading(false);
  }

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
          right: '25%',
          top: '244px',
        }}
      >
        <h1
          style={{
            width: '100%',
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
          {mainArticle.title}
        </h1>

        <p
          style={{
            width: '100%',
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
            whiteSpace: 'pre-line',
          }}
        >
          {mainArticle.subtitle || '최신 트렌드를 반영한 프리미엄 제품들을 소개합니다.\n고객님의 라이프스타일을 한층 더 업그레이드할 기회를 만나보세요.'}
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
        {mainArticle.image_url ? (
          <img 
            src={mainArticle.image_url} 
            alt="Article main"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : (
          <div style={{ 
            width: '100%', 
            height: '100%', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            color: '#999999',
            fontFamily: 'Inter'
          }}>
            이미지 없음
          </div>
        )}
      </div>

      {/* Paragraph 1 */}
      <div
        style={{
          position: 'absolute',
          minHeight: '450px',
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
        <p style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
          {mainArticle.content || 'Welcome to our latest product showcase. We are excited to present our newest collection featuring cutting-edge technology and innovative design. Each product has been carefully selected to meet the highest standards of quality and functionality.\n\nOur commitment to excellence ensures that every item in our store represents the perfect blend of style, performance, and value. Discover products that will transform your everyday life and elevate your experience.'}
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
          Every product in our collection is backed by comprehensive warranty coverage and dedicated customer support. We believe in building lasting relationships with our customers through exceptional service and quality products. Experience the difference that premium shopping can make in your daily life.
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
        추천 아티클
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
        {relatedArticles.map((article, index) => (
          <div
            key={article.id}
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
              {article.image_url ? (
                <img 
                  src={article.image_url}
                  alt={article.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                  }}
                />
              ) : (
                <div style={{ 
                  width: '100%', 
                  height: '100%', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  color: '#999999',
                  fontFamily: 'Inter'
                }}>
                  이미지 없음
                </div>
              )}
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
                {article.title}
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
                {article.author || '작성자'}
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
