import {
    XMLDocumentAssembler,
    base, cdata, element, id, instruction,
    lang, space, stylesheet, xmlns
} from '../lib'

const xmldoc = new XMLDocumentAssembler({
    node : document,
    childNodes : [
        stylesheet({ href : 'example.css' }),
        element({
            attributes : [
                base('http://example.org/'),
                id('example'),
                lang('ru'),
                space('preserve'),
                xmlns('http://example.org/namespace')
            ],
            childNodes : instruction('example')
        })
    ]
})

cdata({
    parentNode : xmldoc.documentElement,
    data : xmldoc.serialize()
})
