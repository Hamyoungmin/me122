'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

interface Contact {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  message: string;
  status: string;
  created_at: string;
}

export default function ContactsPage() {
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);

  useEffect(() => {
    loadContacts();
  }, []);

  async function loadContacts() {
    setLoading(true);
    const { data, error } = await supabase
      .from('contacts')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error loading contacts:', error);
    } else {
      setContacts(data || []);
    }
    setLoading(false);
  }

  async function updateStatus(id: string, status: string) {
    const { error } = await supabase
      .from('contacts')
      .update({ status })
      .eq('id', id);

    if (error) {
      alert('상태 변경 실패: ' + error.message);
    } else {
      alert('상태가 변경되었습니다');
      loadContacts();
      setSelectedContact(null);
    }
  }

  async function deleteContact(id: string) {
    if (!confirm('정말 이 문의를 삭제하시겠습니까?')) return;

    const { error } = await supabase.from('contacts').delete().eq('id', id);

    if (error) {
      alert('삭제 실패: ' + error.message);
    } else {
      alert('삭제되었습니다');
      loadContacts();
      setSelectedContact(null);
    }
  }

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '32px' }}>
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
          문의 관리
        </h1>
        <p
          style={{
            fontFamily: 'Inter',
            fontSize: '16px',
            color: '#666666',
            margin: 0,
          }}
        >
          총 {contacts.length}개의 문의
        </p>
      </div>

      {/* Contacts List */}
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
        ) : contacts.length === 0 ? (
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
              }}
            >
              아직 문의가 없습니다
            </p>
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
                  이름
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
                  이메일
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
                  메시지 미리보기
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
                  상태
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
              {contacts.map((contact) => (
                <tr
                  key={contact.id}
                  style={{ borderBottom: '1px solid #E0E0E0' }}
                >
                  <td
                    style={{
                      padding: '16px',
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      color: '#000000',
                      fontWeight: 500,
                    }}
                  >
                    {contact.first_name} {contact.last_name}
                  </td>
                  <td
                    style={{
                      padding: '16px',
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      color: '#666666',
                    }}
                  >
                    {contact.email}
                  </td>
                  <td
                    style={{
                      padding: '16px',
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      color: '#666666',
                      maxWidth: '300px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {contact.message}
                  </td>
                  <td
                    style={{
                      padding: '16px',
                      textAlign: 'center',
                    }}
                  >
                    <div
                      style={{
                        display: 'inline-block',
                        padding: '4px 12px',
                        borderRadius: '12px',
                        background: contact.status === 'pending' ? '#FFF3E0' : '#E8F5E9',
                        color: contact.status === 'pending' ? '#F57C00' : '#388E3C',
                        fontSize: '12px',
                        fontWeight: 500,
                        fontFamily: 'Inter',
                      }}
                    >
                      {contact.status === 'pending' ? '미답변' : '답변완료'}
                    </div>
                  </td>
                  <td
                    style={{
                      padding: '16px',
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      color: '#666666',
                    }}
                  >
                    {new Date(contact.created_at).toLocaleDateString('ko-KR')}
                  </td>
                  <td
                    style={{
                      padding: '16px',
                      textAlign: 'right',
                    }}
                  >
                    <button
                      onClick={() => setSelectedContact(contact)}
                      style={{
                        padding: '6px 12px',
                        background: '#E0E0E0',
                        color: '#000000',
                        border: 'none',
                        borderRadius: '6px',
                        fontFamily: 'Inter',
                        fontSize: '12px',
                        fontWeight: 500,
                        cursor: 'pointer',
                      }}
                    >
                      상세보기
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      {/* Detail Modal */}
      {selectedContact && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
          }}
          onClick={() => setSelectedContact(null)}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '12px',
              padding: '32px',
              maxWidth: '600px',
              width: '90%',
              maxHeight: '80vh',
              overflow: 'auto',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <h2
              style={{
                fontFamily: 'Inter',
                fontSize: '24px',
                fontWeight: 600,
                color: '#000000',
                margin: 0,
                marginBottom: '24px',
              }}
            >
              문의 상세
            </h2>

            <div style={{ marginBottom: '16px' }}>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: '12px',
                  color: '#999999',
                  margin: 0,
                  marginBottom: '4px',
                }}
              >
                이름
              </p>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: '16px',
                  color: '#000000',
                  margin: 0,
                }}
              >
                {selectedContact.first_name} {selectedContact.last_name}
              </p>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: '12px',
                  color: '#999999',
                  margin: 0,
                  marginBottom: '4px',
                }}
              >
                이메일
              </p>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: '16px',
                  color: '#000000',
                  margin: 0,
                }}
              >
                {selectedContact.email}
              </p>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: '12px',
                  color: '#999999',
                  margin: 0,
                  marginBottom: '4px',
                }}
              >
                메시지
              </p>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  color: '#000000',
                  margin: 0,
                  padding: '12px',
                  background: '#F5F5F5',
                  borderRadius: '8px',
                  lineHeight: '1.6',
                  whiteSpace: 'pre-wrap',
                }}
              >
                {selectedContact.message}
              </p>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontSize: '12px',
                  color: '#999999',
                  margin: 0,
                  marginBottom: '4px',
                }}
              >
                상태
              </p>
              <div
                style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  borderRadius: '12px',
                  background: selectedContact.status === 'pending' ? '#FFF3E0' : '#E8F5E9',
                  color: selectedContact.status === 'pending' ? '#F57C00' : '#388E3C',
                  fontSize: '12px',
                  fontWeight: 500,
                  fontFamily: 'Inter',
                }}
              >
                {selectedContact.status === 'pending' ? '미답변' : '답변완료'}
              </div>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              {selectedContact.status === 'pending' ? (
                <button
                  onClick={() => updateStatus(selectedContact.id, 'completed')}
                  style={{
                    padding: '12px 24px',
                    background: '#4CAF50',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: 500,
                    cursor: 'pointer',
                  }}
                >
                  ✅ 답변완료 처리
                </button>
              ) : (
                <button
                  onClick={() => updateStatus(selectedContact.id, 'pending')}
                  style={{
                    padding: '12px 24px',
                    background: '#FF9800',
                    color: '#FFFFFF',
                    border: 'none',
                    borderRadius: '8px',
                    fontFamily: 'Inter',
                    fontSize: '14px',
                    fontWeight: 500,
                    cursor: 'pointer',
                  }}
                >
                  ⏳ 미답변으로 변경
                </button>
              )}
              <button
                onClick={() => deleteContact(selectedContact.id)}
                style={{
                  padding: '12px 24px',
                  background: '#FF5252',
                  color: '#FFFFFF',
                  border: 'none',
                  borderRadius: '8px',
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                🗑️ 삭제
              </button>
              <button
                onClick={() => setSelectedContact(null)}
                style={{
                  padding: '12px 24px',
                  background: '#E0E0E0',
                  color: '#000000',
                  border: 'none',
                  borderRadius: '8px',
                  fontFamily: 'Inter',
                  fontSize: '14px',
                  fontWeight: 500,
                  cursor: 'pointer',
                }}
              >
                닫기
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

