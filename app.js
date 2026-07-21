
const app = document.getElementById("app");

app.innerHTML = `
<div class="container">

<div class="sidebar">

<div class="logo">
🚚 <span>TBOS</span>
</div>

<ul>
<li class="active">🏠 Dashboard</li>
<li>🏢 Branches</li>
<li>👥 Representatives</li>
<li>📦 Workflow</li>
<li>📊 Reports</li>
<li>⚙ Settings</li>
</ul>

</div>

<div class="main">

<div class="topbar">

<div>
<h1>Trans Business Operations System</h1>
<p>Real-Time Logistics Dashboard</p>
</div>

<div class="profile">
👤 Super Admin
</div>

</div>

<div class="cards">

<div class="card">
<h2>24</h2>
<p>Representatives</p>
</div>

<div class="card">
<h2>12</h2>
<p>Branches</p>
</div>

<div class="card">
<h2>18</h2>
<p>On Dock</p>
</div>

<div class="card">
<h2>3</h2>
<p>Cashier</p>
</div>

</div>

<div class="workflow">

<div class="step done">Entry</div>
<div class="arrow">➜</div>

<div class="step active">Dock</div>
<div class="arrow">➜</div>

<div class="step">Inventory</div>
<div class="arrow">➜</div>

<div class="step">Loading</div>
<div class="arrow">➜</div>

<div class="step">Cashier</div>

</div>

<div class="table">

<table>

<thead>

<tr>

<th>ID</th>

<th>Name</th>

<th>Branch</th>

<th>Status</th>

<th>Time</th>

</tr>

</thead>

<tbody>

<tr>

<td>5001</td>

<td>Ahmed</td>

<td>Alex</td>

<td>Dock</td>

<td>15 min</td>

</tr>

<tr>

<td>5002</td>

<td>Mahmoud</td>

<td>Cairo</td>

<td>Inventory</td>

<td>27 min</td>

</tr>

<tr>

<td>5003</td>

<td>Ali</td>

<td>Tanta</td>

<td>Loading</td>

<td>8 min</td>

</tr>

</tbody>

</table>

</div>

</div>

</div>
`;
