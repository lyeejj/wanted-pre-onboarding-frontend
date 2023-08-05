import axiosInstance from "axios";

export const signin = async (data) => {
  try {
    const res = await axiosInstance.post("/auth/signin", data);
    localStorage.setItem("token", res.data.access_token);
    window.location.replace("/todo");
  } catch (error) {
    if (error.response) {
      console.log(error.response);
      alert("로그인에 문제가 발생했습니다. 다시 시도해주세요.");
    }
  }
};

export const signup = async (data) => {
  try {
    await axiosInstance.post("/auth/signup", data);
    alert("회원가입 되었습니다! 로그인 해주세요.");
    window.location.replace("/signin");
  } catch (error) {
    if (error.response) {
      console.log(error.response);
      alert("회원가입에 문제가 발생했습니다. 입력 정보를 확인해주세요.");
    }
  }
};

export const logout = () => {
  localStorage.removeItem("token");
};
