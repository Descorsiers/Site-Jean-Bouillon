// $(document).ready(function () {
//   $("a").on("click", function (event) {
//     if (this.hash !== "") {
//       event.preventDefault();

//       var hash = this.hash;

//       $("html, body").animate(
//         {
//           scrollTop: $(hash).offset().top,
//         },
//         800,
//         function () {
//           window.location.hash = hash;
//         }
//       );
//     }
//   });
// });

// function openPopup(event) {
//     document.getElementById("popup").style.display = "block";
//     event.preventDefault();

// }

function closePopup() {
    document.getElementById("popup").style.display = "none";
}

var buttonForm = document.getElementById('button-form');
buttonForm.addEventListener('click', ()=>{
  document.getElementById("popup").style.display = "block";
});