'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function EditProductPage({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [productId, setProductId] = useState<string>('');
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    image_url: '',
    category: '',
    featured: false,
  });

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
    const { data, error } = await supabase
      .from('products')
      .select('*')
      .eq('id', productId)
      .single();

    if (error) {
      alert('상품을 불러올 수 없습니다: ' + error.message);
      router.push('/admin/products');
    } else if (data) {
      setFormData({
        name: data.name,
        description: data.description || '',
        price: data.price.toString(),
        image_url: data.image_url || '',
        category: data.category || '',
        featured: data.featured || false,
      });
    }
    setLoadingData(false);
  }

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    // 파일 형식 체크
    if (!file.type.startsWith('image/')) {
      alert('이미지 파일만 업로드 가능합니다.');
      return;
    }

    setUploading(true);

    try {
      // 고유한 파일명 생성
      const fileExt = file.name.split('.').pop();
      const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
      const filePath = `${fileName}`;

      // Supabase Storage에 업로드
      const { data, error } = await supabase.storage
        .from('product-images')
        .upload(filePath, file);

      if (error) {
        throw error;
      }

      // Public URL 가져오기
      const { data: { publicUrl } } = supabase.storage
        .from('product-images')
        .getPublicUrl(filePath);

      setFormData({ ...formData, image_url: publicUrl });
    } catch (error: any) {
      alert('업로드 실패: ' + error.message);
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from('products')
      .update({
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
        image_url: formData.image_url,
        category: formData.category,
        featured: formData.featured,
      })
      .eq('id', productId);

    setLoading(false);

    if (error) {
      alert('수정 실패: ' + error.message);
    } else {
      alert('상품이 수정되었습니다!');
      router.push('/admin/products');
    }
  }

  if (loadingData) {
    return (
      <div style={{ textAlign: 'center', padding: '80px', fontFamily: 'Inter', color: '#999999' }}>
        로딩 중...
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <Link
          href="/admin/products"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            color: '#666666',
            textDecoration: 'none',
            fontFamily: 'Inter',
            fontSize: '14px',
            marginBottom: '16px',
          }}
        >
          ← 목록으로 돌아가기
        </Link>
        <h1
          style={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '32px',
            color: '#000000',
            margin: 0,
          }}
        >
          상품 수정
        </h1>
      </div>

      {/* Form */}
      <div
        style={{
          background: '#FFFFFF',
          padding: '32px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          maxWidth: '800px',
        }}
      >
        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div style={{ marginBottom: '24px' }}>
            <label
              style={{
                display: 'block',
                fontFamily: 'Inter',
                fontSize: '14px',
                fontWeight: 500,
                color: '#000000',
                marginBottom: '8px',
              }}
            >
              상품명 *
            </label>
            <input
              type="text"
              value={formData.name || ''}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #E0E0E0',
                borderRadius: '8px',
                fontFamily: 'Inter',
                fontSize: '14px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Description */}
          <div style={{ marginBottom: '24px' }}>
            <label
              style={{
                display: 'block',
                fontFamily: 'Inter',
                fontSize: '14px',
                fontWeight: 500,
                color: '#000000',
                marginBottom: '8px',
              }}
            >
              설명
            </label>
            <textarea
              value={formData.description || ''}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              rows={4}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #E0E0E0',
                borderRadius: '8px',
                fontFamily: 'Inter',
                fontSize: '14px',
                resize: 'vertical',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Price */}
          <div style={{ marginBottom: '24px' }}>
            <label
              style={{
                display: 'block',
                fontFamily: 'Inter',
                fontSize: '14px',
                fontWeight: 500,
                color: '#000000',
                marginBottom: '8px',
              }}
            >
              가격 ($) *
            </label>
            <input
              type="number"
              step="0.01"
              value={formData.price || ''}
              onChange={(e) => setFormData({ ...formData, price: e.target.value })}
              required
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #E0E0E0',
                borderRadius: '8px',
                fontFamily: 'Inter',
                fontSize: '14px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Image Upload */}
          <div style={{ marginBottom: '24px' }}>
            <label
              style={{
                display: 'block',
                fontFamily: 'Inter',
                fontSize: '14px',
                fontWeight: 500,
                color: '#000000',
                marginBottom: '8px',
              }}
            >
              상품 이미지
            </label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              disabled={uploading}
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #E0E0E0',
                borderRadius: '8px',
                fontFamily: 'Inter',
                fontSize: '14px',
                boxSizing: 'border-box',
                cursor: uploading ? 'not-allowed' : 'pointer',
              }}
            />
            <p
              style={{
                marginTop: '8px',
                fontFamily: 'Inter',
                fontSize: '12px',
                color: '#666666',
              }}
            >
              {uploading ? '업로드 중...' : 'JPG, PNG, GIF, WEBP (용량 제한 없음)'}
            </p>
            {formData.image_url && (
              <img
                src={formData.image_url}
                alt="미리보기"
                style={{
                  marginTop: '12px',
                  maxWidth: '200px',
                  maxHeight: '200px',
                  borderRadius: '8px',
                  border: '1px solid #E0E0E0',
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            )}
          </div>

          {/* Category */}
          <div style={{ marginBottom: '24px' }}>
            <label
              style={{
                display: 'block',
                fontFamily: 'Inter',
                fontSize: '14px',
                fontWeight: 500,
                color: '#000000',
                marginBottom: '8px',
              }}
            >
              카테고리
            </label>
            <input
              type="text"
              value={formData.category || ''}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              placeholder="예: 전자제품, 의류, 식품"
              style={{
                width: '100%',
                padding: '12px 16px',
                border: '1px solid #E0E0E0',
                borderRadius: '8px',
                fontFamily: 'Inter',
                fontSize: '14px',
                boxSizing: 'border-box',
              }}
            />
          </div>

          {/* Featured */}
          <div style={{ marginBottom: '32px' }}>
            <label
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'Inter',
                fontSize: '14px',
                fontWeight: 500,
                color: '#000000',
                cursor: 'pointer',
              }}
            >
              <input
                type="checkbox"
                checked={formData.featured}
                onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                style={{ width: '18px', height: '18px', cursor: 'pointer' }}
              />
              주요 상품으로 표시
            </label>
          </div>

          {/* Buttons */}
          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              type="submit"
              disabled={loading}
              style={{
                padding: '12px 32px',
                background: '#000000',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                fontFamily: 'Inter',
                fontSize: '16px',
                fontWeight: 500,
                cursor: loading ? 'not-allowed' : 'pointer',
                opacity: loading ? 0.6 : 1,
              }}
            >
              {loading ? '수정 중...' : '수정 완료'}
            </button>
            <Link
              href="/admin/products"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '12px 32px',
                background: '#E0E0E0',
                color: '#000000',
                textDecoration: 'none',
                borderRadius: '8px',
                fontFamily: 'Inter',
                fontSize: '16px',
                fontWeight: 500,
              }}
            >
              취소
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

