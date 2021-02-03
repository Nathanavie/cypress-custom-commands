/**
    * triggerNavClick
    * 
    * Pass in an element to click (eg: '.next')
    * Pass in the page name of the next page that is expected to load
    * @param {String} element
    * @param {String} url
*/
Cypress.Commands.add("triggerNavClick", (element, url) => {
    cy.get(element).click({force: true}).url().should('include', url)
})

/**
    * clickLink
    * 
    * Click on a link that contains the entire wording passed
    * @param {String} text
 */
Cypress.Commands.add("clickLink", (text) => {
    cy.get('a').contains(text).click({force:true})
})

/**
    * clickElementContaining
    * 
    * Click on an element that contains the entire wording passed
    * @param {Stirng} element
    * @param {String} text
 */
Cypress.Commands.add("clickElementContaining", (element, text) => {
    cy.get(element).contains(text).click({force:true})
})

/**
    * clearField
    * 
    * Clear a field and assert that it's empty
    * @param {String} element
*/
Cypress.Commands.add("clearField", (element) => {
    cy.get(element).clear().should('have.value',"")
})

/**
    * isEmpty
    * 
    * Assert than an element is empty
    * @param {String} element
*/
Cypress.Commands.add("isEmpty", (element) => {
    cy.get(element).should('be.empty')
})

/**
    * triggerNonForceClick
    * 
    * Click on the element passed (include the . if class or the # if ID)
    * 
    * Will fail in test if element is covered by another element
    * @param {String} element
*/
Cypress.Commands.add("triggerNonForceClick", (element) => {
    cy.get(element).click()
})

/**
    * triggerClick
    * 
    * Click on an element
    * @param {String} element
*/
Cypress.Commands.add("triggerClick", (element) => {
    cy.get(element).click({force: true})
})

/**
    * clickFirstElement
    * 
    * Click on the first matching element passed
    * @param {String} element
    * @param {String} url
*/
Cypress.Commands.add("clickFirstElement", (element, url) => {
    if (url) {
        cy.get(element).first().click({force: true}).url().should('include', url)
    }
    else {
        cy.get(element).first().click({force: true})
    }
})

/**
    * doesInclude
    * 
    * Pass in an element and value to check that the element does include the given element
    * Pass value as a string or an array, if array it will loop through all of your given strings and make sure they are included
    * @param {String} element
    * @param {String} value
    * @param {Array} value
*/
Cypress.Commands.add("doesInclude", (element, value) => {
    if(typeof(value) === "string") cy.get(element).should('include', value);
    if(typeof(value) === "object") value.map((wording, i) => cy.get(element).should('include', wording))
})

/**
    * doesNotInclude
    * 
    * Pass in an element and value to check that the element does not include the given element
    * Pass value as a string or an array, if array it will loop through all of your given strings and make sure they are not included
    * @param {String} element
    * @param {String} value
    * @param {Array} value
*/
Cypress.Commands.add("doesNotInclude", (element, value) => {
    if(typeof(value) === "string") cy.get(element).should('not.include', value);
    if(typeof(value) === "object") value.map((wording, i) => cy.get(element).should('not.include', wording))
})

/**
    * doesNotContain
    * 
    * Pass in an element and value to check that the element does contain the given element
    * Pass value as either a string or an array, the command will either check the individual string or map through all of your strings you pass in
    * @param {String} element
    * @param {String} value
    * @param {Array} value
*/
Cypress.Commands.add("doesContain", (element, value) => {
    if(typeof(value) === "string") cy.get(element).contains(value);
    if(typeof(value) === "object") value.map((wording, i) => cy.get(element).contains(wording))
})

/**
    * doesContain
    * 
    * Pass in an element and value to check that the element does NOT contain the given element (this works with objects)
    * Pass value as either a string or an array, the command will either check the individual string or map through all of your strings you pass in
    * @param {String} element
    * @param {String} value
    * @param {Array} value
*/
Cypress.Commands.add("doesNotContain", (element, value) => {
    if(typeof(value) === "string") cy.get(element).should('not.contain', value);
    if(typeof(value) === "object") value.map((wording, i) => cy.get(element).should('not.contain', wording))
})


