document.addEventListener("DOMContentLoaded", () => {
    includeHTML("header", "components/header.html");
    includeHTML("footer", "components/footer.html");
  });
  
  function includeHTML(targetId, file) {
    fetch(file)
      .then(res => {
        if (!res.ok) throw new Error(`Error al cargar ${file}`);
        return res.text();
      })
      .then(html => {
        document.getElementById(targetId).innerHTML = html;
      })
      .catch(err => {
        console.error(err);
      });
  }
  