const btn = document.querySelector('button')

const clickHandler = () => {
    axios.get('https://la-bombonera.onrender.com/boca')
    .then(res => alert(res.data))
    .catch(err => console.log(err))
}

btn.addEventListener('click', clickHandler)