# twix

![](https://i.namu.wiki/i/icyiAT5in6w0UFBytYYugsTD0PRw2xc7W56AugwPN1j_1oGBDQ8eKBIIRoAaNmtzorxKpCcNqjbdUqQH22mhgNtnbhIooXy2eLMP5rKopyKJ0A_KBZ7R52LLPUsAZ8xgteUDFJwaYNvaI0zV2g-a1Q.webp)

```
🍫 NextJS, Prisma, Tailwind, API Routes, SWR 를 활용한 미니 트위터 프로젝트
```

---

## 🗂️ 기능 목록

- 메인 페이지 `/`

  - 모든 게시물 + 좋아요
  - 게시물 작성 기능
  - 로그인 여부를 확인
    - 로그인이 되어있다면 홈페이지로
    - 그렇지 않다면 `/log-in` 으로 이동

- 로그인 `/log-in`

  - 아이디, 비밀번호 일치 여부 확인 후 토큰 발급
  - 로그아웃 시 토큰 삭제

- 회원가입 `/create-account`

  - user db에 저장

- 상세 게시물 확인 `/twit/[id]`
  - 해당 id에 해당하는 게시물의 상세 내용
  - 좋아요 기능
