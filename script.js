var stat = document.querySelector('h5')

var addFriend = document.querySelector('.add')
var flag = 0

addFriend.addEventListener('click', function(){
    if(flag === 0){
        stat.innerHTML = "Friend"
        stat.style.color = "green"
        addFriend.innerHTML = "Remove"
        addFriend.style.backgroundColor = "#dadada"
        addFriend.style.color = "#111"
        flag = 1
    }
    else{
        stat.innerHTML = "Stranger"
        stat.style.color = "red"
        addFriend.innerHTML = "Add Friend"
        addFriend.style.backgroundColor = "cadetblue"
        addFriend.style.color = "#fff"
        flag = 0
    }
})
