$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
});
/*
function izmenaProfila(){
    const show = document.getElementById("show-profile");
    const edit = document.getElementById("edit-profile");
    show.style.display = "none";
    edit.style.display = "block";
}

function prikazProfila(){
    const show = document.getElementById("show-profile");
    const edit = document.getElementById("edit-profile");
    edit.style.display = "none";
    show.style.display = "block";
}*/