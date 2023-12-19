/*The purpose of the project is to find the keyboard key stroked in a table */
/*We get these options in the 'e' object that comes along with addEventListener*/

const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
        <div class="color">
        <table>
        <tr>
          <th>Key</th>
          <th>Code</th>
        </tr>
        <tr>
          <td>${e.key === " "? "Space": e.key}</td>
          <td>${e.code}</td>
        </tr>
      </table>
        </div>
    
    `
})

