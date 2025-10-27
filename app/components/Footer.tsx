import Link from 'next/link';

interface FooterProps {
  variant?: 'default' | 'auth';
}

export default function Footer({ variant = 'default' }: FooterProps) {
  const isAuth = variant === 'auth';
  
  return (
    <footer
      style={{
        position: isAuth ? 'relative' : 'absolute',
        height: '264px',
        left: isAuth ? 'auto' : 0,
        right: isAuth ? 'auto' : 0,
        bottom: isAuth ? 'auto' : 0,
        width: isAuth ? '100%' : 'auto',
        background: '#FFFFFF',
      }}
    >
      {/* Divider */}
      <div
        style={{
          position: 'absolute',
          width: '1280px',
          height: 0,
          left: '80px',
          top: '1px',
          border: '1px solid #E6E6E6',
        }}
      />

      {/* 사이트 이름 */}
      <Link
        href="/"
        style={{
          position: 'absolute',
          width: '118px',
          height: '36px',
          left: '80px',
          top: '52px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '24px',
          lineHeight: '150%',
          display: 'flex',
          alignItems: 'center',
          color: '#000000',
          textDecoration: 'none',
          cursor: 'pointer',
        }}
      >
        Landing
      </Link>

      {/* Social Icons */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          padding: 0,
          gap: '8px',
          position: 'absolute',
          width: '184px',
          height: '40px',
          left: '80px',
          top: '176px',
        }}
      >
        {/* Facebook */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 'none',
              order: 0,
              flexGrow: 0,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" fill="#828282"/>
            </svg>
          </div>
        </a>

        {/* LinkedIn */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 'none',
              order: 1,
              flexGrow: 0,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" fill="#828282"/>
              <path d="M6 9H2V21H6V9Z" fill="#828282"/>
              <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" fill="#828282"/>
            </svg>
          </div>
        </a>

        {/* YouTube */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 'none',
              order: 2,
              flexGrow: 0,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M22.54 6.42C22.4212 5.94541 22.1793 5.51057 21.8387 5.15941C21.498 4.80824 21.0707 4.55318 20.6 4.42C18.88 4 12 4 12 4C12 4 5.12 4 3.4 4.46C2.92926 4.59318 2.50198 4.84824 2.16135 5.19941C1.82071 5.55057 1.57879 5.98541 1.46 6.46C1.14521 8.20556 0.991235 9.97631 1 11.75C0.988779 13.537 1.14276 15.3213 1.46 17.08C1.59096 17.5398 1.83831 17.9581 2.17823 18.2945C2.51815 18.6308 2.93884 18.8738 3.4 19C5.12 19.46 12 19.46 12 19.46C12 19.46 18.88 19.46 20.6 19C21.0707 18.8668 21.498 18.6118 21.8387 18.2606C22.1793 17.9094 22.4212 17.4746 22.54 17C22.8524 15.2676 23.0064 13.5103 23 11.75C23.0112 9.96295 22.8572 8.1787 22.54 6.42Z" fill="#828282"/>
              <path d="M9.75 15.02L15.5 11.75L9.75 8.48V15.02Z" fill="white"/>
            </svg>
          </div>
        </a>

        {/* Instagram */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flex: 'none',
              order: 3,
              flexGrow: 0,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" fill="#828282"/>
              <path d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61991 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7616 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87658 12.63 8C13.4789 8.12588 14.2648 8.52146 14.8717 9.1283C15.4785 9.73515 15.8741 10.5211 16 11.37Z" fill="white"/>
              <path d="M17.5 6.5C17.8978 6.5 18.2794 6.34196 18.5607 6.06066C18.842 5.77936 19 5.39782 19 5C19 4.60218 18.842 4.22064 18.5607 3.93934C18.2794 3.65804 17.8978 3.5 17.5 3.5C17.1022 3.5 16.7206 3.65804 16.4393 3.93934C16.158 4.22064 16 4.60218 16 5C16 5.39782 16.158 5.77936 16.4393 6.06066C16.7206 6.34196 17.1022 6.5 17.5 6.5Z" fill="white"/>
            </svg>
          </div>
        </a>
      </div>

      {/* Items Column 1 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-end',
          padding: 0,
          gap: '24px',
          position: 'absolute',
          width: '187px',
          height: '168px',
          right: '517px',
          top: '48px',
        }}
      >
        <div
          style={{
            width: '187px',
            height: '24px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '150%',
            display: 'flex',
            alignItems: 'center',
            color: '#000000',
          }}
        >
          주제
        </div>
        <Link href="/shop" style={{ width: '187px', height: '24px', fontFamily: 'Inter', fontWeight: 500, fontSize: '16px', lineHeight: '150%', display: 'flex', alignItems: 'center', color: '#454545', textDecoration: 'none', cursor: 'pointer' }}>
          Shop
        </Link>
        <Link href="/article" style={{ width: '187px', height: '24px', fontFamily: 'Inter', fontWeight: 500, fontSize: '16px', lineHeight: '150%', display: 'flex', alignItems: 'center', color: '#454545', textDecoration: 'none', cursor: 'pointer' }}>
          Article
        </Link>
        <Link href="/about" style={{ width: '187px', height: '24px', fontFamily: 'Inter', fontWeight: 500, fontSize: '16px', lineHeight: '150%', display: 'flex', alignItems: 'center', color: '#454545', textDecoration: 'none', cursor: 'pointer' }}>
          About
        </Link>
      </div>

      {/* Items Column 2 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-end',
          padding: 0,
          gap: '24px',
          position: 'absolute',
          width: '187px',
          height: '168px',
          right: '298px',
          top: '48px',
        }}
      >
        <div
          style={{
            width: '187px',
            height: '24px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '150%',
            display: 'flex',
            alignItems: 'center',
            color: '#000000',
          }}
        >
          카테고리
        </div>
        <Link href="/product" style={{ width: '187px', height: '24px', fontFamily: 'Inter', fontWeight: 500, fontSize: '16px', lineHeight: '150%', display: 'flex', alignItems: 'center', color: '#454545', textDecoration: 'none', cursor: 'pointer' }}>
          Product
        </Link>
        <Link href="/shop" style={{ width: '187px', height: '24px', fontFamily: 'Inter', fontWeight: 500, fontSize: '16px', lineHeight: '150%', display: 'flex', alignItems: 'center', color: '#454545', textDecoration: 'none', cursor: 'pointer' }}>
          Shop
        </Link>
        <Link href="/" style={{ width: '187px', height: '24px', fontFamily: 'Inter', fontWeight: 500, fontSize: '16px', lineHeight: '150%', display: 'flex', alignItems: 'center', color: '#454545', textDecoration: 'none', cursor: 'pointer' }}>
          Home
        </Link>
      </div>

      {/* Items Column 3 */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-end',
          padding: 0,
          gap: '24px',
          position: 'absolute',
          width: '187px',
          height: '168px',
          right: '80px',
          top: '48px',
        }}
      >
        <div
          style={{
            width: '187px',
            height: '24px',
            fontFamily: 'Inter',
            fontStyle: 'normal',
            fontWeight: 500,
            fontSize: '16px',
            lineHeight: '150%',
            display: 'flex',
            alignItems: 'center',
            color: '#000000',
          }}
        >
          정보
        </div>
        <Link href="/about" style={{ width: '187px', height: '24px', fontFamily: 'Inter', fontWeight: 500, fontSize: '16px', lineHeight: '150%', display: 'flex', alignItems: 'center', color: '#454545', textDecoration: 'none', cursor: 'pointer' }}>
          About Us
        </Link>
        <Link href="/article" style={{ width: '187px', height: '24px', fontFamily: 'Inter', fontWeight: 500, fontSize: '16px', lineHeight: '150%', display: 'flex', alignItems: 'center', color: '#454545', textDecoration: 'none', cursor: 'pointer' }}>
          Blog
        </Link>
        <Link href="/about" style={{ width: '187px', height: '24px', fontFamily: 'Inter', fontWeight: 500, fontSize: '16px', lineHeight: '150%', display: 'flex', alignItems: 'center', color: '#454545', textDecoration: 'none', cursor: 'pointer' }}>
          Contact
        </Link>
      </div>
    </footer>
  );
}

