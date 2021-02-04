# custom-cypress-commands

A repo containing many different commands that make writing cypress easier

## ✨ Installation

```bash
npm install cypress-custom-commands
```
#### In your support/index.js
Import this to your index.js to bring in all generic reusable commands
```javascript
import 'custom-cypress-commands';
```
#### In your test file
Import this into your test file to make use of custom commands in the package
```javascript
import { customFunctions } from 'custom-cypress-commands';
```
## 💻 Usage

`test.spec.js`
```javascript
import { customFunctions } from 'custom-cypress-commands';

describe('Example test', () => {
  it('Check the wording in the main heading', () => {
    customFunctions.checkWordingIncludes('#mainHeading', 'Welcome');
  });
});
```

#### This is a work in progress, please keep this in mind for any issues you face.