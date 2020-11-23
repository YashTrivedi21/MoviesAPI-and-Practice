window.onload = () => {
    let lis = document.querySelectorAll("li")
    for(let inp of lis) {
        inp.addEventListener('click', (e) => {
            if (e.target.checked) {
                console.log(e.target,e.currentTarget)
                e.currentTarget.classList.add('done')
            } else {
                e.currentTarget.classList.remove('done')
            }
        })
    }
}