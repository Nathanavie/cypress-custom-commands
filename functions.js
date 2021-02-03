export function test() {
    cy.log('Tested! There will be more reusable functions coming soon :-)')
    cy.log('For now why not look at the reusable custom cypress commands?')
}

// this is a test function that will be deleted one day
// export function loadGoogle() {
//     cy.visit('https://www.google.com')
// }

export function checkWordingIncludes(el, wording) {
    cy.doesContain(el, wording)
}