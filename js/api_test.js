window.onload = async () => {
    const mid = document.getElementById('middle');
    const dataList = document.getElementById('adminData');
    const b = await fetch('http://whofucking.farted.net/api/movies').then((response) => response.json());

    let movies = [];

    for (let i = 0; i < b.length; i++) {
        const e = b[i];
        console.log(e);
        movies += e;
    }

    for (let i = 0; i < movies.length; i++) {
        dataList.remove();
        const dat = document.createElement('div');
        dat.classList.add('adminData');
        dat.id = 'adminData';
        mid.appendChild(dat);

        const name = document.createElement('p');
        name.innerText = movies.name;
        dataList.appendChild(name);
    }
};