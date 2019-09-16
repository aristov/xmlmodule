import {
    XMLDocumentAssembler,
    XMLBase,
    CDATASectionAssembler,
    XMLElementAssembler,
    Id,
    ProcessingInstructionAssembler,
    Lang,
    Space,
    XMLStylesheet,
    Xmlns
} from '../lib'

const xmldoc = new XMLDocumentAssembler({
    node : document,
    children : [
        new XMLStylesheet({ href : 'example.css' }),
        new XMLElementAssembler({
            attributes : [
                new XMLBase('http://example.org/'),
                new Id('example'),
                new Lang('ru'),
                new Space('preserve'),
                new Xmlns('http://example.org/namespace')
            ],
            children : new ProcessingInstructionAssembler('example')
        })
    ]
})

new CDATASectionAssembler({
    parentNode : xmldoc.documentElement,
    data : xmldoc.serialize()
})
