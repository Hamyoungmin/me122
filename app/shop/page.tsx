'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AuthButton from '../components/AuthButton';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
  featured: boolean;
}

export default function Shop() {
  const [featuredProduct, setFeaturedProduct] = useState<Product | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    setLoading(true);
    
    // 주요 상품 1개 가져오기
    const { data: featured } = await supabase
      .from('products')
      .select('*')
      .eq('featured', true)
      .limit(1)
      .single();
    
    // 일반 상품 2개 가져오기
    const { data: regular } = await supabase
      .from('products')
      .select('*')
      .eq('featured', false)
      .limit(2);
    
    setFeaturedProduct(featured);
    setProducts(regular || []);
    setLoading(false);
  }

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
              리스트몰
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
                justifyContent: 'center',
                textAlign: 'center',
                color: '#FFFFFF',
                margin: 0,
                flex: 'none',
                order: 1,
                alignSelf: 'stretch',
                flexGrow: 0,
              }}
            >
              당신의 일상을 채워줄 특별한 쇼핑 경험
            </p>
          </div>

          {/* Button */}
          <button
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px 32px',
              gap: '8px',
              minWidth: '160px',
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
                whiteSpace: 'nowrap',
              }}
            >
              둘러보기
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
          엄선된 프리미엄 상품
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
          최고의 품질과 디자인을 자랑하는 제품들을 만나보세요
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
              justifyContent: 'center',
              padding: '12px 24px',
              gap: '8px',
              minWidth: '100px',
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
                whiteSpace: 'nowrap',
              }}
            >
              구매
            </span>
          </button>

          <button
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 24px',
              gap: '8px',
              minWidth: '180px',
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
                whiteSpace: 'nowrap',
              }}
            >
              자세히 보기
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
          특별한 혜택
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
          회원만을 위한 독점 할인과 이벤트를 놓치지 마세요
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
              justifyContent: 'center',
              padding: '12px 24px',
              gap: '8px',
              minWidth: '100px',
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
                whiteSpace: 'nowrap',
              }}
            >
              가입
            </span>
          </button>

          <button
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '12px 24px',
              gap: '8px',
              minWidth: '160px',
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
                whiteSpace: 'nowrap',
              }}
            >
              혜택 보기
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
        추천 상품
      </h2>

      {/* Card big */}
      {loading ? (
        <div
          style={{
            position: 'absolute',
            left: '80px',
            top: '1976px',
            width: '735px',
            height: '863px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Inter',
            color: '#999999',
          }}
        >
          로딩 중...
        </div>
      ) : featuredProduct ? (
        <Link
          href={`/product/${featuredProduct.id}`}
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
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          <div
            style={{
              width: '735px',
              height: '735px',
              background: featuredProduct.image_url 
                ? `url('${featuredProduct.image_url}') center/cover, #F7F7F7`
                : '#F7F7F7',
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
              {featuredProduct.name}
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
              {featuredProduct.description || '대표 제품 설명'}
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
              ${featuredProduct.price}
            </p>
          </div>
        </Link>
      ) : (
        <div
          style={{
            position: 'absolute',
            left: '80px',
            top: '1976px',
            width: '735px',
            height: '863px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontFamily: 'Inter',
            color: '#999999',
          }}
        >
          주요 상품이 없습니다
        </div>
      )}

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
        {loading ? (
          <div
            style={{
              width: '515px',
              height: '863px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Inter',
              color: '#999999',
            }}
          >
            로딩 중...
          </div>
        ) : products.length === 0 ? (
          <div
            style={{
              width: '515px',
              height: '863px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Inter',
              color: '#999999',
            }}
          >
            상품이 없습니다
          </div>
        ) : (
          products.map((product, index) => (
            <Link
              key={product.id}
              href={`/product/${product.id}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: 0,
                gap: '24px',
                width: '515px',
                height: '411.5px',
                flex: 'none',
                order: index,
                alignSelf: 'stretch',
                flexGrow: 1,
                textDecoration: 'none',
                cursor: 'pointer',
              }}
            >
              <div
                style={{
                  width: '515px',
                  height: '283.5px',
                  background: product.image_url
                    ? `url('${product.image_url}') center/cover, #F7F7F7`
                    : '#F7F7F7',
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
                  {product.name}
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
                  {product.description || '제품 설명'}
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
                  ${product.price}
                </p>
              </div>
            </Link>
          ))
        )}
      </div>

      {/* 섹션 제목 - 첫 번째 */}
      <div
        style={{
          position: 'absolute',
          width: '625px',
          left: '80px',
          top: '2989px',
        }}
      >
        <h2
          style={{
            width: '625px',
            height: '58px',
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
          베스트 셀러
        </h2>
        
        <p
          style={{
            width: '625px',
            marginTop: '16px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '20px',
            lineHeight: '150%',
            color: '#828282',
            margin: '16px 0 0 0',
          }}
        >
          가장 많은 사랑을 받는 인기 상품들을 만나보세요
        </p>
      </div>

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
          top: '3150px',
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
            무선 이어폰
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
            프리미엄 사운드와 노이즈 캔슬링 기능의 최신 무선 이어폰입니다.
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
            스마트워치
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
            건강 관리와 운동 트래킹을 한 번에, 스타일리시한 스마트워치입니다.
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
          top: '3150px',
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
            프리미엄 노트북
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
            강력한 성능과 슬림한 디자인을 갖춘 최신 노트북으로 작업 효율을 높이세요.
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
            스마트폰
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
            최신 칩셋과 뛰어난 카메라 성능을 자랑하는 프리미엄 스마트폰입니다.
          </p>
        </div>
      </div>

      <Footer />
      <AuthButton />
    </div>
  );
}
