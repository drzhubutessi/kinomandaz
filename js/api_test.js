window.onload = async () => {
    const mid = document.getElementById('middle');
    const dataList = document.getElementById('adminData');
    const b = await fetch('http://whofucking.farted.net/api/movies').then((response) => response.json());

    class Movie {
        constructor(id, name, description, ageRating, image, extraInfo) {
            this.id = id;
            this.name = name;
            this.description = description;
            this.ageRating = ageRating;
            this.image = image;
            this.extraInfo = extraInfo;
        }
    }

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

        const name = document.createElement('p');
        name.innerText = movies.name;
        dat.appendChild(name);
        mid.appendChild(dat);

    }
};