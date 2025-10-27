'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import AuthButton from '../components/AuthButton';

export default function SignupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    // TODO: 실제 회원가입 로직 구현
    console.log('회원가입 시도:', formData);
    alert('회원가입 기능은 추후 구현 예정입니다.');
  };

  return (
    <div style={{ position: 'relative' }}>
      <Navigation variant="light" />
      
      <div
        style={{
          paddingTop: '180px',
          paddingBottom: '100px',
          paddingLeft: '20px',
          paddingRight: '20px',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            maxWidth: '440px',
            background: '#FFFFFF',
            borderRadius: '16px',
            boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.08)',
            padding: '48px 40px',
          }}
        >
          <h1
            style={{
              fontFamily: 'Inter',
              fontSize: '32px',
              fontWeight: 700,
              color: '#000000',
              marginBottom: '8px',
              textAlign: 'center',
            }}
          >
            회원가입
          </h1>
          
          <p
            style={{
              fontFamily: 'Inter',
              fontSize: '15px',
              color: '#666666',
              marginBottom: '40px',
              textAlign: 'center',
            }}
          >
            새 계정을 만들어보세요
          </p>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '20px' }}>
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
                이름
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                style={{
                  width: '100%',
                  height: '48px',
                  padding: '12px 16px',
                  fontFamily: 'Inter',
                  fontSize: '15px',
                  border: '1px solid #E5E5E5',
                  borderRadius: '8px',
                  outline: 'none',
                  transition: 'border 0.2s ease',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.border = '1px solid #000000';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.border = '1px solid #E5E5E5';
                }}
                placeholder="홍길동"
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
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
                이메일
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                style={{
                  width: '100%',
                  height: '48px',
                  padding: '12px 16px',
                  fontFamily: 'Inter',
                  fontSize: '15px',
                  border: '1px solid #E5E5E5',
                  borderRadius: '8px',
                  outline: 'none',
                  transition: 'border 0.2s ease',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.border = '1px solid #000000';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.border = '1px solid #E5E5E5';
                }}
                placeholder="example@email.com"
              />
            </div>

            <div style={{ marginBottom: '20px' }}>
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
                비밀번호
              </label>
              <input
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                required
                style={{
                  width: '100%',
                  height: '48px',
                  padding: '12px 16px',
                  fontFamily: 'Inter',
                  fontSize: '15px',
                  border: '1px solid #E5E5E5',
                  borderRadius: '8px',
                  outline: 'none',
                  transition: 'border 0.2s ease',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.border = '1px solid #000000';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.border = '1px solid #E5E5E5';
                }}
                placeholder="비밀번호를 입력하세요"
              />
            </div>

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
                비밀번호 확인
              </label>
              <input
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                required
                style={{
                  width: '100%',
                  height: '48px',
                  padding: '12px 16px',
                  fontFamily: 'Inter',
                  fontSize: '15px',
                  border: '1px solid #E5E5E5',
                  borderRadius: '8px',
                  outline: 'none',
                  transition: 'border 0.2s ease',
                }}
                onFocus={(e) => {
                  e.currentTarget.style.border = '1px solid #000000';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.border = '1px solid #E5E5E5';
                }}
                placeholder="비밀번호를 다시 입력하세요"
              />
            </div>

            <button
              type="submit"
              style={{
                width: '100%',
                height: '52px',
                background: '#000000',
                border: 'none',
                borderRadius: '8px',
                fontFamily: 'Inter',
                fontSize: '16px',
                fontWeight: 600,
                color: '#FFFFFF',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                marginBottom: '16px',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#333333';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#000000';
              }}
            >
              회원가입
            </button>

            <div
              style={{
                textAlign: 'center',
                fontFamily: 'Inter',
                fontSize: '14px',
                color: '#666666',
              }}
            >
              이미 계정이 있으신가요?{' '}
              <Link
                href="/login"
                style={{
                  color: '#000000',
                  fontWeight: 600,
                  textDecoration: 'none',
                }}
              >
                로그인
              </Link>
            </div>
          </form>
        </div>
      </div>

      <Footer variant="auth" />
      <AuthButton />
    </div>
  );
}

