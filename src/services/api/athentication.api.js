export function signIn(token) {
  return {
    url: "/login",
    method: "GET",
    headers: {
      Authorization: `${"Bearer" + token}`,
    },
  };
}
