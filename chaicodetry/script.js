
  const tabPersonal = document.getElementById("tabPersonal");
  const tabTeams = document.getElementById("tabTeams");
  const rcPersonal = document.getElementById("rcPersonal");
  const rcTeams = document.getElementById("rcTeams");

  tabPersonal.addEventListener("click", () => {
    tabPersonal.classList.add("active");
    tabTeams.classList.remove("active");
    rcPersonal.classList.add("active");
    rcTeams.classList.remove("active");
  });

  tabTeams.addEventListener("click", () => {
    tabTeams.classList.add("active");
    tabPersonal.classList.remove("active");
    rcTeams.classList.add("active");
    rcPersonal.classList.remove("active");
  });

