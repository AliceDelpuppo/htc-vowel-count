const $input = document.querySelector('.container input[data-type="text"]')
const $span = document.querySelector('.result span')

function identifyVowel(){
    const regex = /[aeiou]/ig
    const valueInput = $input.value

    const match = valueInput.match(regex)
    // console.log(match)

    if(match){
        $span.textContent = match.length
    } else{
        $span.textContent = '0'
    }
}

$input.addEventListener('input', identifyVowel)