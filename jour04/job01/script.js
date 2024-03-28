document.getElementById('button').addEventListener('click', async function() {
    let result = await fetch('expression.txt')
    let response = await result.text()
    console.log(response,'toto')
    document.getElementById('expression').textContent = response;
})