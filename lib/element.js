import { ElementAssembler } from 'dommodule'
import { Lang, Space, Id, Base, XMLNSAttrAssembler } from './index'

export class XMLElementAssembler extends ElementAssembler {
    set xmlId(id) {
        this.setAttribute(Id, id)
    }

    get xmlId() {
        return this.getAttribute(Id)
    }

    set lang(lang) {
        this.setAttribute(Lang, lang)
    }

    get lang() {
        this.getAttribute(Lang)
    }

    set space(space) {
        this.setAttribute(Space, space)
    }

    get space() {
        this.getAttribute(Space)
    }

    set base(base) {
        this.setAttribute(Base, base)
    }

    get base() {
        this.getAttribute(Base)
    }

    set xmlns(xmlns) {
        this.setAttribute(XMLNSAttrAssembler, xmlns)
    }

    get xmlns() {
        this.getAttribute(XMLNSAttrAssembler)
    }

    set xmlnset(xmlnset) {
        Object.keys(xmlnset).forEach(localName => {
            this.setAttributeNode(new XMLNSAttrAssembler({
                localName,
                value : xmlnset[localName]
            }))
        })
    }

    get xmlnset() {
        const uri = XMLNSAttrAssembler.namespaceURI
        const handler = (res, { namespaceURI, prefix, localName, value }) => {
            if(namespaceURI === uri) {
                res[prefix? localName : ''] = value
                return res
            }
        }
        this.attributes.reduce(handler, {})
    }
}

export function element(...init) {
    return new XMLElementAssembler(...init)
}
