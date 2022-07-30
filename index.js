function send(){
    const form = document.querySelector("form")
    const inputValue = form.email.value;
    alert(`O e-mail a ser enviado é: ${inputValue}`)
}