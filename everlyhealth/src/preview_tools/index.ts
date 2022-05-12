import { Link } from "./types"
import { links } from "./links"
import { PREVIEW_ENV } from "./environments"
import { link_template } from "./templates"

const env = links(PREVIEW_ENV)

function create_wrapper() {
  const bkmklt = document.createElement("div")
  bkmklt.id = "bkmklt"
  return bkmklt
}

function frag_from(str: string): DocumentFragment {
  const frag = new DocumentFragment()
  frag.textContent = str
  return frag
}
function main(env: Record<string, Link>) {
  const wrapper = create_wrapper()

  for (let key in env) {
    let template = link_template(env[key])
    let link = frag_from(template)
    wrapper.appendChild(link)
  }

  document.body.appendChild(wrapper)
}
console.log("Bloop")
main(env)
