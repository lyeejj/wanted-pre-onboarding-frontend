# wanted-pre-onboarding-frontend

이름: 이윤주

## 프로젝트 실행 방법

```
npm install
npm start
```

## 프로젝트 배포 링크

### 배포 링크 : https://wanted-preonboarding-frontend-todo-app.vercel.app/

<details>
<summary> 과제 데모영상 </summary>

![사전과제_데모영상](https://github.com/lyeejj/wanted-pre-onboarding-frontend/assets/72495998/abe4a86a-09d1-4082-87fc-3ede9f453e91)

</details>

## 기술 스택

- React
- Styled-components
- Context API
- axios

## 프로젝트 구조

```
📦src
 ┣ 📂components
 ┃ ┣ 📂auth
 ┃ ┃ ┣ 📜FormStyles.js
 ┃ ┃ ┣ 📜SignInForm.jsx
 ┃ ┃ ┗ 📜SignUpForm.jsx
 ┃ ┣ 📂layout
 ┃ ┃ ┗ 📜MainLayout.js
 ┃ ┣ 📂route
 ┃ ┃ ┣ 📜AuthRoute.js
 ┃ ┃ ┗ 📜PublicRoute.js
 ┃ ┗ 📂todo
 ┃ ┃ ┣ 📜TodoItem.jsx
 ┃ ┃ ┣ 📜TodoList.jsx
 ┃ ┃ ┗ 📜TodoStyles.js
 ┣ 📂context
 ┃ ┣ 📜TodoContext.js
 ┃ ┗ 📜todoReducer.js
 ┣ 📂hooks
 ┃ ┗ 📜useInputs.js
 ┣ 📂lib
 ┃ ┗ 📂apis
 ┃ ┃ ┣ 📜auth.js
 ┃ ┃ ┣ 📜instance.js
 ┃ ┃ ┗ 📜todo.js
 ┣ 📂pages
 ┃ ┣ 📜Home.jsx
 ┃ ┣ 📜SignIn.jsx
 ┃ ┣ 📜SignUp.jsx
 ┃ ┗ 📜Todo.jsx
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyle.js
 ┃ ┗ 📜theme.js
 ┣ 📜App.js
 ┗ 📜index.js
```

## 구조 설명

> 관심사를 분리하여 관리하기 위해 구조에 대해 고민했습니다.
> components / context / hooks / apis / pages / styles

- components: 공통적으로 사용되는 컴포넌트와 페이지에서 사용되는 컴포넌트들을 관리합니다.
- context: 투두리스트 데이터를 Context API를 사용하였고 컨텍스트, 리듀서를 따로 나누어 관리합니다.
- hooks: 커스텀훅을 관리합니다.
- lib/apis: 통신에 필요한 api들을 모아놓은 폴더입니다.
- pages: 페이지 컴포넌트들을 모아놓은 폴더입니다.
- styles: 글로벌 전역상태를 관리하는 폴더입니다.

## 구현 기능

### 로그인/회원가입

- /signup 경로에 회원가입 기능, /signin 경로에 로그인 기능 개발
- 유효성 검사기능 구현 : 이메일에 @포함, 비밀번호 8자이상
  - 유효성 검사를 통과하지 못한다면 button에 disabled 속성 부여
- 회원가입이 정상적으로 완료되었을 시 /signin 경로로 이동
- 로그인을 진행하고 로그인이 정상적으로 완료되었을 시 /todo 경로로 이동
- 로그인시 응답받은 JWT 토큰값은 로컬스토리지에 저장

### 투두리스트

- /todo경로에 투두 리스트 기능 개발
- todo CRUD 구현 + input checkbox로 완료여부 체크
- todo 데이터 상태관리를 Context API로 모듈화
- axios 인스턴스를 활용하여 토큰 인증을 필요로 하는 API 요청 구현

### 리다이렉트

- AuthRoute, PubliceRoute로 나누어 로그인여부에 따른 리다이렉트를 구현했습니다.
- 로그인 했을때 /signin 또는 /signup 페이지에 접속한다면 /todo 경로로 리다이렉트
- 로그인하지 않았을때 /todo페이지에 접속한다면 /signin 경로로 리다이렉트
