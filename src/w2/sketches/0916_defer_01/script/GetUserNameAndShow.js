let UserName = prompt('당신의 이름은 무엇입니까?', '홍길동');
let UserNameCoerrct = confirm('당신의 이름이' + UserName + '이 맞습니까?');
if (UserName == true) {
  document.getElementById('user-name-goes-here').textContent =
    '환영합니다. ' + UserName + '님';
}
