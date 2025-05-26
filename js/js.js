var video = document.getElementById("myVideo");
// 변수 video는 도큐먼트에서 id(myVideo)를 찾는다 는 의미
var btn = document.getElementById("myBtn");
// 변수 video는 도큐먼트에서 id(myBtn)을 찾는다 는 의미

function myFunction(){
    // 가정법, 2개의 이벤트를 실행
    if(video.paused){ // 만약 비디오가 멈춰 있다면
        video.play();
        btn.innerHTML = "Pause" // 비디오가 플레이 중 - 버튼에 중지 표시
    }else{ // 위 사항과 반대, 그렇지 않으면
        video.pause();
        btn.innerHTML = "Play"; // 비디오가 정지 중 - 버튼에 재생 표시
    }
}