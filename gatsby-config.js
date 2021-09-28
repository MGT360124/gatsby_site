require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
const path = require("path")

console.log("process.env", process.env.NODE_ENV)
module.exports = {
  pathPrefix: `/`,
  plugins: [
    `gatsby-plugin-typescript`,
  ],
}
