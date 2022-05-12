import { url_for } from "./helpers"

export const link_template = (link) =>
  `<a href="${url_for(link)}">${link.display}</a>`
