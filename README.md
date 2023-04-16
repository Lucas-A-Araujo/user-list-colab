<h1>Processo</h1>
Este é um projeto de listar usuários. O foco maior foi na lógica e funcionalidades que eu achei que eram relevantes.

<br/>
<h2>Parte 1 - Como fazer?</h2>
	&emsp;&emsp;Primeiro de tudo, eu precisava saber o que mostrar e como mostrar, então fiz uma requisição no insomnia para identificar o que deveria ser mostrado e se existia uma forma fácil de requisitar vários usuários de uma vez.<br/>
	&emsp;&emsp;Por fim, peguei o conjunto de tecnologias que eu estava familiarizado e que não daria muito trabalho desnecessário e assim implementei uma requisição e mostrei o resultado na tela para garantir que estava tudo certo.

<br/>
<h2>Parte 2 - O que mostrar e o que esconder?</h2>
	&emsp;&emsp;Eu verifiquei todas as informações que a API retornava e pensei em que contexto elas poderiam se encaixar e após isso quais dados não deveriam ser mostrados? Com as informações que eu tinha, achei melhor que fosse uma aplicação mais voltada para a administração de usuários, assim, todas as informações seriam relevantes, tirando a senha, pois é uma informação que apenas o usuário deveria ter acesso.

<br/>
<h2>Parte 3 - Não está tudo muito poluído?</h2>
	&emsp;&emsp;Após mostrar todas as informações que eu achei necessário, eu percebi que estava tudo muito poluído, principalmente em telas de celular. Se fez necessário uma forma de mostrar as informações completas apenas quando requisitado, portanto o “card” do usuário foi diminuído e transformado em um botão que ao ser clicado iria mostrar mais informações do usuário em questão.<br/>
	&emsp;&emsp;Com esse problema resolvido, surgiu um menor: “o que mostrar no card menor?”. De início eu tentei o nome, mas partindo do ponto de que o “username” é algo mais único e é a forma que o usuário seria mais conhecido na plataforma, eu optei por mostrar o username.

<br/>
<h2>Parte 4 - Quantos usuários mostrar?</h2>
	&emsp;&emsp;A quantidade de usuários que eu poderia mostrar até agora era limitada, pois ou eu mostrava uma quantidade limitada e fixa de usuários(não é o ideal) ou eu mostraria todos os usuários possíveis de uma vez(não é viável), então optei pelo “scroll infinito” e com isso eu poderia mostrar uma quantidade de usuários sob demanda de uma forma performática.

<br/>
<h2>Bônus - Estilos</h2>
	&emsp;&emsp;Eu não foquei muito na beleza do site, me foquei mais em deixar tudo de uma forma confortável para se trabalhar e é por isso que a aplicação está em “dark mode”. Em relação ao roxo, a ideia original era usar o roxo da Colab, mas ele não tinha muito contraste com o modo escuro, então peguei um roxo um pouco mais claro.<br/>
	&emsp;&emsp;A aplicação foi desenvolvida usando mobile first, por isso alguns commits ficam muito estranhos/feios fora do celular. Como o site tem bem mais espaço que um celular, decidi sempre mostrar as informações completas do usuário, pensei em tentar deixar mais bonito, mas creio que já tinha investido tempo de mais no estilo de um desafio de lógica.

<br/>
<h2>Conclusão</h2>
	&emsp;&emsp;Eu sou suspeito para falar, pois eu gosto de desafios de projeto, mas eu gostei do desafio em si. O único ponto que eu não gostei da proposta foi a falta de um prazo, então eu me dei um prazo de “um sábado" para fazer esse projeto(eu tive um imprevisto no sábado, por isso peguei um pedaço do domingo para fazer alguns retoques), porém é provável que eu faça mais alterações no próximo final de semana.<br/>
	&emsp;&emsp;Em relação a parte técnica, eu decidi ficar nas minhas ferramentas antigas(react com programação funcional), pois eu não queria deixá-las enferrujadas já que eu não trabalho com elas no meu dia a dia. A API foi interessante, mas fiquei decepcionado por não ter muitos filtros.<br/>
	&emsp;&emsp;Um ponto mais pessoal que percebi, é que eu estou bem enferrujado para criar uma UI bonita do zero, então eu deixei de lado nesse projeto e irei trabalhar isso em mim.


<br/>
<h2>Futuros desafios</h2>
<ul>
<li>Encontrar uma forma de usar o espaço em branco da tela no desktop.</li>
<li>Adicionar filtros para a aplicação(só achei filtro por gênero e nacionalidade, mas eu queria mais).</li>
<li>Adicionar uma barra de pesquisa para a tela.(localmente)</li>
</ul>
