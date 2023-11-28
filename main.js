const $password = document.querySelector('input');
const $toggler = document.querySelector('.fa-eye');


const showHidePassword = () => {
    if ($password.type === 'text') {

        $password.setAttribute('type', 'password');

    }
    else {

        $password.setAttribute('type', 'text');

    }

    $toggler.classList.toggle('fa-eye');
    $toggler.classList.toggle('fa-eye-slash')
}

$toggler.addEventListener('click', showHidePassword);