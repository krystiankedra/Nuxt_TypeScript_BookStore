export default {
  env: {},
  head: {
    title: "nuxttypescriptbookstore",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "nuxttypescriptbookstore" }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel:"stylesheet", href:"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" }
    ]
  },
  loading: { color: "#3B8070" },
  build: {},
  modules: [
    "@nuxtjs/axios",
  ],
  axios: {}
}
