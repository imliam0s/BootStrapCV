

document.addEventListener('DOMContentLoaded', function () {
    var contactButton = document.getElementById('contactButton');

    if (contactButton) {
        contactButton.addEventListener('click', function () {
            var myModal = new bootstrap.Modal(document.getElementById('contactModal'), {
                keyboard: false
            });
            myModal.show();
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        var gradesCollapse = new bootstrap.Collapse(document.getElementById('gradesCollapse'), {
            toggle: false
        });
    
        document.getElementById('viewGradesButton').addEventListener('click', function () {
            gradesCollapse.toggle();
        });
    });

  



});


