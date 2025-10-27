'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AuthButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 플로팅 버튼 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '40px',
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: '#FFFFFF',
          border: '2px solid #E5E5E5',
          boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.12)',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = 'scale(1.1)';
          e.currentTarget.style.boxShadow = '0px 8px 24px rgba(0, 0, 0, 0.16)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0px 4px 16px rgba(0, 0, 0, 0.12)';
        }}
      >
        {/* 사람 아이콘 */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {/* 팝업 메뉴 */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '120px',
            right: '40px',
            background: '#FFFFFF',
            borderRadius: '12px',
            boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.15)',
            padding: '12px',
            zIndex: 9998,
            minWidth: '140px',
          }}
        >
          <Link
            href="/login"
            style={{
              display: 'block',
              padding: '12px 16px',
              fontFamily: 'Inter',
              fontSize: '15px',
              fontWeight: 500,
              color: '#000000',
              textDecoration: 'none',
              borderRadius: '8px',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#F5F5F5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            로그인
          </Link>
          <Link
            href="/signup"
            style={{
              display: 'block',
              padding: '12px 16px',
              fontFamily: 'Inter',
              fontSize: '15px',
              fontWeight: 500,
              color: '#000000',
              textDecoration: 'none',
              borderRadius: '8px',
              transition: 'background 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#F5F5F5';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
            }}
          >
            회원가입
          </Link>
        </div>
      )}

      {/* 배경 클릭시 닫기 */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9997,
          }}
        />
      )}
    </>
  );
}

