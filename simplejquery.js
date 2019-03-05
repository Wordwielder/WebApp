// $(document).ready(function() {
//   $(".callout").css("border", "solid 1px #ff0080");
//   $(".code").css("background","#ccc");
//   $(".code").css("margin","1px 2px");
//   $(".code").css("padding","1px 4px");
//   $(".code").css("font-family","monospace");
//   // $(".highlight").css("background","#ff0");
//   // $(".highlight").css("font-style","italic");
//
//   $("div > a[target]").css("background", "#ccc")
//   $("div > a[href= 'http://www.daum.net']").css("background", "#ff0080")
//   $("div[id^='high']").css("background", "#ccc"); // ^= 이 내용으로 시작하는
//   $("div[class$='de']").css("font-style","italic");
//   $("div[id*='o']").css('font-style',"italic");
// });
//제이쿼리는 메소드를 정의할때 바로 쓸수있게 정의가능 괄호로 묶으면 호출없이 실행가능
//제이쿼리는 $로 실행한다. $ = jquery 로 대체 가능하나 $가 표준임.
//[attr] = 전체, [attr = '값'] = 일치, [attr != '값'] = 불일치 [attr ^= '값'] = '값'으로 시작하는
//[attr$= '값'] = 값으로 끝나는, [attr *= '값'] = 값을 포함하는. attr = 지정할 어트리뷰트
//[attr ~= '값'] = 공백을 포함해서


// $(document).ready(function() {
//   $("ul.url > li").css("border","1px solid #ff0000");// > : 부모자식관계인 요소에 적용하는 기호
//   $("ul.url2 li").css("border","1px solid blue");// 공백 : 조상/후손(모든) 관계
//   $("label + input").css("border", "1px solid #ff0000");
//   $("#info ~ input").css("background", "blue");
// });
//
// $(document).ready(function() {
//   // $("tr:eq(0) > td:eq(7)").css("background", " #EEE");
//   // $("tr:eq(1) > td:gt(2)").css("background", " #EEE");
//   // $("tr:eq(2) > td:odd").css("background", " #EEE");
//   // $("tr:eq(3) > td:first").css("background", " #AAA");
//   // $("tr:eq(3) > td:last").css("background", " #BBB");
//
//   //$("tr:even").css("background", " #AAA");
//
//   $("tr:not(.no)").css("background", " #AAA");
//   $("#txt:focus").css("background","blue");
// });

//
// $(document).ready(function() {
//   $("li").css("margin", "5px");
//   $(":checked,:selected").css("border","2px solid red");
//   $(":selected").css("background", "red");
// });


$(document).ready(function() {
  // $("td:first").css("background","red");
  // $("td:first-child").css("background","red");
  // $("td:last-child").css("background","yellow");

  //$("td:nth-child(2n+1)").css("background","red");
  $("td").filter(function(index){return index % 3 == 0}).css("background" ,"red");
});// 기본 필터, 폼에 적용하는 필터, 차일드에 적용하는 필터 3가지 유형이 있다
