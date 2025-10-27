import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

async function getDashboardStats() {
  const [products, articles, contacts] = await Promise.all([
    supabase.from('products').select('*', { count: 'exact', head: true }),
    supabase.from('articles').select('*', { count: 'exact', head: true }),
    supabase.from('contacts').select('*', { count: 'exact', head: true }).eq('status', 'pending'),
  ]);

  return {
    productsCount: products.count || 0,
    articlesCount: articles.count || 0,
    pendingContactsCount: contacts.count || 0,
  };
}

async function getRecentContacts() {
  const { data } = await supabase
    .from('contacts')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(5);
  
  return data || [];
}

export default async function AdminDashboard() {
  const stats = await getDashboardStats();
  const recentContacts = await getRecentContacts();

  const statCards = [
    { title: '총 상품 수', value: stats.productsCount, icon: '📦', color: '#4CAF50' },
    { title: '총 기사 수', value: stats.articlesCount, icon: '📝', color: '#2196F3' },
    { title: '미답변 문의', value: stats.pendingContactsCount, icon: '💬', color: '#FF9800' },
  ];

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '40px' }}>
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
          대시보드
        </h1>
        <p
          style={{
            fontFamily: 'Inter',
            fontSize: '16px',
            color: '#666666',
            margin: 0,
          }}
        >
          관리자 페이지에 오신 것을 환영합니다
        </p>
      </div>

      {/* Stats Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
          marginBottom: '40px',
        }}
      >
        {statCards.map((card, index) => (
          <div
            key={index}
            style={{
              background: '#FFFFFF',
              padding: '24px',
              borderRadius: '12px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '16px',
              }}
            >
              <span style={{ fontSize: '32px' }}>{card.icon}</span>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  background: `${card.color}20`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    width: '24px',
                    height: '24px',
                    borderRadius: '50%',
                    background: card.color,
                  }}
                />
              </div>
            </div>
            <h3
              style={{
                fontFamily: 'Inter',
                fontSize: '14px',
                fontWeight: 500,
                color: '#666666',
                margin: 0,
                marginBottom: '8px',
              }}
            >
              {card.title}
            </h3>
            <p
              style={{
                fontFamily: 'Inter',
                fontSize: '32px',
                fontWeight: 700,
                color: '#000000',
                margin: 0,
              }}
            >
              {card.value}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Contacts */}
      <div
        style={{
          background: '#FFFFFF',
          padding: '24px',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
        }}
      >
        <h2
          style={{
            fontFamily: 'Inter',
            fontSize: '20px',
            fontWeight: 600,
            color: '#000000',
            margin: 0,
            marginBottom: '24px',
          }}
        >
          최근 문의
        </h2>

        {recentContacts.length === 0 ? (
          <p
            style={{
              fontFamily: 'Inter',
              fontSize: '14px',
              color: '#999999',
              textAlign: 'center',
              padding: '40px 0',
            }}
          >
            아직 문의가 없습니다
          </p>
        ) : (
          <div>
            {recentContacts.map((contact) => (
              <div
                key={contact.id}
                style={{
                  padding: '16px',
                  borderBottom: '1px solid #E0E0E0',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div style={{ flex: 1 }}>
                  <p
                    style={{
                      fontFamily: 'Inter',
                      fontSize: '16px',
                      fontWeight: 500,
                      color: '#000000',
                      margin: 0,
                      marginBottom: '4px',
                    }}
                  >
                    {contact.first_name} {contact.last_name}
                  </p>
                  <p
                    style={{
                      fontFamily: 'Inter',
                      fontSize: '14px',
                      color: '#666666',
                      margin: 0,
                    }}
                  >
                    {contact.email}
                  </p>
                </div>
                <div
                  style={{
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
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

