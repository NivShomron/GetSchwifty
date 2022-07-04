class EndGame {
    end(buttons) {
        buttons.forEach(button => {
            button.addEventListener('click', () => 
            {
                button.disabled = true;
            });
        });
    }
}