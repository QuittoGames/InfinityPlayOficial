document.addEventListener("DOMContentLoaded", function () {
  const modal = document.querySelector(".modal");
  const modalContent = modal.querySelector(".modal-content");
  const verMaisButtons = document.querySelectorAll(".ver-mais-btn");
  
  verMaisButtons.forEach(button => {
    button.addEventListener("click", function () {
      const gameName = this.getAttribute("data-game");
  
      modalImage.src = `game${gameName}.jpg`;
      modalTitle.textContent = `Nome do Jogo ${gameName}`;
      modalDescription.textContent = `Descrição do Jogo ${gameName}. Lorem ipsum dolor sit amet, consectetur adipiscing elit.`;
      modalDownload.href = `download-game${gameName}.zip`; // Substitua pelo link de download real
  
      modal.style.display = "block";
      modalContent.classList.add("show-modal");
    });
  });
  
  modal.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      modalContent.classList.remove("show-modal");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const apiKey = "YOUR_API_KEY"; // Substitua pela sua chave de API do Fortnite Tracker
  const teamMembersContainer = document.getElementById("team-members");
  
  const players = [
    { name: "Player 1", epicNickname: "player1" },
    { name: "Player 2", epicNickname: "player2" },
    // Adicione mais jogadores
  ];
  
  players.forEach(player => {
    fetchPlayerInfo(player.epicNickname)
      .then(data => {
        const rank = data.stats.rank;
        const pr = data.stats.pr;
  
        const memberDiv = document.createElement("div");
        memberDiv.classList.add("team-member");
        memberDiv.innerHTML = `
          <h3>${player.name}</h3>
          <p>Rank: ${rank}</p>
          <p>Pontuação Ranqueada: ${pr}</p>
        `;
        teamMembersContainer.appendChild(memberDiv);
      })
      .catch(error => console.error("Erro ao obter informações do jogador:", error));
  });
  
  function fetchPlayerInfo(epicNickname) {
    const playerInfoEndpoint = `https://api.fortnitetracker.com/v1/profile/kbm/${epicNickname}`;
  
    return fetch(playerInfoEndpoint, {
      headers: {
        "TRN-Api-Key": apiKey
      }
    })
    .then(response => response.json());
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const verMaisButtons = document.querySelectorAll(".ver-mais-btn");
  const modal = document.querySelector(".modal");
  const modalContent = modal.querySelector(".modal-content");
  const closeModalButton = document.querySelector(".close-modal-btn");

  verMaisButtons.forEach(button => {
    button.addEventListener("click", function () {
      const gameName = this.getAttribute("data-game");
      // Substitua as informações abaixo pelas informações reais dos jogos
      const gameDetails = {
        name: "Nome do Jogo " + gameName,
        description: "Descrição do Jogo " + gameName + ". Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        // Adicione mais detalhes conforme necessário
      };

      modalContent.innerHTML = `
        <h2>${gameDetails.name}</h2>
        <p>${gameDetails.description}</p>
        <a href="#" class="download-btn">Baixar</a>
      `;

      modal.style.display = "flex";
    });
  });

  closeModalButton.addEventListener("click", function () {
    modal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const verMaisButtons = document.querySelectorAll(".ver-mais-btn");
  const gameDetails = document.querySelectorAll(".game-details");

  verMaisButtons.forEach(button => {
    button.addEventListener("click", function () {
      const gameName = this.getAttribute("data-game");
      const gameDetailDiv = document.getElementById(gameName + "-details");
      // Preencha os detalhes do projeto aqui
      gameDetailDiv.innerHTML = `
        <h3>Detalhes do Projeto ${gameName}</h3>
        <p>Informações detalhadas sobre o Projeto ${gameName}.</p>
        <button class="close-details-btn">Fechar</button>
      `;
      gameDetailDiv.style.display = "block";
    });
  });

  gameDetails.forEach(detail => {
    detail.addEventListener("click", function () {
      if (event.target.classList.contains("close-details-btn")) {
        detail.style.display = "none";
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.querySelector(".overlay");
  const eventDetails = overlay.querySelector(".event-details");
  const learnMoreButtons = document.querySelectorAll("[data-event]");

  learnMoreButtons.forEach(button => {
    button.addEventListener("click", function () {
      const eventName = this.getAttribute("data-event");
      const eventDetailDiv = document.getElementById(`${eventName}-details`);
      
      // Aqui você pode definir os detalhes do evento conforme necessário
      const eventDetailsContent = `
        <h3>Detalhes do Evento: ${eventName}</h3>
        <p>Informações detalhadas sobre o evento ${eventName}.</p>
        <button class="close-event-details">Fechar</button>
      `;
      
      eventDetailDiv.innerHTML = eventDetailsContent;
      overlay.classList.add("show");
    });
  });

  overlay.addEventListener("click", function (event) {
    if (event.target.classList.contains("overlay")) {
      overlay.classList.remove("show");
    }
  });
});
