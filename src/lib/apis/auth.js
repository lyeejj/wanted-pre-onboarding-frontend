import axiosInstance from "./instance";

export const signin = async (data) => {
  const res = await axiosInstance.post("/auth/signin", data);
  localStorage.setItem("token", res.data.access_token);
  window.location.replace("/todo");
};

export const signup = async (data) => {
  await axiosInstance.post("/auth/signup", data);
  alert("회원가입 되었습니다! 로그인 해주세요.");
  window.location.replace("/signin");
};

export const logout = () => {
  localStorage.removeItem("token");
};
