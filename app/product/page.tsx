'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
}

export default function Product() {
  const [mainProduct, setMainProduct] = useState<Product>({
    id: '1',
    name: '프리미엄 무선 이어폰',
    description: '노이즈 캔슬링과 프리미엄 사운드를 제공하는 최신 무선 이어폰',
    price: 249,
    image_url: '/Image%20(24).png'
  });
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([
    { id: '1', name: '스마트워치 Pro', description: '건강 관리와 운동 트래킹 기능', price: 399, image_url: '/Image%20(1).png' },
    { id: '2', name: '울트라 북', description: '강력한 성능의 프리미엄 노트북', price: 1299, image_url: '/Image%20(2).png' },
    { id: '3', name: '무선 충전기', description: '빠른 충전 속도의 무선 충전 패드', price: 49, image_url: '/Image%20(3).png' },
    { id: '4', name: '블루투스 스피커', description: '고음질 360도 사운드 시스템', price: 149, image_url: '/Image%20(4).png' },
    { id: '5', name: '태블릿 Plus', description: '대화면 고해상도 디스플레이', price: 599, image_url: '/Image%20(5).png' },
    { id: '6', name: '게이밍 마우스', description: 'RGB 라이팅 고성능 게이밍 마우스', price: 79, image_url: '/Image%20(6).png' },
  ]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    setLoading(true);
    
    // 메인 상품 1개 가져오기 (가장 최근 상품)
    const { data: main } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(1)
      .single();
    
    // 관련 상품 6개 가져오기
    const { data: related } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false })
      .limit(6);
    
    // 데이터가 있으면 업데이트
    if (main) {
      setMainProduct(main);
    }
    
    if (related && related.length > 0) {
      setRelatedProducts(related);
    }
    
    setLoading(false);
  }

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
          background: mainProduct.image_url 
            ? `url('${mainProduct.image_url}') center/cover, #F7F7F7`
            : '#F7F7F7',
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
          {mainProduct.name}
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
          {mainProduct.description || 'Description or small heading'}
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
          {mainProduct.price > 0 ? `$${mainProduct.price}` : 'Price'}
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
          프리미엄 소재와 최신 기술이 결합된 제품입니다. 뛰어난 성능과 세련된 디자인으로 일상을 더욱 특별하게 만들어드립니다.
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
          무료 배송 | 30일 반품 보장 | 1년 품질 보증
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
        {relatedProducts.map((product, i) => (
          <div
            key={product.id}
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
                background: product.image_url 
                  ? `url('${product.image_url}') center/cover, #F7F7F7`
                  : '#F7F7F7',
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
                {product.name}
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
                {product.description || '제품 설명'}
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
                ${product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}
