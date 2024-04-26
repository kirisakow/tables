import ContentReferenceWidget from '../../src/views/ContentReferenceWidget.vue'
import richObject from '../fixtures/reference/richObject.json'

describe('ContentReferenceWidget', () => {
    it('mounts', () => {
        cy.log(richObject.richObject)
        cy.mount(ContentReferenceWidget, {
            props: {
                richObject: richObject.richObject,
            }
        })
    })
})
