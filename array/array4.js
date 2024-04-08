//Classificar os itens de um vetor
const nomes = ['flamengo', 'vasco', 'botafofo', 'bragantino','curintian']

console.log(nomes.sort())
console.log(nomes.reverse())


const numbers = [12,3,5,8,20]

const ordemCrescente = (a,b) => a - b;
console.log(numbers.sort(ordemCrescente));
const ordemDecrescente = (a,b) => b - a;
console.log(numbers.sort(ordemDecrescente));
































/* Plano de testes
Projeto: [Disney API]
Objetivo: O objetivo deste plano de teste é verificar se todas as funcionalidades do sistema estão operando conforme esperado, identificar e relatar quaisquer defeitos encontrados e garantir uma experiência de usuário satisfatória.
Escopo: [O que esse plano de testes abrangerá]
Testar Layout e design responsivo
Navegação e interação do usuário
Funcionalidades específicas do front-end
Estratégia de Teste: [Tipos de teste]
Recursos de Teste: 
Equipe de teste: Arthur Leony
Ambiente: windows 11
Ferramentas: Chrome, visual studio code, jest
Documentação: Específicas do projeto
Plano de Teste:
Teste de Usabilidade:
Responsável:
 Arthur Leony
Descrição: 
Avaliar a facilidade e usabilidade do sistema, incluindo navegação e clareza das informações apresentadas
Critérios de aceitação: 
O sistema deve ser intuitivo para os usuários, com navegação fácil e informações claras
Teste de Acessibilidade:
Responsável: 
Arthur Leony
Descrição:
Verificar se o sistema é acessível para pessoas com deficiências, seguindo as diretrizes de acessibilidade.
Critérios de aceitação:
O sistema deve atender aos padrões de acessibilidade, como WCAG (perceptível, operável, compreensível e robusto.) para garantir que todos os usuários possam utilizar suas funcionalidades.
Teste de Funcionalidade:
Responsável: 
Arthur Leony
Descrição:
Verificar se todas as funcionalidades do sistema estão operando corretamente, incluindo filtragem, barra de pesquisa, botões de próxima página, e o botão de mais informação, também irei avaliar se a exibição de informações e interações estão funcionando.
Critérios de aceitação:
Todas as funcionalidades do sistema devem funcionar conforme especificado, sem erros ou comportamentos inesperados.

Boas práticas de programação:
Responsável: Arthur Leony
Descrição:
Avaliar se o código do sistema segue as melhores práticas da programação, incluindo legibilidade, modularidade e eficiência, se existem partes do código inúteis ou sem sentido na aplicação.
Critérios de aceitação:
O código deve ser organizado, ter comentários e seguir os padrões de codificação consistentes para facilitar alguma alteração ou manutenção que talvez seja necessária em um futuro próximo.





*/