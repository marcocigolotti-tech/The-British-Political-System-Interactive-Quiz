const bank = [
{topic:"Government",q:"What type of political system does the United Kingdom have?",a:["A presidential republic","A parliamentary democracy under a constitutional monarchy","A military government","An absolute monarchy"],c:1,e:"The UK is a parliamentary democracy and a constitutional monarchy."},
{topic:"The Monarch",q:"Who is the Head of State of the United Kingdom today?",a:["The Prime Minister","The Speaker","King Charles III","The Archbishop of Canterbury"],c:2,e:"King Charles III is the current monarch and Head of State."},
{topic:"The Monarch",q:"Who is the Head of Government in the UK?",a:["The monarch","The Prime Minister","The Speaker of the House of Lords","The King’s private secretary"],c:1,e:"The Prime Minister leads the Government."},
{topic:"The Monarch",q:"In a constitutional monarchy, what is the monarch’s political role?",a:["The monarch makes all political decisions","The monarch is politically impartial and has constitutional duties","The monarch leads the opposition","The monarch writes every bill"],c:1,e:"The monarch is Head of State but remains politically neutral."},
{topic:"Parliament",q:"Where does the UK Parliament meet?",a:["Buckingham Palace","10 Downing Street","The Houses of Parliament at Westminster","Windsor Castle"],c:2,e:"The Houses of Parliament are at Westminster in London."},
{topic:"Parliament",q:"What are the two Houses of the UK Parliament?",a:["The House of Commons and the House of Lords","The Cabinet and the Commons","The Senate and the House of Lords","The House of Ministers and the Courts"],c:0,e:"The UK Parliament has two chambers: the House of Commons and the House of Lords."},
{topic:"House of Commons",q:"How are Members of Parliament (MPs) in the House of Commons chosen?",a:["They are elected by voters","They are appointed by the King","They inherit their seats","They are chosen by judges"],c:0,e:"Members of the House of Commons are elected."},
{topic:"House of Commons",q:"Which House has 650 elected MPs, according to the textbook?",a:["The House of Lords","The House of Commons","The Cabinet","The Supreme Court"],c:1,e:"The textbook gives 650 as the number of MPs in the House of Commons."},
{topic:"House of Lords",q:"How do members of the House of Lords mainly differ from MPs in the Commons?",a:["Lords are elected in general elections","Lords are appointed, not elected","Lords are all members of the Cabinet","Lords represent local councils"],c:1,e:"Members of the House of Lords are appointed; they are not elected as MPs are."},
{topic:"House of Lords",q:"What can the House of Lords do to a bill?",a:["Scrutinise it and suggest amendments","Choose the next monarch","Call a general election by itself","Appoint all the MPs"],c:0,e:"The Lords examines bills and may suggest changes."},
{topic:"The Government",q:"What is the Cabinet?",a:["A group of the Prime Minister’s most senior ministers","Another name for the House of Lords","The building where Parliament meets","A group of elected judges"],c:0,e:"The Cabinet is the group of senior ministers who work with the Prime Minister."},
{topic:"The Government",q:"What is the main job of the Government?",a:["To make political decisions and run the country","To elect the monarch","To write the Magna Carta again","To appoint every voter"],c:0,e:"The Government makes political decisions and runs the country."},
{topic:"Bills and laws",q:"What is a bill?",a:["A proposal for a new law","A member of Parliament","A court judgment","A royal residence"],c:0,e:"A bill is a proposed law."},
{topic:"Bills and laws",q:"What happens after MPs propose a bill?",a:["It can be examined by the House of Lords","It immediately becomes the Constitution","It is sent to the United Nations","The monarch must rewrite it"],c:0,e:"The House of Lords scrutinises bills and may suggest improvements."},
{topic:"Bills and laws",q:"When does a bill become an Act of Parliament?",a:["When it is first discussed","After it passes through Parliament and receives Royal Assent","When the Prime Minister announces it","When the House of Lords suggests a change"],c:1,e:"After parliamentary approval, Royal Assent turns a bill into an Act."},
{topic:"Bills and laws",q:"Who gives Royal Assent to a bill in the UK today?",a:["The Speaker","The Prime Minister","King Charles III","The leader of the opposition"],c:2,e:"Royal Assent is given by the monarch; today that is King Charles III."},
{topic:"Magna Carta",q:"In which year was Magna Carta agreed?",a:["1066","1215","1492","1776"],c:1,e:"Magna Carta dates from 1215."},
{topic:"Magna Carta",q:"What important principle is associated with Magna Carta?",a:["The king is above every law","Everyone, including the king, must obey the law","Only rich people have rights","Parliament must obey the monarch"],c:1,e:"Magna Carta established the principle that even the king must obey the law."},
{topic:"Magna Carta",q:"According to the textbook, how many rules does Magna Carta contain?",a:["13","36","63","650"],c:2,e:"The textbook says Magna Carta contains 63 rules or clauses."},
{topic:"Magna Carta",q:"Which subjects are among the ideas protected by Magna Carta?",a:["Justice, privileges and rights","Only trade and farming","The royal family’s private life","Modern political parties"],c:0,e:"The text links Magna Carta with justice, privileges and rights."},
{topic:"Magna Carta",q:"The ideas in Magna Carta helped inspire which later document?",a:["The Universal Declaration of Human Rights","The Treaty of Versailles","The English Bill of Fare","The Napoleonic Code only"],c:0,e:"The textbook connects Magna Carta’s ideas to the Universal Declaration of Human Rights."},
{topic:"Magna Carta",q:"What does a constitution describe?",a:["Rules and principles that govern a country","A list of all MPs","The monarch’s family tree","The location of Parliament"],c:0,e:"A constitution sets out rules and principles for governing a country."},
{topic:"The Monarch",q:"Who appoints the Prime Minister in the UK?",a:["The monarch, following constitutional conventions","The House of Lords alone","The Supreme Court","The Speaker"],c:0,e:"The monarch formally appoints the person able to command the confidence of the House of Commons."},
{topic:"Parliament",q:"Which statement about the House of Commons is correct?",a:["Its members are elected and debate proposed laws","Its members are appointed experts only","It is the monarch’s private council","It meets at 10 Downing Street"],c:0,e:"The Commons is the elected chamber and debates legislation."},
{topic:"Parliament",q:"What is 10 Downing Street best known as?",a:["The London residence of the Prime Minister","The House of Lords","The home of the monarch","The name of Magna Carta"],c:0,e:"10 Downing Street is the official London residence of the Prime Minister."},
{topic:"Parliament",q:"Where is Westminster?",a:["In London","In Edinburgh","In Cardiff","In Belfast"],c:0,e:"Westminster is an area of London where the Houses of Parliament are located."},
{topic:"The Government",q:"Which person is usually a member of both the Government and the House of Commons?",a:["The Prime Minister","The monarch","The Speaker of the Lords","The Lord Chancellor only"],c:0,e:"The Prime Minister is normally an MP and leads the Government."},
{topic:"Bills and laws",q:"What does it mean to scrutinise a bill?",a:["To examine it carefully","To elect its author","To cancel Parliament","To turn it into a speech"],c:0,e:"To scrutinise a bill means to examine it carefully."},
{topic:"The Monarch",q:"Which statement about King Charles III is correct?",a:["He is Head of Government and makes all laws","He is Head of State and remains politically impartial","He is elected by MPs every year","He is a member of the Cabinet"],c:1,e:"The monarch is Head of State and politically impartial; the elected Parliament makes and passes legislation."},
{topic:"Magna Carta",q:"Magna Carta was agreed during the reign of which king?",a:["King John","King Henry VIII","King Charles I","King George III"],c:0,e:"Magna Carta was agreed in 1215 under King John."}
];

