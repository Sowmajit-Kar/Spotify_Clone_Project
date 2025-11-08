console.log('Lets write some code with the java Script')


async function main() {
    let a =await fetch("http://127.0.0.1:3000/songs/")
    let response=await a.text();
    console.log(response)
    let div=document.createElement("div")
    div.innerHTML=response;
    div.getElementByTagName("a")
     console.log(TextDecoderStream)
let songs=[]
    for(let index=0;index<as.length;index++){
        const element=as[index];
        if(element.href.endWith(".mp3")){
              songs.push(element.href)


        }

    }
return songs

}

main()




























