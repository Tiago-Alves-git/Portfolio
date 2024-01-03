import react from '../../Style/Icons/icons8-react-64.png';
import recipeApp from '../../Style/Mocks/RecipeApp.png';
import wallet from '../../Style/Mocks/walletApp.png';

const projects = [
  {
    Name: "Recipe App",
    Technology: [react],
    TechnologyName: "react",
    Enabled: true,
    Thumbnail: recipeApp,
    Github: "https://github.com/Tiago-Alves-git/Recipe_app",
    WebSite: "https://recipeapp.up.railway.app/",
    Login: { email: "user@user.com", password: "user1234" },
    Description: "O CookBook App é uma aplicação que utiliza as APIs Meals.db e Cocktail.db para oferecer uma ampla variedade de receitas de alimentos e bebidas. A aplicação possui uma página principal que lista todas as receitas disponíveis, com opções de filtragem por tipos de alimentos e bebidas. Além disso, há uma página detalhada para cada receita, onde os usuários podem seguir passos, marcar o progresso, assistir a tutoriais em vídeo e adicionar receitas aos favoritos."
  },
  {
    Name: "Carteira Digital",
    Technology: [react],
    TechnologyName: "react",
    Enabled: true,
    Thumbnail: wallet,
    Github: "https://github.com/Tiago-Alves-git/Wallet",
    WebSite: "https://wallet.up.railway.app/",
    Login: { email: "user@user.com", password: "user1234" },
    Description: "O projeto Carteira Digital é uma aplicação desenvolvida em React que permite aos usuários registrar e gerenciar despesas internacionais em diversas moedas diferentes. A aplicação oferece a funcionalidade de adicionar despesas com informações detalhadas, incluindo valores, descrições, formas de pagamento e tags."
  },
];

export default projects