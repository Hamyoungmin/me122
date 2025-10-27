'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Sidebar() {
  const pathname = usePathname();

  const menuItems = [
    { href: '/admin', label: '대시보드', icon: '📊' },
    { href: '/admin/products', label: '상품 관리', icon: '📦' },
    { href: '/admin/articles', label: '기사 관리', icon: '📝' },
    { href: '/admin/contacts', label: '문의 관리', icon: '💬' },
  ];

  return (
    <div
      style={{
        width: '250px',
        minHeight: '100vh',
        background: '#1a1a1a',
        padding: '24px 0',
        position: 'fixed',
        left: 0,
        top: 0,
      }}
    >
      {/* Logo */}
      <div
        style={{
          padding: '0 24px',
          marginBottom: '48px',
        }}
      >
        <h1
          style={{
            fontFamily: 'Inter',
            fontWeight: 700,
            fontSize: '24px',
            color: '#FFFFFF',
            margin: 0,
          }}
        >
          Admin Panel
        </h1>
      </div>

      {/* Menu Items */}
      <nav>
        {menuItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '12px 24px',
                textDecoration: 'none',
                color: isActive ? '#FFFFFF' : '#999999',
                background: isActive ? '#333333' : 'transparent',
                borderLeft: isActive ? '4px solid #FFFFFF' : '4px solid transparent',
                transition: 'all 0.2s',
                fontFamily: 'Inter',
                fontSize: '16px',
                fontWeight: isActive ? 600 : 400,
              }}
            >
              <span style={{ fontSize: '20px' }}>{item.icon}</span>
              {item.label}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div
        style={{
          position: 'absolute',
          bottom: '24px',
          left: '24px',
          right: '24px',
        }}
      >
        <Link
          href="/"
          style={{
            display: 'block',
            padding: '12px',
            textAlign: 'center',
            background: '#333333',
            color: '#FFFFFF',
            textDecoration: 'none',
            borderRadius: '8px',
            fontFamily: 'Inter',
            fontSize: '14px',
            fontWeight: 500,
          }}
        >
          ← 사이트로 돌아가기
        </Link>
      </div>
    </div>
  );
}

