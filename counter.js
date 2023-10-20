// Check if there is already a vlaue in local storage
if (!localStorage.getItem('counter')) {
    // If not, set the counter to 0 in local storage
    localStorage.setItem('counter', 0);
}
            function count(){
                let counter = localStorage.getItem('counter');
                counter ++;
                document.querySelector('h1').innerHTML = counter;
                localStorage.setItem('counter', counter);
                if(counter % 10 == 0){
                    alert(`The counter is ${counter}`);
                }  
            }
            document.addEventListener('DOMContentLoaded', function(){
               
                document.querySelector('button').onclick = count;
                document.querySelector('h1').innerHTML = localStorage.getItem('counter');
                // setInterval(count, 1000);
            });