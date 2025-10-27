# 페이지 Supabase 연동 가이드

## ✅ 완료된 연동

### 1. About 페이지 (/about)
- ✅ 문의 폼이 Supabase contacts 테이블과 연동됨
- 사용자가 폼을 제출하면 자동으로 데이터베이스에 저장
- 관리자 페이지에서 확인 가능

---

## 🔄 추가 연동이 필요한 페이지

### 2. Shop 페이지 (/shop)
현재: 하드코딩된 상품 이미지  
필요: Supabase에서 상품 불러오기

```typescript
// app/shop/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Shop() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    loadProducts();
  }, []);

  async function loadProducts() {
    const { data } = await supabase
      .from('products')
      .select('*')
      .order('created_at', { ascending: false });
    
    setProducts(data || []);
  }

  // 상품 리스트를 products.map()으로 렌더링
}
```

### 3. Product 페이지 (/product)
현재: 정적 상품 상세  
필요: 동적 라우팅 + Supabase에서 상품 정보 불러오기

```typescript
// app/product/[id]/page.tsx
export default async function ProductDetail({ params }: { params: { id: string } }) {
  const { data: product } = await supabase
    .from('products')
    .select('*')
    .eq('id', params.id)
    .single();

  // 관련 상품도 불러오기
  const { data: relatedProducts } = await supabase
    .from('products')
    .select('*')
    .limit(6);
}
```

### 4. Article 페이지 (/article)
현재: 정적 기사  
필요: Supabase에서 기사 불러오기

```typescript
// app/article/[id]/page.tsx
export default async function ArticleDetail({ params }: { params: { id: string } }) {
  const { data: article } = await supabase
    .from('articles')
    .select('*')
    .eq('id', params.id)
    .single();

  // 관련 기사도 불러오기
  const { data: relatedArticles } = await supabase
    .from('articles')
    .select('*')
    .limit(3);
}
```

---

## 📝 사용 방법

1. **관리자 페이지에서 데이터 추가**
   - `/admin`으로 이동
   - 상품, 기사 추가

2. **실제 페이지에서 확인**
   - Shop, Product, Article 페이지에서 추가한 데이터 확인
   - 자동으로 최신 데이터 표시

3. **이미지 URL**
   - 현재는 외부 URL 사용 (예: https://example.com/image.jpg)
   - 나중에 Supabase Storage로 업그레이드 가능

---

## 🎯 다음 단계 (선택사항)

1. **동적 라우팅 구현**
   - `/product/[id]` 형식으로 변경
   - 각 상품/기사마다 고유 페이지

2. **Supabase Storage**
   - 이미지를 Supabase Storage에 업로드
   - URL 자동 생성

3. **검색 기능**
   - 상품 검색
   - 카테고리 필터

4. **페이지네이션**
   - 상품 목록 페이지 나누기

5. **장바구니 기능**
   - 상품을 장바구니에 추가
   - 주문 기능 구현

