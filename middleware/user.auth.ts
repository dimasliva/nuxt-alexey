export default defineNuxtRouteMiddleware((to, from) => {
  console.log("to", to);
  console.log("from", from);
  const access_token = getCookie("access_token");
  if (access_token) {
    return true;
  }
  return false;
});
