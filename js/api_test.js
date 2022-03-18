window.onload = async () => {
    const mid = document.getElementById('middle');
    let dataList = document.getElementById('adminData');
    let b = await fetch('http://whofucking.farted.net/api/movies').then((response) => response.json());

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
    
    showList();
    async function showList() {
        dataList = document.getElementById('adminData');
        dataList.remove();
        b = await fetch('http://whofucking.farted.net/api/movies').then((response) => response.json());

        const dat = document.createElement('div');
        dat.classList.add('adminData');
        dat.id = 'adminData';
        mid.appendChild(dat);

        const movies = [];
        for (let i = 0; i < b.length; i++) {
            movies[i] = new Movie(b[i].id, b[i].name, b[i].description, b[i].ageRating, b[i].image, b[i].extraInfo);
        }

        for (let i = 0; i < movies.length; i++) {
            const e = movies[i];
            
            const entry = document.createElement('div');
            entry.classList.add('adminEntry');
    
            const name = document.createElement('div');
            name.classList.add('adminName');
            name.innerText = `${e.id} ${e.name} ${e.description}`;
            entry.appendChild(name);

            const image = document.createElement('img');
            image.width = '250';
            image.height = '300';
            image.src = e.image;
            entry.appendChild(image);
    
            dataList = document.getElementById('adminData');
            dataList.appendChild(entry);

        }
    }

    
};