function wordAnalyser(text){

    let analysis = {};

    let textToAnalysis = String(text);
    let words = textToAnalysis.split(' ');
    
    for( let i = 0; i < words.length; i++){

        if (analysis[words[i]]){

            analysis[words[i]]++;

        }else{

            analysis[words[i]] = 1;

        }

    }
    
    Object.keys(analysis).sort();

    return analysis;

}


let text = `Durante a Copa do Mundo, as articulações políticas continuam, mas a atenção da sociedade brasileira está focada no desempenho da seleção brasileira. A torcida pelo Brasil reúne os familiares num grande momento de confraternização. Entretanto, os indicadores econômicos não demonstram que cederam à “retranca”, e a equipe econômica simplesmente pretende administrar um “empate” até surgir o fim do mandato de Michel Temer.

A política brasileira não tem demonstrado condições de criar “jogadas” inovadoras no meio do campo político, e testemunhamos uma grande quantidade de candidaturas semelhantes às participações cômicas de algumas partidas de futebol da Copa da Rússia. Muitos analistas sugerem um afunilamento das candidaturas do campo liberal-social (PSDB, DEM, Rede, Podemos, Solidariedade, PRB, Novo) até o fim do próximo mês. Outros se concentram em analisar a candidatura da herança autoritária de nossa modernização política, que faz muitos brasileiros saírem do “armário” na defesa de ideias ultraconservadoras. E ainda temos nossos especialistas na análise das pré-candidaturas da esquerda brasileira, com ou sem Plano B em relação a Lula. 

Contudo, a crise do Brasil não cede espaço no decorrer dessas primeiras apresentações das pré-candidaturas, uma vez que vivemos numa crise de ajuste da política brasileira – e as manifestações de junho de 2013 não permitiram uma renovação dos quadros da política nacional. As eleições se aproximam com muitos eleitores indicando que se somarão ao grupo do “Não Voto” (abstenção/nulo/branco) como se fosse a persistência do clamor das ruas: “Ninguém me representa!”.

O momento político indica uma crise orgânica na linha da interpretação de Antônio Gramsci. Segundo ele, “a crise consiste precisamente no fato de que o velho está morrendo e o novo ainda não pode nascer. Nesse interregno, uma grande variedade de sintomas mórbidos aparece”. As forças democráticas e progressistas precisam reconhecer essa situação e buscar caminhos inovadores que permitam a superação da crise defendendo as instituições consagradas na Constituição de 1988.

Os analistas de futebol comentam muitas táticas, enquanto o torcedor prefere comentar a vitória do seu time de futebol. Nosso momento político impõe que reinventemos a forma de fazer política das organizações comprometidas com a defesa da democracia. Precisamos estar atentos: a crise do Brasil está criando um mórbido cenário em que a hegemonia do sentimento de “antipolítica” consolide uma alternativa reacionária para as próximas eleições presidenciais. 

O tempo é de realizar profundas reflexões nos meios universitários e de realização de mobilizações da sociedade para pressionar os atores políticos do campo democrático por uma atuação mais coerente com os anseios da sociedade. O sectarismo político avesso às alianças só atendem a um desejo de fazer a “pequena política” de ampliar bancadas no Congresso Nacional. Enquanto isso, o conservadorismo avança sua hegemonia na sociedade brasileira. Devemos ter o compromisso de evitar um “7 a 1” para a democracia brasileira nas eleições de outubro, com a ascensão eleitoral de um pólo extremista de direita.

* Mestre em Sociologia e professor de História`

let analysis = wordAnalyser(text);

console.log(analysis);
