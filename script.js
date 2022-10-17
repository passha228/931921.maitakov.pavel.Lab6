function showOnePic(className) {
    let elem = document.getElementsByClassName(className).item(0);
    
    let pic = elem.childNodes.item(1);

    if (pic.classList.contains("hide") === true)  pic.classList.remove("hide");
    else pic.classList.add("hide");
}

function showBothPic() {
    let elem1 = document.getElementsByClassName("blue").item(0);    
    let elem2 = document.getElementsByClassName("green").item(0);
    
    let arr = Array(2);
    arr[0] = elem1.childNodes.item(1);
    arr[1] = elem2.childNodes.item(1);
    
    let flag = true;
    for(const elem of arr)
        flag = flag & elem.classList.contains("hide");
    
    if(flag)
        for(let elem of arr)
            elem.classList.remove("hide");
    else 
        for(const elem of arr)
            elem.classList.add("hide");
}