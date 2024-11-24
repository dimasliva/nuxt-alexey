export default defineNuxtRouteMiddleware((to, from) => {
  console.log("to", to);
  console.log("from", from);
  const block_token = getCookie("blog_token");
  if (block_token) {
    return true;
  }
  return false;
});
