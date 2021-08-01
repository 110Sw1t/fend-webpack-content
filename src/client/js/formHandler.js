import { checkForName } from './nameChecker'

export function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    
    // Client.checkForName(formText) // Syntax error now but will work once compiled in dist folder 
                                     // I cant do liniting with this
    checkForName(formText) // can be used instead of import as Client will be a global

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8081/test')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message + ' @@ ' + res.time
    })
}
