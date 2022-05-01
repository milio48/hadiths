async function ready() {
  let params = new URLSearchParams(document.location.search);
  let edition = params.get("edition");
  let bareedition = params.get("bareedition") || edition.replace(/\d+/g, '').split('-')[1].trim()
  if (!bareedition)
    return
  let data = await getJSON('info')

  let UL = getElement('ul', { class: 'list-group' })
  for (let [key, value] of Object.entries(data[bareedition]['metadata']['sections'])) {
    let LI = getElement('li', { class: 'list-group-item' })
    let newparams = new URLSearchParams();
    newparams.set('edition', edition)
    newparams.set('type', 'section')
    newparams.set('num', key)
    let aElem = getElement('a', { href: `data.html?${newparams.toString()}` })
    aElem.innerText = `Section ${key} : ${value}`
    LI.appendChild(aElem)
    UL.appendChild(LI)
  }
  document.querySelector('#mycontainer').appendChild(UL)
}





document.addEventListener("DOMContentLoaded", ready);