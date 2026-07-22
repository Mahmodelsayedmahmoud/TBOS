const app = document.getElementById("app");

app.innerHTML = `
<div class="container">

<div class="sidebar">
<h2>🚚 TBOS</h2>

<ul>
<li class="active">🏠 Dashboard</li>
<li>👷 أمين المخزن</li>
<li>🚚 المندوبون</li>
<li>🏢 الفروع</li>
<li>📊 التقارير</li>
<li>⚙️ الإعدادات</li>
</ul>
</div>

<div class="main">

<header class="topbar">
<h1>Trans Business Operations System</h1>
<p>لوحة التحكم المباشرة</p>
</header>

<div class="search-box">
<input type="text" placeholder="🔍 ابحث بكود المندوب أو الاسم">
<button>بحث</button>
</div>

<div class="status">
<h2>حالة الكاش</h2>
<p>🟢 يوجد مكان واحد متاح</p>
<p>🚚 عدد المنتظرين: 8</p>
<p>⏱️ متوسط الانتظار: 11 دقيقة</p>
</div>

<div class="cards">

<div class="card">
<h2>52</h2>
<p>إجمالي المندوبين</p>
</div>

<div class="card">
<h2>8</h2>
<p>على الرصيف</p>
</div>

<div class="card">
<h2>5</h2>
<p>في الجرد</p>
</div>

<div class="card">
<h2>6</h2>
<p>في التحميل</p>
</div>

<div class="card">
<h2>3 / 4</h2>
<p>الكاش</p>
</div>

<div class="card danger">
<h2>11 دقيقة</h2>
<p>متوسط الانتظار</p>
</div>

</div>

<h2 style="margin-top:30px;">المندوبون الآن</h2>

<table>

<thead>

<tr>
<th>كود</th>
<th>الاسم</th>
<th>الفرع</th>
<th>الحالة</th>
<th>وقت الانتظار</th>
<th>القرار</th>
</tr>

</thead>

<tbody>

<tr>
<td>M001</td>
<td>أحمد</td>
<td>الإسكندرية</td>
<td>الرصيف</td>
<td>12 دقيقة</td>
<td>انتظار حتى يفضى الكاش</td>
</tr>

<tr>
<td>M002</td>
<td>محمود</td>
<td>القاهرة</td>
<td>الجرد</td>
<td>5 دقائق</td>
<td>جارٍ العمل</td>
</tr>

<tr>
<td>M003</td>
<td>علي</td>
<td>طنطا</td>
<td>الكاش</td>
<td>4 دقائق</td>
<td>داخل الكاش</td>
</tr>

</tbody>

</table>

</div>

</div>
`;
