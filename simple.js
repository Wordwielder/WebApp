function printDOM(node,prefix) {
  console.log(prefix + node.nodeName + '-' + node.nodeType);
  for(let i = 0; i < node.childNodes.length; ++i){
    printDOM(node.childNodes[i],prefix +'\t');
  }
}
//printDOM(document,'')


console.log(document.getElementById('content'));

const callouts = document.getElementsByClassName('callout');
console.log(callouts);

const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);

document.write("<p><b>document</b> object - write() method</p>"); //단순한 출력

const paral = document.getElementsByTagName( 'p')[0];
console.log(paral.textcontent);
console.log(paral.innerHTML);
//paral.textContent = "Modified HTML file"; // 텍스트만 가져옴. html스타일 적용안함
paral.innerHTML = "Modified <i>HTML</i> file "; // HTML 안쪽, 실제 태그의 내용을 적용하여 내용추가


const p1 = document.createElement('P');
const p2 = document.createElement('p');

// p1.textContent = ' I was created dynamicaly';
// p2.textContent = 'I was also created dynamicaly';

p1.innerHTML = "I was <b><i> created</b></i> dynamicaly!";
p2.textContent = "I was <b><i>also</b></i> created dynamicaly!";

const parent = document.getElementById('content');
const firstChild = parent.childNodes[0];
parent.insertBefore(p1,firstChild);
parent.appendChild(p2);

parent.insertBefore( p1, firstChild);
parent.appendChild( p2);
console.log(document.getElementById('content'));

function highlightParas(containing){
  if( typeof containing == 'string'){
    containing = new RegExp(`\\b${containing}\\b`, 'i') // 정규표현식
  }
  const paras = document.getElementsByTagName('p');
  console.log(paras);
  for (let p of paras) {
    if (!containing.test(p.textContent)){
      continue;
    }
    p.classList.add('highlight');
  }
}
// highlightParas('unique');

function removeParasHighlights( ){
  const paras = document.querySelectorAll('p.highlight');
  for (let p of paras) {
    p.classList.remove('highlight');
  }
}

const highlightActions = document.querySelectorAll( '[data-action="highlight"]');
console.log(highlightActions);
console.log(highlightActions[0].dataset);
highlightActions[0].dataset.containing = "giraffe";
highlightActions[0].dataset.caseSensitive = "true";

for (let a of highlightActions) {
  a.addEventListener( 'click' , evt => {
    evt.preventDefault();
    highlightParas('unique');  //a.dataset.containing
  });
}

const removeHighlightActions = document.querySelectorAll('[data-action="removeHighlights"]');
for (let a of removeHighlightActions) {
  a.addEventListener( 'click', evt=> {
    evt.preventDefault();
    removeParasHighlights();
  });
}