const total=20;
let questions=[],index=0,score=0,misses=[],activeAudioButton=null;
const intro=document.getElementById("intro"),quiz=document.getElementById("quiz"),result=document.getElementById("result"),nextBtn=document.getElementById("nextBtn");
const photo={
  king:{src:"images/king_charles_iii.jpg",alt:"King Charles III",caption:"King Charles III",credit:"Photo: White House · Public domain (U.S. federal work)",url:"https://commons.wikimedia.org/wiki/File:King_Charles_III_(July_2023).jpg"},
  palace:{src:"images/palace_westminster.jpg",alt:"The Palace of Westminster beside the River Thames",caption:"The Palace of Westminster, home of the UK Parliament",credit:"Photo: LittleRoamingChief · Wikimedia Commons · CC BY 2.0",url:"https://commons.wikimedia.org/wiki/File:2024--15_September--Exterior_Palace_of_Westminster.jpg"},
  commons:{src:"images/commons_chamber.jpg",alt:"The green benches inside the House of Commons chamber",caption:"The House of Commons",credit:"Image: UK Parliament · Wikimedia Commons · CC BY 3.0",url:"https://commons.wikimedia.org/wiki/File:House_of_Commons_Chamber.png"},
  lords:{src:"images/lords_chamber.jpg",alt:"The red benches inside the House of Lords chamber",caption:"The House of Lords",credit:"Image: UK Parliament · Wikimedia Commons · CC BY 3.0",url:"https://commons.wikimedia.org/wiki/File:House_of_Lords_Chamber.png"},
  downing:{src:"images/downing_street.jpg",alt:"10 Downing Street, the Prime Minister’s London residence",caption:"10 Downing Street",credit:"Photo: robertsharp · Wikimedia Commons · CC BY 2.0",url:"https://commons.wikimedia.org/wiki/File:10_Downing_Street_2010.jpg"},
  magna:{src:"images/magna_carta_document.jpg",alt:"The parchment manuscript of Magna Carta, 1215",caption:"Magna Carta, 1215 · British Library Cotton MS Augustus II.106",credit:"Manuscript image: British Library via Wikimedia Commons · Public domain",url:"https://commons.wikimedia.org/wiki/File:Magna_Carta_(British_Library_Cotton_MS_Augustus_II.106).jpg"},
  kingJohn:{src:"images/king_john_magna_carta.jpg",alt:"Historical painting showing King John assenting to Magna Carta",caption:"King John assenting to Magna Carta, 1215 · painting by Charles Sims",credit:"Parliamentary Art Collection via Wikimedia Commons · Public domain",url:"https://commons.wikimedia.org/wiki/File:Charles_Sims_(1873-1928)_-_King_John_Assents_to_the_Magna_Carta,_1215_-_WOA_2602_-_Parliamentary_Art_Collection.jpg"}
};
function shuffled(arr){return [...arr].sort(()=>Math.random()-.5)}
function resetAudioButton(button){if(!button)return;button.classList.remove("is-speaking");button.setAttribute("aria-pressed","false");const icon=button.querySelector(".speaker-icon");if(icon)icon.textContent="🔊";const label=button.querySelector(".listen-label");if(label)label.textContent="LISTEN";if(button.id==="questionAudio")button.setAttribute("aria-label","Listen to the question");else button.setAttribute("aria-label","Listen to this answer")}
function stopAudio(){if("speechSynthesis" in window)window.speechSynthesis.cancel();resetAudioButton(activeAudioButton);activeAudioButton=null}
function speakText(text,button){
  if(!("speechSynthesis" in window)||!("SpeechSynthesisUtterance" in window)){document.getElementById("feedback").textContent="Audio reading is not available in this browser.";document.getElementById("feedback").classList.remove("hidden");return}
  if(activeAudioButton===button&&window.speechSynthesis.speaking){stopAudio();return}
  stopAudio();
  const utterance=new SpeechSynthesisUtterance(text);utterance.lang="en-GB";utterance.rate=.82;utterance.pitch=1;
  const voices=window.speechSynthesis.getVoices();
  const british=voices.find(v=>v.lang.toLowerCase()==="en-gb")||voices.find(v=>v.lang.toLowerCase().startsWith("en-gb"));
  if(british)utterance.voice=british;
  activeAudioButton=button;button.classList.add("is-speaking");button.setAttribute("aria-pressed","true");
  const icon=button.querySelector(".speaker-icon");if(icon)icon.textContent="⏹";const label=button.querySelector(".listen-label");if(label)label.textContent="STOP";
  button.setAttribute("aria-label","Stop audio");
  const done=()=>{if(activeAudioButton===button){resetAudioButton(button);activeAudioButton=null}};
  utterance.onend=done;utterance.onerror=done;window.speechSynthesis.speak(utterance)
}
function visualFor(item){
  const t=item.topic,q=item.q.toLowerCase();
  if(t==="The Monarch")return photo.king;
  if(t==="House of Lords")return photo.lords;
  if(t==="House of Commons")return photo.commons;
  if(t==="Parliament")return photo.palace;
  if(t==="The Government")return photo.downing;
  if(t==="Bills and laws")return photo.commons;
  if(t==="Magna Carta")return q.includes("which king")||q.includes("during the reign")?photo.kingJohn:photo.magna;
  return photo.palace
}
function setVisual(item){
  const m=visualFor(item),figure=document.getElementById("questionVisual"),img=document.getElementById("questionImage"),caption=document.getElementById("imageCaption"),credit=document.getElementById("imageCredit");
  img.src=m.src;img.alt=m.alt;caption.textContent=m.caption;credit.textContent=m.credit+" · ";
  const link=document.createElement("a");link.href=m.url;link.target="_blank";link.rel="noopener noreferrer";link.textContent="image source";credit.appendChild(link);
  figure.classList.remove("hidden")
}
function begin(){stopAudio();questions=shuffled(bank).slice(0,total);index=0;score=0;misses=[];intro.classList.add("hidden");result.classList.add("hidden");quiz.classList.remove("hidden");render()}
function render(){
  stopAudio();const item=questions[index];
  document.getElementById("questionNum").textContent=String(index+1).padStart(2,"0");
  document.getElementById("topicLabel").textContent=item.topic;
  document.getElementById("questionText").textContent=item.q;
  document.getElementById("score").textContent=score;
  document.getElementById("answeredCount").textContent=index+" answered";
  document.getElementById("progressBar").style.width=(index/total*100)+"%";
  setVisual(item);
  const qAudio=document.getElementById("questionAudio");resetAudioButton(qAudio);qAudio.onclick=()=>speakText(item.q,qAudio);
  const box=document.getElementById("answers");box.innerHTML="";
  document.getElementById("feedback").classList.add("hidden");nextBtn.disabled=true;
  shuffled(item.a.map((text,originalIndex)=>({text,originalIndex}))).forEach((answer,i)=>{
    const row=document.createElement("div");row.className="answer-row";
    const button=document.createElement("button");button.type="button";button.className="answer-btn";
    button.innerHTML='<span class="answer-letter">'+String.fromCharCode(65+i)+'</span><span class="answer-copy"></span>';
    button.querySelector(".answer-copy").textContent=answer.text;
    button.addEventListener("click",()=>choose(button,answer.originalIndex,item));
    const audio=document.createElement("button");audio.type="button";audio.className="listen-btn answer-listen";audio.setAttribute("aria-label","Listen to this answer");audio.setAttribute("aria-pressed","false");audio.innerHTML='<span class="speaker-icon" aria-hidden="true">🔊</span><span class="listen-label">LISTEN</span>';
    audio.addEventListener("click",event=>{event.stopPropagation();speakText(answer.text,audio)});
    row.append(button,audio);box.appendChild(row)
  });
  nextBtn.textContent=index===total-1?"SEE YOUR RESULT →":"NEXT →"
}
function choose(button,chosen,item){
  const buttons=[...document.querySelectorAll(".answer-btn")];buttons.forEach(b=>b.disabled=true);
  const correct=chosen===item.c;
  if(correct){score++;button.classList.add("correct")}
  else{button.classList.add("incorrect");const cb=buttons.find(b=>b.querySelector(".answer-copy").textContent===item.a[item.c]);if(cb)cb.classList.add("correct");misses.push({q:item.q,correct:item.a[item.c]})}
  document.getElementById("score").textContent=score;document.getElementById("answeredCount").textContent=(index+1)+" answered";
  const feedback=document.getElementById("feedback");feedback.innerHTML="<strong>"+(correct?"Correct!":"Not quite.")+"</strong> "+item.e;feedback.classList.remove("hidden");nextBtn.disabled=false
}
function finish(){
  stopAudio();quiz.classList.add("hidden");result.classList.remove("hidden");document.getElementById("finalScore").textContent=score;
  const p=score/total,title=p>=.85?"Excellent work!":p>=.65?"Good job!":p>=.45?"Keep practising!":"Let’s review the unit!";
  document.getElementById("resultTitle").textContent=title;
  document.getElementById("resultMessage").textContent=p>=.85?"You have a strong understanding of the British political system.":p>=.65?"You know the main ideas. Review the questions you missed to improve further.":"Read the unit again and try the quiz once more. You can do it!";
  document.getElementById("resultIcon").textContent=p>=.65?"★":"↻";const review=document.getElementById("review");review.innerHTML="";
  misses.forEach(m=>{const d=document.createElement("div");d.className="review-item";const b=document.createElement("b"),span=document.createElement("span");b.textContent=m.q;span.textContent="Correct answer: "+m.correct;d.append(b,span);review.appendChild(d)})
}
document.getElementById("startBtn").addEventListener("click",begin);
nextBtn.addEventListener("click",()=>{if(index<total-1){index++;render()}else finish()});
document.getElementById("restartBtn").addEventListener("click",()=>{result.classList.add("hidden");intro.classList.remove("hidden");stopAudio()});
