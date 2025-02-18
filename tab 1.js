function tab() {
    const num = parseInt(document.getElementById('numero').value);
    const tab = document.getElementById('tab');
    
    tab.innerHTML = '';
    
    for (let i = 1; i <= 10; i++) {
        tab.innerHTML += `<option value="tab${i}">${num} x ${i} = ${num * i}</option>`;
    }
}
