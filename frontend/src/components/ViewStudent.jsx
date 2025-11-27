export default function ViewStudent() {
return (
<div>
<h2>Student Profile</h2>
<p>Name: -</p>
<p>Email: -</p>
<p>Age: -</p>
<p>Department: -</p>
<p>Year: -</p>
<h3>Subjects</h3>
<ul>
<li>Example - 85</li>
</ul>
<h3>Attendance</h3>
<input type="month" />
<button>Filter</button>
<table>
<thead>
<tr>
<th>Date</th>
<th>Status</th>
</tr>
</thead>
<tbody>
<tr>
<td>2024-11-01</td>
<td>PRESENT</td>
</tr>
</tbody>
</table>
<button>Delete Student</button>
</div>
);
}