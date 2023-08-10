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
