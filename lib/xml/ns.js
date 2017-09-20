import {
    XML_NAMESPACE_URI,
    XMLBaseAttrAssembler,
    XMLIdAttrAssembler,
    XMLLangAttrAssembler,
    XMLSpaceAttrAssembler
} from 'index'

export default {
    [XML_NAMESPACE_URI] : {
        base : XMLBaseAttrAssembler,
        id : XMLIdAttrAssembler,
        lang : XMLLangAttrAssembler,
        space : XMLSpaceAttrAssembler
    }
}
