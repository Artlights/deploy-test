function main(){
  document.addEventListener('click', getClick); 
   function getClick(event){
        const element = event.target;
        if (element.id === 'div'){
                let p = document.querySelector('#p');
            p.innerHTML = 'Hello Buddy : )';
            }
    }
}
main();



    