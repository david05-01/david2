// Função para alterar o contraste (opcional)
const toggleContrast = () => {
    document.body.classList.toggle('high-contrast');
}

// Adiciona a funcionalidade ao pressionar a tecla 'C' para alternar o contraste
document.addEventListener('keydown', (event) => {
    if (event.key === 'C' || event.key === 'c') {
        toggleContrast();
    }
});

// Para exemplo de navegação acessível
const links = document.querySelectorAll('a');

links.forEach(link => {
    link.addEventListener('focus', (e) => {
        e.target.style.outline = '3px solid #ff0'; // Estilo para foco de links
    });

    link.addEventListener('blur', (e) => {
        e.target.style.outline = 'none';
    });
});
