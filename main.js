var request = require('request');
var options = {
  'method': 'POST',
  'url': 'https://cogo.co.kr/ajax/submitSolution',
  'headers': {
    'X-CSRF-TOKEN': '토큰 찾아서 넣으세요',
  formData: {
    'pid': '1',
    'pcode': '문제번호 찾아서 넣으세요',
    'cid': '',
    'vcid': '',
    'lid': '',
    'oj': 'noj',
    'coid': '언어번호',
    'solution': '문제코드'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});
