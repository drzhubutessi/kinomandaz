window.onload = async () => {
    const container = document.getElementById('adminData');
    const b = await fetch('http://whofucking.farted.net/api/movies').then((response) => response.json());

    let movies = [];

    for (let i = 0; i < b.length; i++) {
        const e = b[i];
        movies += e;
    }

    for (let i = 0; i < movies.length; i++) {
        const name = document.createElement('p');
        name.innerText = movies.name;
        container.appendChild(name);
    }
};