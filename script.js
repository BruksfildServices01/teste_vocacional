// Todas as perguntas do teste vocacional
const questions = [
    {
      question: "1. O que você prefere fazer?",
      options: {
        artes: "Desenhar ou pintar",
        tecnologia: "Explorar softwares",
        ciencias: "Ler sobre fenômenos naturais",
      },
    },
    {
      question: "2. Qual atividade você gosta mais?",
      options: {
        negocios: "Planejar algo novo",
        comunicacao: "Escrever um texto",
        servicos: "Ajudar alguém diretamente",
      },
    },
    {
      question: "3. Como você aprende melhor?",
      options: {
        ciencias_exatas: "Resolvendo problemas",
        comunicacao: "Produzindo conteúdo",
        tecnologia: "Testando ferramentas novas",
      },
    },
    {
      question: "4. Qual tipo de ambiente você prefere?",
      options: {
        artes: "Estúdio criativo",
        ciencias_humanas: "Biblioteca tranquila",
        ciencias_naturais: "Laboratório de pesquisa",
      },
    },
    {
      question: "5. Como você reage a um desafio?",
      options: {
        negocios: "Planejo uma solução",
        servicos: "Dou suporte prático",
        tecnologia: "Busco uma solução inovadora",
      },
    },
    {
      question: "6. Qual dessas palavras combina com você?",
      options: {
        ciencias_humanas: "Empático",
        tecnologia: "Inovador",
        comunicacao: "Comunicativo",
      },
    },
    {
      question: "7. O que mais motiva você?",
      options: {
        ciencias_exatas: "Resolver problemas",
        negocios: "Gerenciar pessoas",
        artes: "Criar algo único",
      },
    },
    {
      question: "8. O que você prefere trabalhar?",
      options: {
        ciencias_naturais: "Com a natureza",
        servicos: "Ajudando pessoas diretamente",
        artes: "Criando algo visual",
      },
    },
    {
      question: "9. Como você se descreveria?",
      options: {
        comunicacao: "Extrovertido e comunicativo",
        negocios: "Ambicioso e estratégico",
        ciencias_humanas: "Empático e reflexivo",
      },
    },
    {
      question: "10. O que mais te interessa?",
      options: {
        tecnologia: "Inovação tecnológica",
        ciencias_exatas: "Cálculos e análises",
        ciencias_naturais: "Entender a natureza",
      },
    },
    {
      question: "11. Qual carreira te chama atenção?",
      options: {
        comunicacao: "Jornalismo ou marketing",
        servicos: "Enfermagem ou assistência social",
        negocios: "Administração ou vendas",
      },
    },
    {
      question: "12. O que mais te atrai em um trabalho?",
      options: {
        artes: "Criatividade e expressão",
        tecnologia: "Resolução de problemas",
        ciencias_naturais: "Descoberta científica",
      },
    },
    {
      question: "13. Como você prefere passar o tempo?",
      options: {
        negocios: "Planejando objetivos",
        ciencias_exatas: "Fazendo cálculos ou jogos lógicos",
        comunicacao: "Criando conteúdo para redes sociais",
      },
    },
    {
      question: "14. O que você valoriza em um trabalho?",
      options: {
        servicos: "Ajudar as pessoas",
        tecnologia: "Trabalhar com inovação",
        artes: "Expressar sua criatividade",
      },
    },
  ];
  
  // Respostas acumuladas
  const answers = {
    artes: 0,
    tecnologia: 0,
    ciencias_naturais: 0,
    ciencias_humanas: 0,
    ciencias_exatas: 0,
    negocios: 0,
    comunicacao: 0,
    servicos: 0,
  };
  
  // Descrições dos resultados
  const descriptions = {
    artes: "Você tem um perfil criativo e artístico! Carreiras como design, artes visuais ou música podem ser ideais.",
    tecnologia: "Você é inovador e lógico! Considere carreiras em TI, engenharia ou desenvolvimento de software.",
    ciencias_naturais: "Você é curioso sobre o mundo natural! Medicina, biologia ou pesquisa são boas áreas para você.",
    ciencias_humanas: "Você gosta de entender pessoas e o mundo! Psicologia, sociologia ou educação são áreas recomendadas.",
    ciencias_exatas: "Você é lógico e analítico! Matemática, física ou engenharia são áreas recomendadas.",
    negocios: "Você tem um perfil estratégico e empreendedor! Administração, marketing ou gestão são recomendadas.",
    comunicacao: "Você é comunicativo e persuasivo! Jornalismo, publicidade ou mídias sociais são ideais.",
    servicos: "Você é prestativo e solidário! Considere carreiras como enfermagem, assistência social ou hospitalidade.",
  };
  
  // Controle do progresso
  let currentQuestion = 0;
  
  // Seletores DOM
  const questionContainer = document.getElementById("question-container");
  const nextButton = document.getElementById("next-button");
  const restartButton = document.getElementById("restart-button");
  const progressBar = document.getElementById("progress-bar");
  const resultDiv = document.getElementById("result");
  const vocationalResult = document.getElementById("vocational-result");
  const vocationalDescription = document.getElementById("vocational-description");
  
  // Carregar perguntas
  function loadQuestion() {
    const questionData = questions[currentQuestion];
    const optionsHTML = Object.entries(questionData.options)
      .map(
        ([key, value]) =>
          `<div class="option-button" data-value="${key}">${value}</div>`
      )
      .join("");
    questionContainer.innerHTML = `
      <div class="question">${questionData.question}</div>
      ${optionsHTML}
    `;
  
    // Adicionar evento de clique às opções
    document.querySelectorAll(".option-button").forEach((button) => {
      button.addEventListener("click", (e) => {
        const selected = document.querySelector(".option-button.selected");
        if (selected) selected.classList.remove("selected");
        e.target.classList.add("selected");
      });
    });
  }
  
  // Atualizar barra de progresso
  function updateProgressBar() {
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progress}%`;
  }
  
  // Mostrar resultado
  function showResult() {
    const max = Math.max(...Object.values(answers));
    const field = Object.keys(answers).find((key) => answers[key] === max);
  
    vocationalResult.textContent = `Você tem um perfil voltado para ${field.toUpperCase()}!`;
    vocationalDescription.textContent = descriptions[field];
    resultDiv.classList.remove("hidden");
    questionContainer.classList.add("hidden");
    nextButton.classList.add("hidden");
    restartButton.classList.remove("hidden");
  }
  
  // Avançar para a próxima pergunta
  nextButton.addEventListener("click", () => {
    const selectedOption = document.querySelector(".option-button.selected");
    if (!selectedOption) {
      alert("Por favor, escolha uma opção!");
      return;
    }
  
    const value = selectedOption.getAttribute("data-value");
    answers[value]++;
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      loadQuestion();
      updateProgressBar();
    } else {
      showResult();
    }
  });
  
  // Reiniciar o teste
  restartButton.addEventListener("click", () => {
    currentQuestion = 0;
    Object.keys(answers).forEach((key) => (answers[key] = 0));
    resultDiv.classList.add("hidden");
    questionContainer.classList.remove("hidden");
    nextButton.classList.remove("hidden");
    restartButton.classList.add("hidden");
  
    loadQuestion();
    updateProgressBar();
  });
  
  // Inicializar o teste
  loadQuestion();
  updateProgressBar();
  