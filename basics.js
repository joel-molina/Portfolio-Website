const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.headers');

//Collapsable Menu header 
menuToggle.addEventListener('click', () => 
{
    navigation.classList.toggle('active');
});