// ===> Création du variable pour ne pas avoir besoin de répéter "document" à chaque fois
const $ = document;

// ==> INDISPENSABLE == écoute si le contenue de la page  est bien chargée
// Tout doit être dans la fonction de cet écouteur
$.addEventListener("DOMContentLoaded", () => {
  console.log("content loaded");

  let updateButton = document.getElementById("updateDetails");
  let favDialog = document.getElementById("favDialog");
  // let outputBox = document.querySelector("output");
  // let selectEl = document.querySelector("select");
  // let confirmBtn = document.getElementById("confirmBtn");

  // Le bouton "Mettre à jour les détails" ouvre le <dialogue> ; modulaire
  updateButton.addEventListener("click", function onOpen() {
    if (typeof favDialog.showModal === "function") {
      favDialog.showModal();
    } else {
      console.error(
        "L'API <dialog> n'est pas prise en charge par ce navigateur."
      );
    }
  });
  // L'entrée "Animal favori" définit la valeur du bouton d'envoi.
  // selectEl.addEventListener("change", function onSelect(e) {
  //   confirmBtn.value = selectEl.value;
  // });
  // Le bouton "Confirmer" du formulaire déclenche la fermeture
  // de la boîte de dialogue en raison de [method="dialog"]
  $.querySelector(".close").addEventListener("click", () => {
    favDialog.close();
  });
  // ===> Ecoute un clic n'importe où sur la page
  //   document.addEventListener("click", () => {
  //     console.log("clicked");
  //   });

  //   ===> Au clic sur le bouton Hide, le texte disparait
  // $.querySelector("#hide").addEventListener("click", () => {
  //   console.log("hide");

  //   $.querySelector("p").classList.add("hidden");
  // });

  //   ===> Au clic sur le bouton Display, le texte apparait
  // $.querySelector("#display").addEventListener("click", () => {
  //   console.log("display");

  //   $.querySelector("p").classList.remove("hidden");
  // });

  //  ===> Au clic sur le bouton Hide/Display, le texte disparait/apparait
  // $.querySelector("#hide-display").addEventListener("click", () => {
  //   console.log("hide display");

  //   $.querySelector("p").classList.toggle("hidden");

  //   const button = $.querySelector("#hide-display");

  //   // console.log(button.textContent);

  //   if (button.textContent === "Hide") {
  //     button.textContent = "Display";
  //   } else {
  //     button.textContent = "Hide";
  //   }
  // });

  //   ===> Déclenchement de la requête à la soumission du formulaire
  document.querySelector("form").addEventListener("submit", async (event) => {
    //   // ===> Empêche le comportement par défaut de la soumission d'un formulaire = rafraîchissement de la page
    event.preventDefault();

    //   // console.log("submit", event);

    //   // ===> On récupère les valeurs de chaque input
    const firstname = document.querySelector("#firstname").value;
    const lastname = document.querySelector("#lastname").value;
    const message = document.querySelector("#message").value;
    const email = document.querySelector("#email").value;

    //   // console.log({ firstname, lastname, email, message });

    const response = await axios.post(
      "https://site--mailing--ztzpdvfwt7bw.code.run/",
      {
        firstname,
        lastname,
        email,
        message,
      }
    );
    favDialog.close();
    //   console.log(response.data);
  });
});
