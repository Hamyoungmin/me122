'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import AuthButton from '../../components/AuthButton';

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

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const [mainProduct, setMainProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [showAll, setShowAll] = useState(false);
  const [loading, setLoading] = useState(true);
  const [productId, setProductId] = useState<string>('');

  useEffect(() => {
    async function initializeParams() {
      const resolvedParams = await params;
      setProductId(resolvedParams.id);
    }
    initializeParams();
  }, [params]);

  useEffect(() => {
    if (productId) {
      loadProduct();
    }
  }, [productId]);

  async function loadProduct() {
    setLoading(true);
    
    // 해당 ID의 상품 가져오기
    const { data: product, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', productId)
      .single();
    
    if (error) {
      console.error('Error loading product:', error);
      setLoading(false);
      return;
    }
    
    setMainProduct(product);
    
    // 모든 관련 상품 가져오기 (현재 상품 제외)
    const { data: all } = await supabase
      .from('products')
      .select('*')
      .neq('id', productId)
      .order('created_at', { ascending: false });
    
    if (all && all.length > 0) {
      setAllProducts(all);
      setRelatedProducts(all.slice(0, 6)); // 처음에는 6개만 표시
    }
    
    setLoading(false);
  }

  function handleShowMore() {
    setShowAll(true);
    setRelatedProducts(allProducts); // 모든 상품 표시
  }

  if (loading) {
    return (
      <div
        style={{
          position: 'relative',
          width: '1440px',
          minHeight: '100vh',
          background: '#FFFFFF',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p style={{ fontFamily: 'Inter', fontSize: '20px', color: '#999999' }}>
          로딩 중...
        </p>
      </div>
    );
  }

  if (!mainProduct) {
    return (
      <div
        style={{
          position: 'relative',
          width: '1440px',
          minHeight: '100vh',
          background: '#FFFFFF',
          margin: '0 auto',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <p style={{ fontFamily: 'Inter', fontSize: '20px', color: '#999999' }}>
          상품을 찾을 수 없습니다
        </p>
      </div>
    );
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '1440px',
        minHeight: showAll ? 'auto' : '2115px',
        background: '#FFFFFF',
        margin: '0 auto',
        paddingBottom: '200px',
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
        {relatedProducts.length > 0 ? (
          relatedProducts.map((product, i) => (
            <a
              key={product.id}
              href={`/product/${product.id}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: 0,
                gap: '24px',
                width: '404px',
                textDecoration: 'none',
                cursor: 'pointer',
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
            </a>
          ))
        ) : (
          <div
            style={{
              width: '100%',
              textAlign: 'center',
              padding: '80px 0',
              fontFamily: 'Inter',
              fontSize: '18px',
              color: '#999999',
            }}
          >
            관련 상품이 없습니다
          </div>
        )}
      </div>

      {/* 더보기 버튼 */}
      {!showAll && allProducts.length > 6 && (
        <div
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            top: `${937 + Math.ceil(Math.min(relatedProducts.length, 6) / 3) * 350 + 50}px`,
            zIndex: 10,
          }}
        >
          <button
            onClick={handleShowMore}
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '14px 48px',
              gap: '8px',
              background: 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)',
              boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.08)',
              borderRadius: '50px',
              border: '1px solid rgba(0, 0, 0, 0.1)',
              cursor: 'pointer',
              fontFamily: 'Inter',
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '150%',
              color: '#000000',
              letterSpacing: '0.5px',
              transition: 'all 0.3s ease',
              textTransform: 'uppercase',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0px 8px 24px rgba(0, 0, 0, 0.15)';
              e.currentTarget.style.background = 'linear-gradient(135deg, #F8F8F8 0%, #E8E8E8 100%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0px 4px 16px rgba(0, 0, 0, 0.08)';
              e.currentTarget.style.background = 'linear-gradient(135deg, #FFFFFF 0%, #F5F5F5 100%)';
            }}
          >
            View More
          </button>
        </div>
      )}

      <div style={{ position: 'relative', marginTop: `${showAll ? (937 + Math.ceil(relatedProducts.length / 3) * 350 + 150) : 2000}px` }}>
        <Footer />
      </div>
      <AuthButton />
    </div>
  );
}

