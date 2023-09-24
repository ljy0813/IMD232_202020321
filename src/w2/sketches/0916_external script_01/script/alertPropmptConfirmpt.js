alert('이곳은 주영이의 졸업전시회 사이트입니다!');
prompt('방명록을 적어주세요!', '방명록');
let visitor;
visitor = prompt('당신의 이름은?', '기억할게요,알려주세요!');
let confirmVal = confirm('당신의 성함은 ' + visitor + '님이 맞으십니까?');
if (confirmVal == true) {
  alert('환영합니다.' + visitor + '님');
}
