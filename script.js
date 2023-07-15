const ul = document.getElementById('list');
const buttonEnv = document.getElementById('buttonEnv');
const buttonRm = document.getElementById('buttonRm');

buttonEnv.addEventListener('click', function() {
    let name = document.getElementById('name').value;
    let position = document.getElementById('position').value;
    let shirt = document.getElementById('shirt').value;

    const confirmation = confirm ('Deseja salvar as informações?');

    if(confirmation) {
        const player = document.createElement('li');
        player.id = 'player-' + shirt;
        player.innerText = `${position} - ${name} (${shirt})`
        player.style.listStyle = 'none';
        ul.appendChild(player);

        document.getElementById('name').value = '';
        document.getElementById('position').value = '';
        document.getElementById('shirt').value = '';
    }
    
});

buttonRm.addEventListener('click', function() {
    const shirtNum = document.getElementById('shirtNum').value;
    const playerRm = document.getElementById('player-' + shirtNum);
    
    const confirmation = confirm('Deseja deletar as informações?');
    
    if (playerRm) {

    if (confirmation) {
      document.getElementById('list').removeChild(playerRm);
      document.getElementById('shirtNum').value = '';
    } else {
        alert('Jogador não encontrado na lista.');
    }
  }
})
