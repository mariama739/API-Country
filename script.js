document.addEventListener("DOMContentLoaded", function () {
  const countryList = document.getElementById("country-list");

  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((country) => {
        const col = document.createElement("div");
        col.classList.add("col-md-4", "mb-4");
        col.innerHTML = `
                    <div class="card">
                        <img src="${country.flags.png}" class="card-img-top country-flag" alt="Drapeau de ${country.name.common}">
                        <div class="card-body">
                            <h5 class="card-title">${country.name.common}</h5>
                            <p class="card-text">Région: ${country.region}</p>
                        </div>
                    </div>
                `;
        countryList.appendChild(col);
      });
    })
    .catch((error) =>
      console.error("Erreur lors de la récupération des pays:", error)
    );
});