/**
    * hasValue
    * 
    * Assert that the given element has the value (value parameter in html)
    * @param {String} element
    * @param {String} value
*/
Cypress.Commands.add("hasValue", (element, value) => {
    cy.get(element).should('have.value', value)
})

/**
    * doesNotExist
    * 
    * Check that the given element does not exist anywhere in the DOM (If hidden it DOES exist)
    * @param {String} element
    * @example cy.doesNotExist('#myElementID')
*/
Cypress.Commands.add("doesNotExist", (element) => {
    cy.get(element).should('not.exist');
})

/**
    * doesExist
    * 
    * Check that the given element does exist anywhere in the DOM (If hidden it DOES exist)
    * @param {String} element
    * @example cy.doesExist('#myElementID')
*/
Cypress.Commands.add("doesExist", (element) => {
    cy.get(element).should('exist');
})
    
/**
    * hasClass
    * 
    * Assert that the given element has the passed class
    * @param {String} element
    * @param {String} value
 */
Cypress.Commands.add("hasClass", (element, value) => {
    cy.get(element).should('have.class', value)
})

/**
    * doesNotHaveClass
    * 
    * Assert that the given element does not have the passed class
    * @param {String} element
    * @param {String} value
 */
Cypress.Commands.add("doesNotHaveClass", (element, value) => {
    cy.get(element).should('not.have.class', value)
})

/**
    * hasCSS
    * 
    * Assert that the given element has the passed css variables
    * @param {String} element
    * @param {String} css
    * @param {String} value
 */
Cypress.Commands.add("hasCSS", (element, css, value) => {
    cy.get(element).should('have.css', css, value)
})

/**
    * focusOn
    * 
    * Trigger focus on an element
    * @param {String} element
*/
Cypress.Commands.add("focusOn", (element) => {
    cy.get(element).focus();
})


/**
    * isVisible
    * 
    * Check that the given element is visible on the page
    * @param {String} element
*/
Cypress.Commands.add("isVisible", (element) => {
    cy.get(element).should('be.visible');
})

/**
    * isNotVisible
    * 
    * Make sure that the element passed into this function is not visible on the page
    * @param {String} element
*/
Cypress.Commands.add("isNotVisible", (element) => {
    cy.get(element).should('not.be.visible');
})

/**
    * numberOf
    * 
    * Make sure that the given element is rendered a given amount of times
    * @param {String} element
    * @param {Number} number
*/
Cypress.Commands.add("numberOf", (element, number) => {
    cy.get(element).should('have.length', number);
})

/**
    * inputText
    * 
    * Clear a given text input field and type in passed text
    * @param {String} element
    * @param {String} text
*/
Cypress.Commands.add("inputText", (element, text) => {
    cy.get(element).clear().type(text).should('have.value', text);
})

/**
    * inputTextAndBlur
    * 
    * Clear a given text input field and type in passed text, then blur (remove focus)
    * @param {String} element
    * @param {String} text
*/
Cypress.Commands.add("inputTextAndBlur", (element, text) => {
    cy.get(element).clear().type(text).blur().should('have.value', text);
})
/**
    * checkMaxFieldLength
    * 
    * This function can be used in 2 different ways
    * 
    * Check that the input field has a maximum input length (eg. max length of 10 ch, enter 13 and make sure only 10 are visible)
    * OR
    * Check that the input field contains the text and the length you pass (eg. max length of 10 ch, enter 4 and make sure only 4 are visible)
    * @param {String} element
    * @param {String} text
    * @param {Number} length
*/
Cypress.Commands.add('checkMaxFieldLength', (element, text, length) => {
    cy.get(element).clear().type(text).then((val) => {
        expect(val[0].value).to.have.lengthOf(length)
    })
})

