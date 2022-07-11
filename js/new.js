
var button = document.querySelectorAll(".buttonID")
const iframe = document.getElementById("newframe")
const links = ['https://www.youtube.com/watch?v=zIw26SwyWGA','https://www.youtube.com/watch?v=BbdPXHQk5-o']

// const iWindow = iframe.contentWindow;
// getElementById("inputYT")


iframe.addEventListener("load", function(){
    const input = iframe.contentWindow.document.getElementById("inputYT");
    console.log(input)
    var button1 = iframe.contentWindow.document.getElementById("searchButtonYT");
    console.log(button1)
    for(i=0;i<button.length;i++){
        // button[i].onClick = () => console.log('Test')   
        // console.log(button[i])
        const link  = links[i]
            button[i].addEventListener('click', ()=>{
                console.log(links)
                input.value= link
                button1.click()
                        })
    }
})  
  
  
console.log(iframe)

console.log(button)




// // button.forEach(element => {
    
        



//     }
