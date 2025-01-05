document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('matchModal');
    const closeModal = document.querySelector('.close');


    function openModal(fighterName, matchDetails) {
        document.getElementById('modalFighterName').innerText = fighterName;
        document.getElementById('modalMatchDetails').innerText = matchDetails;
        modal.style.display = 'block';
    }


    closeModal.onclick = function() {
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }


    const fighters = document.querySelectorAll('.fighter h3, .fighter img');
    fighters.forEach(fighter => {
        fighter.addEventListener('click', function() {
            const fighterName = this.innerText;
            const matchDetails = "Details over de match gaan hier";
            openModal(fighterName, matchDetails);
        });
    });
});
