console.log('this works');

let downArrow = document.getElementById('downArrow');

downArrow.addEventListener('click', function(){
    console.log('clicked');
    this.scrollIntoView({behavior:'smooth', #latest})
})