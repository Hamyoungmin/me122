'use client';

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AddArticlePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    content: '',
    author: '',
    image_url: '',
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from('articles').insert([formData]);

    setLoading(false);

    if (error) {
      alert('추가 실패: ' + error.message);
    } else {
      alert('기사가 추가되었습니다!');
      router.push('/admin/articles');
    }
  }

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
        <Link
          href="/admin/articles"
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
          새 기사 추가
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
          {/* Title */}
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
              제목 *
            </label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
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

          {/* Subtitle */}
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
              부제목
            </label>
            <input
              type="text"
              value={formData.subtitle}
              onChange={(e) => setFormData({ ...formData, subtitle: e.target.value })}
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

          {/* Author */}
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
              작성자
            </label>
            <input
              type="text"
              value={formData.author}
              onChange={(e) => setFormData({ ...formData, author: e.target.value })}
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

          {/* Content */}
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
              본문 *
            </label>
            <textarea
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
              required
              rows={10}
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

          {/* Image URL */}
          <div style={{ marginBottom: '32px' }}>
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
              대표 이미지 URL
            </label>
            <input
              type="url"
              value={formData.image_url}
              onChange={(e) => setFormData({ ...formData, image_url: e.target.value })}
              placeholder="https://example.com/image.jpg"
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
            {formData.image_url && (
              <img
                src={formData.image_url}
                alt="미리보기"
                style={{
                  marginTop: '12px',
                  maxWidth: '100%',
                  maxHeight: '300px',
                  borderRadius: '8px',
                }}
                onError={(e) => {
                  (e.target as HTMLImageElement).style.display = 'none';
                }}
              />
            )}
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
              {loading ? '추가 중...' : '기사 추가'}
            </button>
            <Link
              href="/admin/articles"
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