/**
    * checkMaxCharacterLength
    * 
    * This function can be used in 2 different ways / This function does not include spaces
    * 
    * Check that the input field has a maximum input length (eg. max length of 10 ch, enter 13 and make sure only 10 are visible)
    * OR
    * Check that the input field contains the text and the length you pass (eg. max length of 10 ch, enter 4 and make sure only 4 are visible)
    * @param {String} element
    * @param {String} text
    * @param {Number} length
*/
// This is the same as 'checkMaxFieldLength' however it will remove all spaces and count the length of the remaining characters
Cypress.Commands.add('checkMaxCharacterLength', (element, text, length) => {
    cy.get(element).clear().type(text).then((val) => {
        let string = val[0].value.toString(),
            spacesInString = (string.split(" ").length - 1),
            characterLength = (string.length - spacesInString);
        assert.equal(characterLength, length, 'Max Character Length for this element checked')
    })
})

/**
    * dropSelect
    * 
    * Select an option from a dropdown
    * @param {String} element
    * @param {String} val
*/
Cypress.Commands.add("dropSelect", (element, val) => {
    if(cy.get(element).should('be.visible')) cy.get(element).select(val).should('have.value', val);
})

/**
    * checkAllDropdownOptions
    * 
    * Check each of the dropdown options and compare to a given array
    * @param {String} element
    * @param {Array} optionArr
*/
Cypress.Commands.add("checkAllDropdownOptions", (element, optionArr) => {
    cy.get(element).children('option').then(options => {
        let availOptions = Object.entries(options),
            actual = [];
        availOptions.map((opt, index) => {
            if(typeof(opt[1]) === 'object') {
                //push the value of each option object into the actual array
                actual.push(opt[1].value)
            } 
        })
        //remove the blank value for the 'Please Select' option
        actual.shift()
        //check that both arrays equal each other exactly.
        expect(actual).to.deep.eq(optionArr)
      })
})

/**
    * checkAllDropdownWording
    * 
    * Check each of the dropdown options wording and compare to a given array
    * @param {String} element
    * @param {Array} optionArr
*/
Cypress.Commands.add("checkAllDropdownWording", (element, optionArr) => {
    cy.get(element).children('option').then(options => {
        let availOptions = Object.entries(options),
            actual = [];
        availOptions.map((opt, index) => {
            if(typeof(opt[1]) === 'object') {
                //push the text content of each option object into the actual array
                actual.push(opt[1].textContent)
            } 
        })
        //remove the blank value for the 'Please Select' option
        actual.shift()
        //check that both arrays equal each other exactly.
        expect(actual).to.deep.eq(optionArr)
      })
})

/**
    * dropSelectByIndex
    * 
    * Select an option in the dropdown by a given number
    * 
    * @param {String} element
    * @param {Number} selection
*/
Cypress.Commands.add("dropSelectByIndex", (element, selection) => {
    cy.get(`${element} option`).eq(selection).invoke('val').then(el => {
        cy.get(element).select(el)  
    })
})

/**
    * enterAutoComplete
    * 
    * Type in value and select the first option in the autocomplete box
    * @param {String} element
    * @param {String} value
*/
Cypress.Commands.add("enterAutoComplete", (element, value) => {
    cy.get(element).clear().type(value).wait(1000).type('{downarrow}{enter}').should('have.value', value);
})

/**
    * checkURL
    * 
    * Check that the current URL contains a string
    * @param {String} url
*/
Cypress.Commands.add("checkURL", (url) => {
    cy.url().should('include', url);
})

/**
    * selectRadioButton
    * 
    * Select an option out of given radio buttons
    * the element to pass is the repeated one, with radio buttons this is often a 'label'
    * (eg: if all radio buttons 'labels' that are in a div with class .Policy, then pass '.Policy label')
    * @param {String} element
    * @param {String} wording
*/
Cypress.Commands.add("selectRadioButton", (element, wording) => {
    cy.get(element).then(res => {
        res.map((index, el) => {
            if(el.outerText === wording) {
                try {
                    cy.triggerClick(el.children[0])
                } catch (err) {
                    throw new Error(err)
                }
            }
        })
    })
})

/**
 * isChecked
 * 
 * This will check that the parent input is checked for the given element
 * 
 * @param {String} element
 * @example cy.isChecked('[for="myRadioButton"]')
 */
