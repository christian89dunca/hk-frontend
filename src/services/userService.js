import http from "./httpService";
const apiEndpoint = "/REST/users";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.email,
    password: user.password,
    role: user.role
  });
}
