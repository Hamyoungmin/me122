import Link from 'next/link';

interface NavigationProps {
  variant?: 'light' | 'dark' | 'transparent';
}

export default function Navigation({ variant = 'light' }: NavigationProps) {
  const isTransparent = variant === 'transparent';
  const isDark = variant === 'dark';
  
  const textColor = isTransparent ? '#FFFFFF' : '#000000';
  const buttonBg = isTransparent ? 'transparent' : '#000000';
  const buttonBorder = isTransparent ? '2px solid #FFFFFF' : 'none';
  
  return (
    <nav 
      style={{
        position: 'absolute',
        height: '164px',
        left: 0,
        right: 0,
        top: 0,
        background: isTransparent ? 'transparent' : '#FFFFFF',
        zIndex: 1000,
      }}
    >
      {/* 사이트 이름 */}
      <Link 
        href="/"
        style={{
          position: 'absolute',
          width: '98px',
          height: '30px',
          left: '80px',
          top: '67px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '20px',
          lineHeight: '150%',
          display: 'flex',
          alignItems: 'center',
          color: textColor,
          textDecoration: 'none',
        }}
      >
        Landing
      </Link>

      {/* Items */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          padding: 0,
          gap: '48px',
          position: 'absolute',
          width: '390px',
          height: '52px',
          right: '80px',
          top: '56px',
        }}
      >
        <Link
          href="/shop"
          style={{
            minWidth: '56px',
            height: '30px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '150%',
            display: 'flex',
            alignItems: 'center',
            color: textColor,
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          Main
        </Link>

        <Link
          href="/article"
          style={{
            minWidth: '56px',
            height: '30px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '150%',
            display: 'flex',
            alignItems: 'center',
            color: textColor,
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          Article
        </Link>

        <Link
          href="/about"
          style={{
            minWidth: '56px',
            height: '30px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '20px',
            lineHeight: '150%',
            display: 'flex',
            alignItems: 'center',
            color: textColor,
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          About
        </Link>

        {/* Button - Product 페이지로 이동 */}
        <Link
          href="/product"
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px 16px',
            gap: '8px',
            width: '90px',
            minHeight: '52px',
            background: buttonBg,
            border: buttonBorder,
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)',
            borderRadius: '8px',
            cursor: 'pointer',
            textDecoration: 'none',
          }}
        >
          <span
            style={{
              fontFamily: 'Inter',
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '150%',
              display: 'flex',
              alignItems: 'center',
              textAlign: 'center',
              color: '#FFFFFF',
            }}
          >
            Shop
          </span>
        </Link>
      </div>
    </nav>
  );
}

