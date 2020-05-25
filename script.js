// your code here

// DATA는 이미 작성된 트윗을 표시합니다.
//console.log(DATA)

// generateNewTweet을 호출할 때마다 새로운 트윗을 생성합니다.
//console.log(generateNewTweet());

function filterLogic(){

    let clickedButtonId = String(event.target.id);
    //console.log(clickedButtonId);
    //console.log(typeof clickedButtonId);
    
    for (let i = 0; i < document.querySelectorAll('li').length; i++ ){
        if (document.querySelectorAll('li')[i].id !== clickedButtonId) {
                document.querySelectorAll('li')[i].style.display = "none";
        }
    }
    
}

let homeButton = document.querySelector('#goingHome');
homeButton.addEventListener('click', getRidOfFilter);

function getRidOfFilter() {
    for (let i = 0; i < document.querySelectorAll('li').length; i++) {
        if(document.querySelectorAll('li')[i].style.display ===  "none") {
            document.querySelectorAll('li')[i].style.display = "";
        }
    } 
}

let commentBox = document.querySelector('#commentBox');

function makeHtmlEl(comment) {

    //tweet 전체를 담을 수 있는 틀 
    let liElement = document.createElement("li");

    //tweet 의 각 항목을 담는 틀 - 이름
    let userElement = document.createElement("button");
    userElement.innerHTML = comment.user;
    userElement.classList.add("userId");

    //filter 를 거는데 이용하기 위해서, comment 버튼에 id 를 새로 만들어줌 
    userElement.id = comment.user;

    userIdParameter = userElement.id;

    userElement.addEventListener('click', filterLogic);


    liElement.appendChild(userElement);

    //tweet 의 각 항목을 담는 틀 - 메시지
    let msgElement = document.createElement("div");
    msgElement.innerHTML = comment.message;
    msgElement.classList.add("msg");
    liElement.appendChild(msgElement);

    //tweet 의 각 항목을 담는 틀 - 작성시간
    let timeElement = document.createElement("span");
    timeElement.innerHTML = comment.created_at;
    timeElement.classList.add("created_at");
    liElement.appendChild(timeElement);

    liElement.id = comment.user; //해당 코드 라인을 통해 유저의 이름이 곧 id 가 되도록 함 
    return liElement;
}


function printComment(comment) {
    commentBox.appendChild(makeHtmlEl(comment));
}


function printComments() {
    DATA.forEach(printComment);
}



/*
//document.querySelector('.userId').addEventListener('click', filterByID);
//var clickedButtonsID = this.id;


//filter 를 걸어서 삭제하는 함수 

 //event listener 를 통해 클릭 시 하단에 만든 함수를 통해 필터를 하기위해 parameter 로 
    //this.userElement 의 값을 이렇게 내면 
    //var userIdParameter = userElement.id;
    document.querySelectorAll('.userId').onclick = console.log('onclick method is working');
    //userElement.addEventListener('click', filterByID(userIdParameter));
    function testHello() {

    console.log('hello world');
    
    /*document.querySelectorAll('li').forEach(filterLogic);

    function filterLogic(){
    if (document.querySelectorAll('li').id !== userIdParameter) {
            document.querySelectorAll('li')[i].style.display = "none";
        }
    }

} 

//모든 li tag 에 대해서 


//filter 를 걸었던 걸 되돌리는 함수
function disableFilter() {
    for (let i = 0; i < document.querySelectorAll('li').length; i++) {
        if(document.querySelectorAll('li')[i].style.display ===  "none") {
            document.querySelectorAll('li')[i].style.display = "";
        }
    } 
}
*/

printComments();



let sendTweet = document.querySelector("#sendTweet");
sendTweet.onclick = sendTweetFromInput;

function sendTweetFromInput() {

    myTweet = {};

    let idInput = document.querySelector("#idInput");
    myTweet.user = idInput.value;

    let tweetInput = document.querySelector("#tweetInput");
    myTweet.message = tweetInput.value;

    var newDate = new Date();
    var newDateFormated = newDate.format();
    myTweet.created_at = newDateFormated;

    DATA.unshift(myTweet);

    commentBox.prepend(makeHtmlEl(myTweet));
    
}


let refreshTweet = document.querySelector("#refreshTweet");
refreshTweet.onclick = refreshTweetFromRandom;

function refreshTweetFromRandom() {
    //logic-1. DATA 에 generateNewTweet 을 통해 만들어진 임의의 tweet object 를 추가 
    DATA.unshift(generateNewTweet());
    //logic-2 generateNewTweet() 으로 tweet object 를 return 
    //        → object 를 parameter 로 받는 function makeHtmlEl 에 해당 callback function 을 집어넣음
    //        → 그리고 makeHtmlEl 을 통해 return 된 liElement 를 commentBox 에 집어넣음         
    commentBox.prepend(makeHtmlEl(generateNewTweet()));
}






    //1. Li 태그의 id 값이 특정한 id일 경우가 아닌 것들을 제외하고 전부 숨김 처리한다 
    /*
    [문제해결]
    document.querySelectorAll('li') 를 가져오고 
    이를 allList 라는 array 변수에 담아준다 

    그리고 filteredList 라는 array 변수를 하나 만들어준다
    이제 그 filteredList 에 

    document.querySelectorAll('li').filter(filterByID).setAttribute('display', 'none');
    가려줘야 할 html code 만을 담은 배열 
    이 배열들의 요소에 display=none 이라는 속성을 집어넣어주고

    function filterByID() {
        for (let i = 0; i < document.querySelectorAll('li').length; i++) {
            if(document.querySelectorAll('li')[i].id !== 내가원하는아이디) {
                document.querySelectorAll('li')[i].setAttribute('dispaly', 'none');
            }
        } 
    }

    //1-1. 태그의 id 값에 접근할 수 있어야 한다 

}

//document.getElementById('test').innerHTML = 'hello twittler, check developer console!';

/*

1순위 : 정렬 기능 구현 



2순위 : 해당 정렬 기능을 button 으로 접근할 수 있게 처리 
*/
