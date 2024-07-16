// Pengisiian table static
// let users_data_el = document.getElementById("users_data");
// let data =  `<tr>
//             <td>1</td>
//             <td>Fulan</td>
//             <td>fulan</td>
//             <td>fulan@abc</td>
//             <td>555-5555-555</td>
//             <td>PT ABC</td>
//             <td>ABC</td>
//             </tr>`;
// users_data_el.innerHTML += data;

//pengisiian table menggunakan data sample dari placeholder free api

let users_data_el = document.getElementById("users_data");

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
// .then(data => data.map(item =>console.log(item.id + "."+ item.name)));

.then(datas => {
    for (let i = 0; i < datas.length; i++) { //looping menampilkan data dari api, & me-reformat phone sbg link, & button group
        let data=`
        <tr>
            <td>${datas[i].id}</td>
            <td>${datas[i].name}</td>
            <td>${datas[i].username}</td>
            <td>${datas[i].email}</td>
            <td><a href="tel:${datas[i].phone}">${datas[i].phone}</a></td>
            <td>
            ${datas[i].company.name}
            <br>
            <span class="text-body-secondary">${datas[i].company.catchPhrase}</span>
            </td>
            <td>
                <div class="btn-group" role="group" aria-label="Actions">
                  <button type="button" class="btn btn-primary">Show</button>
                  <button type="button" class="btn btn-warning">Edit</button>
                  <button type="button" class="btn btn-danger">Delete</button>
                </div>
            </td>
        </tr>
        `;
        users_data_el.innerHTML += data;
    }
})

