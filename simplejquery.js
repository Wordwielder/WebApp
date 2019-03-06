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
  //$("td").filter(function(index){return index % 3 == 0}).css("background" ,"red");
});// 기본 필터, 폼에 적용하는 필터, 차일드에 적용하는 필터 3가지 유형이 있다

//
// $(document).ready(function() {
//   $("td").not(function (index) {
//     return index % 3 == 0; //일치하지 않는 것 선별
//
//
//   }).css("background", "red"); // Traverse : 셀렉터에 의해 선별한 내용을 다시 한 번 선별//
// });
// //제이쿼리 문법은 셀렉터.메소드가 기본이다
//
// $(document).ready(function(){
//   $("li").has("ul").css("background","red"); //해당하는 결과에 대해 그 내용이 포함되어 있는지 확인함
// });

$(document).ready(function(){
  // $("*").each(function() {
  //   if ($(this).is("li")){
  //     $(this).css("border","1px solid red");
  //   }
  // });

//   var litext = $("li").map(function(index)){
//     return"[(" = index + ")" + $(this).text() +"]";
//   }).get().join(',');
//   $("#result").text(litext);
 });
//
// function colorEm() {
//   var $div = $("div");
//   var start = Math.floor(Math.random() * $div.length);
//   var end = Math.floor(Math.random() * ($div.length - start)) + start + 1;
//
//   if (end === $div.length) {end = undefined;}
//   $div.css("background", "");
//   if (end) {
//     $div.slice(start,end).css("background", "yellow");
//   } else {
//     $div.slice(start).css("background", "yellow")
//   }
//   $("span").text("$(div).slice(" + start +
//     (end ? ", " + end : "") + ").css('background,'yellow);");
// }
// $("button").click( colorEm );

$(document).ready(function(){
//  $("li").add("div > p").css("border", "1px solid red");
  //$("ul").find("li").contents().remove("ul") //콘텐츠라는것은 해당 결과를 배열 형태로 리턴해줌
  //end 이전 상태로 돌아감

  //$("div").filter("P").css("border", "1px solid red");
   // $("div").find("p").css("border", "1px solid red");
   // $("div").filter(".my").css("border", "1px solid red");
   // $("li").each(function(){
   //   $(this).click(function(){
   //     $(this).addClass("selected");
   //     $(this).siblings().removeClass("selected");
   //   });
   // });
   //$("td").css("background","blue")
   $("td").css("background","blue")
 });
