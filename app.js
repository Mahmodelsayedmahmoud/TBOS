const app = document.getElementById("app");

app.innerHTML = `
<div class="tbos">

<header class="header">
<h1>🚛 TBOS PRO</h1>
<p>Trans Business Operations System</p>
</header>

<nav class="menu">
<button onclick="showPage('dashboard')">الرئيسية</button>
<button onclick="showPage('storekeeper')">أمين المخزن</button>
<button onclick="showPage('manager')">مدير المخازن</button>
<button onclick="showPage('reports')">التقارير</button>
<button onclick="showPage('settings')">الإعدادات</button>
</nav>

<div id="content"></div>

</div>
`;

const reps=[
{id:"5001",name:"أحمد محمد",branch:"الإسكندرية",stage:"الرصيف",cartons:120,time:"05:35"},
{id:"5002",name:"محمود علي",branch:"القاهرة",stage:"الجرد",cartons:85,time:"88:00"},
{id:"5003",name:"خالد إبراهيم",branch:"طنطا",stage:"التحميل",cartons:60,time:"15:10"},
{id:"5004",name:"حسن مصطفى",branch:"أسيوط",stage:"الكاشير",cartons:70,time:"20:00"}
];

function showPage(page){

let html="";

if(page==="dashboard"){

html=`
<h2>الرئيسية</h2>

<div class="card">
<h3>إجمالي المناديب ${reps.length}</h3>
</div>

`;

}

if(page==="storekeeper"){

html=`
<h2>أمين المخزن</h2>

<input id="search"
placeholder="ابحث بالكود أو الاسم أو الفرع"
onkeyup="searchRep()">

<div id="repList"></div>
`;

}

if(page==="manager"){

html=`
<h2>مدير المخازن</h2>

<button onclick="filterBranch('الإسكندرية')">الإسكندرية</button>
<button onclick="filterBranch('القاهرة')">القاهرة</button>
<button onclick="filterBranch('طنطا')">طنطا</button>
<button onclick="filterBranch('أسيوط')">أسيوط</button>

<div id="branchList"></div>

`;

}

if(page==="reports"){

html="<h2>التقارير</h2>";

}

if(page==="settings"){

html="<h2>الإعدادات</h2>";

}

document.getElementById("content").innerHTML=html;

if(page==="storekeeper")render(reps);

if(page==="manager")filterBranch("الإسكندرية");

}

function render(list){

let html="";

list.forEach(r=>{

html+=`
<div class="card">
<h3>${r.name}</h3>
<p>${r.branch}</p>
<p>${r.stage}</p>
<p>${r.cartons} كرتونة</p>
<p>${r.time}</p>
</div>
`;

});

document.getElementById("repList").innerHTML=html;

}

function searchRep(){

const q=document.getElementById("search").value;

render(reps.filter(r=>

r.name.includes(q)||

r.id.includes(q)||

r.branch.includes(q)

));

}

function filterBranch(branch){

let html="";

reps.filter(r=>r.branch===branch).forEach(r=>{

html+=`
<div class="card">
<h3>${r.name}</h3>
<p>${r.id}</p>
<p>${r.stage}</p>
</div>
`;

});

document.getElementById("branchList").innerHTML=html;

}

showPage("dashboard");
