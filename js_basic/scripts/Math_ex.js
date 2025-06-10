//생년월일 입력 후 '계산' 버튼 클릭 시 생일부터 지금까지 몇일이 지났는지, 몇시간이 지났는지 보여주는 프로그램(양력 기준)
//지금까지 흐른 날짜 계산법 : 1000*60*60*24로 나누기
//지금까지 흐른 시간 계산법 : 1000*60*60로 나누기
const wishDate = document.querySelector('#wishdate');
const wishBtn = document.querySelector('#wish_btn');
const resultDate = document.querySelector('.date');
const resultTime = document.querySelector('.time');
console.log(wishDate, wishBtn, resultDate, resultTime)

wishBtn.addEventListener('click',wishFunc)
function wishFunc(){
    //오늘 날짜와 생년월일을 같은 포맷으로 출력테스트
    //console.log(new Date(wishDate.value));
    //console.log(new Date());
    const wish = new Date(wishDate.value);
    const today = new Date();
    console.log(wish, today);
    //나이계산식
    //today.getFullYear() - wish.getFullYear()
    //오늘날짜에서 생년월일 빼기
    //new Date 복잡한 특수문자 및 문자를 포함하기 때문에 숫자만 반환해서 계산하도록 getTime()함수 활용
    const wishToday = today.getTime() - wish.getTime();
    console.log(wishToday);
    //흐른날짜, 흐른시간 계산
    const dateFlow = Math.floor(wishToday / (1000*60*60*24));
    const timeFlow = Math.floor(wishToday / (1000*60*60));
    //결과 출력
    resultDate.textContent = dateFlow;
    resultTime.textContent = timeFlow;
}