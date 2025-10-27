'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import Link from 'next/link';

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
  created_at: string;
}

export default function ArticlesPage() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadArticles();
  }, []);

  async function loadArticles() {
    setLoading(true);
    const { data, error } = await supabase
      .from('articles')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error loading articles:', error);
    } else {
      setArticles(data || []);
    }
    setLoading(false);
  }

  async function deleteArticle(id: string) {
    if (!confirm('정말 이 기사를 삭제하시겠습니까?')) return;

    const { error } = await supabase.from('articles').delete().eq('id', id);

    if (error) {
      alert('삭제 실패: ' + error.message);
    } else {
      alert('삭제되었습니다');
      loadArticles();
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
            기사 관리
          </h1>
          <p
            style={{
              fontFamily: 'Inter',
              fontSize: '16px',
              color: '#666666',
              margin: 0,
            }}
          >
            총 {articles.length}개의 기사
          </p>
        </div>

        <Link
          href="/admin/articles/add"
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
          ➕ 새 기사 추가
        </Link>
      </div>

      {/* Articles List */}
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
        ) : articles.length === 0 ? (
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
              아직 등록된 기사가 없습니다
            </p>
            <Link
              href="/admin/articles/add"
              style={{
                color: '#000000',
                textDecoration: 'underline',
                fontFamily: 'Inter',
                fontSize: '14px',
              }}
            >
              첫 기사를 추가해보세요
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
                  제목
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
                  작성자
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
                  생성일
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
              {articles.map((article) => (
                <tr
                  key={article.id}
                  style={{ borderBottom: '1px solid #E0E0E0' }}
                >
                  <td
                    style={{
                      padding: '16px',
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      color: '#000000',
                      fontWeight: 500,
                      maxWidth: '400px',
                    }}
                  >
                    {article.title}
                  </td>
                  <td
                    style={{
                      padding: '16px',
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      color: '#666666',
                    }}
                  >
                    {article.author || '-'}
                  </td>
                  <td
                    style={{
                      padding: '16px',
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      color: '#666666',
                    }}
                  >
                    {new Date(article.created_at).toLocaleDateString('ko-KR')}
                  </td>
                  <td
                    style={{
                      padding: '16px',
                      textAlign: 'right',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '8px', justifyContent: 'flex-end' }}>
                      <Link
                        href={`/admin/articles/${article.id}/edit`}
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
                        onClick={() => deleteArticle(article.id)}
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

