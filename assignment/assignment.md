# 로그인 방식

### 세션 기반 vs 토큰기반

HTTP stateless

서버로 가는 요청은 이전 요청과 독립적으로 다뤄진다.

### 쿠키

⇒ 클라이언트 측에 저장되는 작은 기록 정보 파일

자동으로 생성됨

데이터 크기에 대한 제한이 있음

### 쿠키 동작 순서

<aside>
💡 쿠기 동작
1. 클라이언트 페이지 요청
2. 웹서버 쿠키 생성
3. 생성한 쿠키를 정보를 담아 클라이언트에게 return 
4. 넘겨받은 쿠키는 클라이언트가 가지고 있다가, 서버 요청과 함께 쿠키 전송
5. 동일 웹페이지에 접속시에 요청 페이지와 함께 쿠키를 전송함

</aside>

### 세션

⇒ 서버측에 저장되는 기록 정보 파일

일정 시간동안 브라우저로 들어오는 요구를 유지시키는 기술

### 세션동작순서

<aside>
💡 세션 동작순서
1. 클라이언트 페이지 요청
2. 클라이언트 쿠키에 session-id가 있는지 확인
3. Session-id가 존재하지 않으면 서버가 생성해서 클라이언트에게 돌려줌
4. 서버에서 준 session-id를 쿠키 이용하여 서버에 저장함
5. 클라이언트 재접속시, 쿠키 이용해서 session-id값을 서버에 전달함

</aside>

### 토큰

⇒ 사용자의 로그인 정보 + 서버에서 발급되었음을 증명하는 전자서명

### 토큰 기반 인증 동작 순서

<aside>
💡 토큰기반 인증 동작순서
1. 로그인하면 서버에서 토큰을 발급
2. 클라이언트가 다른요청할때, 발급받은 토큰과 함께 요청
3. 서버는 해당 토큰이 유효한지 검사하고 응답

</aside>

### 토큰 보안 이슈

⇒ 토큰도 1개만 쓰면 보안 문제가 존재한다.

Access token과 Refresh token을 사용하면 서로가 서로의 유효성을 검증해준다.

### CORS 에러

⇒ Cross-origin resource sharing

다음중 하나가 다른 경우 발생함.

1. http와 https
2. 도메인이 다름
3. 포트번호가 다름

# 웹스토리지

⇒ key-value형태로 저장됨

1. 클라이언트에 대한 정보 저장
2. 웹 스토리지는 브라우저에만 정보 저장
3. 쿠키는 서버 로컬에 정보저장
4. 서버에 불필요하게 정보저장하지 않음

### 로컬 스토리지 vs 세션스토리지

| 로컬스토리지 | 세션스토리지 |
| --- | --- |
| 세션이 끝나도 데이터 지워지지 않음 | 세션이 끝날때, 브라우저가 종료될때, 데이터가 지워지게됨 |
|  |  |

## 로컬스토리지

로컬스토리지 값 세팅하기

```jsx
localStorage.key="value"
localStorage.setItem("key",1)
```

로컬스토리지 값 불러오기

```jsx
localStorage.key
localStorage.getItem("key")
```

## 세션스토리지

세션 스토리지 값 세팅하기

```jsx
sessionStorage.key="value"
sessionStorage.setItem(key,"value")
```

세션스토리지 값 불러오기

```jsx
sessionStorage.key
sessionStorage.getItem("key")
```

## 쿠키

쿠키 세팅하기

```jsx
setCookie("key","value",time);
```

쿠키 불러오기

```jsx
getCookie("key")
```

### JSON관련 함수

```jsx
JSON.parse()
```

JSON을 js객체로 변환

```jsx
JSON.stringify()
```

js객체를 JSON으로 변환