Cypress.Commands.add("isChecked", (element) => {
    cy.get(element).parent().find('input').should('be.checked')
}) 

/**
 * isNotChecked
 * 
 * This will check that the parent input is NOT checked for the given element
 * 
 * @param {String} element
 * @example cy.isNotChecked('[for="myRadioButton"]')
 */
Cypress.Commands.add("isNotChecked", (element) => {
    cy.get(element).find('input').should('not.be.checked')
}) 

/**
 * returnValueOfElement
 * 
 * Return the TEXT value of the given element
 * This will return is to be applied to a variable
 * 
 * @param {String} element
 * @example cy.returnValueOfElement('#webref').then(res => webreference = res)
 */
Cypress.Commands.add("returnValueOfElement", (element) => {
    cy.get(element).invoke('text').then(value => {
        return cy.wrap(value)
    })
}) 

/**
    * checkRadioButtonWording
    * 
    * Check the wording of radio buttons match the wording in a given array
    * This checks the order is the same as the array as well
    * @param {String} element
    * @param {Array} wording
*/
Cypress.Commands.add("checkRadioButtonWording", (element, wording) => {
    cy.get(element).then(res => {
        let actual = [];
        res.map((index, el) => {
            let val = el.textContent.trim()
            actual.push(val)
        })
        expect(actual).to.deep.eq(wording)
    })
})

/**
 * removeAttributeFromLinkAndClick
 * 
 * Find the passed element and then remove the passed attribute and click on it
 * @param {string} element
 * @param {string} attribute
 * 
 */
Cypress.Commands.add("removeAttributeFromLinkAndClick", (element, attribute) => {
    cy.get('a').contains(element).invoke('removeAttr', attribute).click()
})

/**
 * checkAttribute
 * 
 * Check for an attribute and value within a given element
 * 
 * @param {String} element
 * @param {String} attribute
 * @param {String} value
 */
Cypress.Commands.add("checkAttribute", (element, attribute, value) => {
    cy.get(element).should('have.attr',attribute,value)
})

/**
 * checkWordingIncludes
 * 
 * Check that wording is exactly the same as what is passed in the jsonObj object
 * If passing an object / array make sure each string in the object is what is expected for the next element
 * 
 * @param {String} element
 * @param {Array} jsonObj
 */
Cypress.Commands.add("checkWordingIncludes", (element, jsonObj) => {
    cy.get(element).should('have.length', jsonObj.length).then(el => {
        el.map((index, item) => {
            if(typeof(jsonObj[index]) === 'object') {
                jsonObj[index].map((string, i) => {
                    expect(item.textContent).to.include(string)    
                })
            } else {
                expect(item.textContent).to.include(jsonObj[index])
            }
        })
    })
})

/**
 * checkDataLayer
 * 
 * Check that the dataLayer on the page has the same values as the given object
 * Pass in an array of strings that contain the keys that are to be ignored
 * @param {Object} object
 * @param {Array} ignoreList
 * 
 * @example cy.checkDataLayer(object, ['ignoreThis', 'ignoreThat'])
 */

Cypress.Commands.add('checkDataLayer', (object, ignoreList) => {
    //if no ignorelist is passed, we use an empty array to ignore no words
    if(ignoreList === undefined) ignoreList = []
    //if the object passed is not an object, throw an error
    if(typeof(object) != "object") throw new Error('The object parameter must be an object')
    cy.window().then(win => {
        let DL = win.dataLayer[0],
            DLlength = (Object.keys(DL).length - ignoreList.length),
            objectLength = Object.keys(object).length;
        //Make sure the datalayer is the same length as the one we expect it to match
        assert.equal(DLlength, objectLength, 'Length of both objects checked to match')
        for(let objectKey in object) {
            for(let key in DL) {
                if(objectKey === key) {
                    //only check if it is not ignored
                    if(!ignoreList.includes(key)) {
                        assert.equal(DL[key], object[objectKey], `Data layer - ${key} checked`)
                    } else {
                        //ignore if we want to not check this value
                        cy.log('Ignoring', key)
                    }
                }
            }
        }
    })
 })