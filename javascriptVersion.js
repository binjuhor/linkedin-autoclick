setInterval(function () {
    let friendsList = document.querySelectorAll('.scaffold-finite-scroll__content li')
    
    for (let i = 0; i < friendsList.length; i++) {
        let friend = friendsList[i]
        var button = friend.querySelector('.artdeco-button');
        var friendName = friend.querySelector('.discover-person-card__name').textContent;
        var toScroll = document.documentElement.scrollHeight;
        
        if (button) {
            if (!button.classList.contains('clicked')) {
                button.click();
                console.log(`Invited ${friendName.trim()} to connect` );
                button.classList.add('clicked');
            }
            if (button.classList.contains('clicked')) {
                document.querySelector('.scaffold-finite-scroll--infinite').scrollTo(0, toScroll);
            }
        }

        if (i === friendsList.length - 5) {
            document.querySelector('.scaffold-finite-scroll--infinite').scrollTo(0, toScroll);
        }
    }
     
}, 5000);