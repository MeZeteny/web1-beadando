document.addEventListener("DOMContentLoaded", () => {
    const kivalasztottDiv = document.querySelector(".kivalasztottetel");
    const sorok = document.querySelectorAll("tbody tr");

    sorok.forEach(sor => {
      sor.addEventListener("click", () => {
        const etelNev = sor.querySelector("th").textContent.trim();
        const encodedEtelNev = encodeURIComponent(etelNev);
        
        // Unsplash képek
        const baseImgUrl = `https://source.unsplash.com/400x300/?`;
        const imageUrls = [
          `${baseImgUrl}${encodedEtelNev}&sig=1`,
          `${baseImgUrl}${encodedEtelNev}+étel&sig=2`,
          `${baseImgUrl}${encodedEtelNev}+food&sig=3`
        ];

        // Nosalty keresési link
        const nosaltyLink = `https://www.nosalty.hu/kereses/recept/${encodedEtelNev}`;
        const streetkitchenLink = `https://streetkitchen.hu/kereses/${encodedEtelNev}`;
        const mindmegetteLink = `www.mindmegette.hu/kereses/spagetti${encodedEtelNev}`;

        // HTML összeállítása
        kivalasztottDiv.innerHTML = `
          <h3>${etelNev}</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            ${imageUrls.map(url => `<img src="${url}" alt="${etelNev}" style="width: 30%; border-radius: 8px;" />`).join("")}
          </div>
          <p style="margin-top: 10px;">
            Recept keresése: 
            <ul>
            <li>Nosalty
            <a href="${nosaltyLink}" target="_blank" rel="noopener noreferrer">
              ${nosaltyLink}
            </a>
            </li>
            <li>Streetkitchen
             <a href="${streetkitchenLink}" target="_blank" rel="noopener noreferrer">
              ${streetkitchenLink}
            </a>
            </li>
            <li>Mindmegette
             <a href="${mindmegetteLink}" target="_blank" rel="noopener noreferrer">
              ${mindmegetteLink}
            </a>
            </li>
            </ul>
          </p>
        `;
      });
    });
  });

