'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';

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
  created_at: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    setLoading(true);
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error loading products:', error);
    } else {
      setProducts(data || []);
    }
    setLoading(false);
  }

  async function deleteProduct(id: string) {
    if (!confirm('정말 이 상품을 삭제하시겠습니까?')) return;

    const { error } = await supabase.from('products').delete().eq('id', id);

    if (error) {
      alert('삭제 실패: ' + error.message);
    } else {
      alert('삭제되었습니다');
      loadProducts();
    }
  }

  return (
    <div>
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '32px',
        }}
      >
        <div>
          <h1
            style={{
              fontFamily: 'Inter',
              fontWeight: 700,
              fontSize: '32px',
              color: '#000000',
              margin: 0,
              marginBottom: '8px',
            }}
          >
            상품 관리
          </h1>
          <p
            style={{
              fontFamily: 'Inter',
              fontSize: '16px',
              color: '#666666',
              margin: 0,
            }}
          >
            총 {products.length}개의 상품
          </p>
        </div>

        <Link
          href="/admin/products/add"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            background: '#000000',
            color: '#FFFFFF',
            textDecoration: 'none',
            borderRadius: '8px',
            fontFamily: 'Inter',
            fontSize: '16px',
            fontWeight: 500,
          }}
        >
          ➕ 새 상품 추가
        </Link>
      </div>

      {/* Products Table */}
      <div
        style={{
          background: '#FFFFFF',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          overflow: 'hidden',
        }}
      >
        {loading ? (
          <div
            style={{
              padding: '80px',
              textAlign: 'center',
              fontFamily: 'Inter',
              fontSize: '16px',
              color: '#999999',
            }}
          >
            로딩 중...
          </div>
        ) : products.length === 0 ? (
          <div
            style={{
              padding: '80px',
              textAlign: 'center',
            }}
          >
            <p
              style={{
                fontFamily: 'Inter',
                fontSize: '16px',
                color: '#999999',
                margin: 0,
                marginBottom: '16px',
              }}
            >
              아직 등록된 상품이 없습니다
            </p>
            <Link
              href="/admin/products/add"
              style={{
                color: '#000000',
                textDecoration: 'underline',
                fontFamily: 'Inter',
                fontSize: '14px',
              }}
            >
              첫 상품을 추가해보세요
            </Link>
          </div>
        ) : (
          <table
            style={{
              width: '100%',
              borderCollapse: 'collapse',
            }}
          >
            <thead>
              <tr style={{ background: '#F5F5F5' }}>
                <th
                  style={{
                    padding: '16px',
                    textAlign: 'left',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#666666',
                  }}
                >
                  이미지
                </th>
                <th
                  style={{
                    padding: '16px',
                    textAlign: 'left',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#666666',
                  }}
                >
                  상품명
                </th>
                <th
                  style={{
                    padding: '16px',
                    textAlign: 'left',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#666666',
                  }}
                >
                  가격
                </th>
                <th
                  style={{
                    padding: '16px',
                    textAlign: 'left',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#666666',
                  }}
                >
                  카테고리
                </th>
                <th
                  style={{
                    padding: '16px',
                    textAlign: 'center',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#666666',
                  }}
                >
                  주요상품
                </th>
                <th
                  style={{
                    padding: '16px',
                    textAlign: 'right',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#666666',
                  }}
                >
                  액션
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  style={{ borderBottom: '1px solid #E0E0E0' }}
                >
                  <td style={{ padding: '16px' }}>
                    {product.image_url ? (
                      <img
                        src={product.image_url}
                        alt={product.name}
                        style={{
                          width: '64px',
                          height: '64px',
                          objectFit: 'cover',
                          borderRadius: '8px',
                        }}
                      />
                    ) : (
                      <div
                        style={{
                          width: '64px',
                          height: '64px',
                          background: '#F5F5F5',
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: '24px',
                        }}
                      >
                        📦
                      </div>
                    )}
                  </td>
                  <td
                    style={{
                      padding: '16px',
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      color: '#000000',
                      fontWeight: 500,
                    }}
                  >
                    {product.name}
                  </td>
                  <td
                    style={{
                      padding: '16px',
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      color: '#000000',
                    }}
                  >
                    ${product.price}
                  </td>
                  <td
                    style={{
                      padding: '16px',
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      color: '#666666',
                    }}
                  >
                    {product.category || '-'}
                  </td>
                  <td
                    style={{
                      padding: '16px',
                      textAlign: 'center',
                    }}
                  >
                    {product.featured ? '⭐' : '-'}
                  </td>
                  <td
                    style={{
                      padding: '16px',
                      textAlign: 'right',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                      <Link
                        href={`/admin/products/${product.id}/edit`}
                        style={{
                          padding: '6px 12px',
                          background: '#E0E0E0',
                          color: '#000000',
                          textDecoration: 'none',
                          borderRadius: '6px',
                          fontFamily: 'Inter',
                          fontSize: '12px',
                          fontWeight: 500,
                        }}
                      >
                        수정
                      </Link>
                      <button
                        onClick={() => deleteProduct(product.id)}
                        style={{
                          padding: '6px 12px',
                          background: '#FF5252',
                          color: '#FFFFFF',
                          border: 'none',
                          borderRadius: '6px',
                          fontFamily: 'Inter',
                          fontSize: '12px',
                          fontWeight: 500,
                          cursor: 'pointer',
                        }}
                      >
                        삭제
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

