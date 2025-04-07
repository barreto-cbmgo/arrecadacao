// Registrar os plugins globalmente
Chart.register(ChartDataLabels);

// Importar o plugin de zoom se estiver disponível
if (window.ChartZoom) {
  Chart.register(window.ChartZoom);
}

// Dados de arrecadação (mesmo objeto 'data')
const data = {
  por_organizacao: [
    {
      ano: 2022,
      dados: [
        { obm: "10ª CIBM - POSSE", valor: 176419.48 },
        { obm: "10º BBM - CATALÃO", valor: 710369.04 },
        { obm: "11ª CIBM - URUAÇU", valor: 358577.75 },
        { obm: "11º BBM - PORANGATU", valor: 180898.47 },
        { obm: "12ª CIBM - MORRINHOS", valor: 280585.53 },
        { obm: "12º BBM - CIDADE DE GOIÁS", valor: 205731.03 },
        { obm: "13ª CIBM - IPORÁ", valor: 214241.86 },
        { obm: "13º BBM - JATAÍ", valor: 791806.01 },
        { obm: "14ª CIBM - PIRES DO RIO", valor: 115832.16 },
        { obm: "14º BBM - SENADOR CANEDO", valor: 385582.28 },
        { obm: "15ª CIBM - QUIRINÓPOLIS", valor: 303311.93 },
        { obm: "15º BBM - TRINDADE", valor: 374004.56 },
        { obm: "16ª CIBM - GOIATUBA", valor: 212418.37 },
        { obm: "16º BBM - MINEIROS", valor: 416206.67 },
        { obm: "17ª CIBM - ITABERAÍ", valor: 234087.14 },
        { obm: "17º BBM - PIRENÓPOLIS", valor: 344559.59 },
        { obm: "18ª CIBM - CERES", valor: 288100.55 },
        { obm: "18º BBM - GOIANÉSIA", valor: 283176.95 },
        { obm: "19ª CIBM - SÃO LUÍS M. BELOS", valor: 157995.5 },
        { obm: "19º BBM - FORMOSA", valor: 628511.48 },
        { obm: "1ª CIBM - MINAÇU", valor: 78088.87 },
        { obm: "1º PBM - ARUANÃ", valor: 105652.57 },
        { obm: "20ª CIBM - GOIANIRA", valor: 126477.52 },
        { obm: "20º BBM-ÁGUAS LINDAS DE GOIÁS", valor: 481461.74 },
        { obm: "21ª CIBM - NERÓPOLIS", valor: 221987.24 },
        { obm: "22ª CIBM - S. M. DO ARAGUAIA", valor: 113483.23 },
        { obm: "22º BBM - JARAGUÁ", valor: 184798.38 },
        { obm: "23ª CIBM - IPAMERI", valor: 159240.46 },
        { obm: "25ª CIBM - BELA VISTA DE GOIÁS", valor: 127772.47 },
        { obm: "26ª CIBM - VALPARAÍSO DE GOIÁS", valor: 604700.32 },
        { obm: "2º PBM - SILVÂNIA", valor: 183793.47 },
        { obm: "3ª CIBM - SANTA HELENA", valor: 294224.15 },
        { obm: "3º BBM - ANÁPOLIS", valor: 1674414.14 },
        { obm: "3º PBM STO. A. DO DESCOBERTO", valor: 61542.02 },
        { obm: "4º BBM - RIO VERDE", valor: 1801654.91 },
        { obm: "4º PBM - CAMPOS BELOS", valor: 98289.3 },
        { obm: "5ª CIBM - PALMEIRAS DE GOIÁS", valor: 224065.67 },
        { obm: "5º BBM - LUZIÂNIA", valor: 685400.87 },
        { obm: "6ª CIBM - NIQUELÂNDIA", valor: 168759.38 },
        { obm: "6º BBM - ITUMBIARA", valor: 958348.18 },
        { obm: "7ª CIBM - INHUMAS", valor: 235509.69 },
        { obm: "7º BBM - APARECIDA DE GOIÂNIA", valor: 2123487.68 },
        { obm: "8ª CIBM - CRISTALINA", valor: 506766.33 },
        { obm: "9ª CIBM - PLANALTINA", valor: 281714.45 },
        { obm: "9º BBM - CALDAS NOVAS", valor: 797412.95 },
        { obm: "CAT", valor: 8920318.43 },
        { obm: "Total geral", valor: 27874466.53 },
      ],
    },
    {
      ano: 2023,
      dados: [
        { obm: "10ª CIBM - POSSE", valor: 168424.98 },
        { obm: "10º BBM - CATALÃO", valor: 798186.12 },
        { obm: "11ª CIBM - URUAÇU", valor: 392445.76 },
        { obm: "11º BBM - PORANGATU", valor: 271853.71 },
        { obm: "12ª CIBM - MORRINHOS", valor: 382826.6 },
        { obm: "12º BBM - CIDADE DE GOIÁS", valor: 198631.21 },
        { obm: "13ª CIBM - IPORÁ", valor: 236734.77 },
        { obm: "13º BBM - JATAÍ", valor: 756839.76 },
        { obm: "14ª CIBM - PIRES DO RIO", valor: 150165.76 },
        { obm: "14º BBM - SENADOR CANEDO", valor: 460411.48 },
        { obm: "15ª CIBM - QUIRINÓPOLIS", valor: 417123.82 },
        { obm: "15º BBM - TRINDADE", valor: 479866.99 },
        { obm: "16ª CIBM - GOIATUBA", valor: 249406.65 },
        { obm: "16º BBM - MINEIROS", valor: 475884.06 },
        { obm: "17ª CIBM - ITABERAÍ", valor: 288418.21 },
        { obm: "17º BBM - PIRENÓPOLIS", valor: 386844.64 },
        { obm: "18ª CIBM - CERES", valor: 350428.36 },
        { obm: "18º BBM - GOIANÉSIA", valor: 381261.17 },
        { obm: "19ª CIBM - SÃO LUÍS M. BELOS", valor: 179861.02 },
        { obm: "19º BBM - FORMOSA", valor: 698677.59 },
        { obm: "1ª CIBM - MINAÇU", valor: 130256.6 },
        { obm: "1º PBM - ARUANÃ", valor: 185447.64 },
        { obm: "20ª CIBM - GOIANIRA", valor: 144483.17 },
        { obm: "20º BBM-ÁGUAS LINDAS DE GOIÁS", valor: 633627.35 },
        { obm: "21ª CIBM - NERÓPOLIS", valor: 277937.69 },
        { obm: "22ª CIBM - S. M. DO ARAGUAIA", valor: 147126.94 },
        { obm: "22º BBM - JARAGUÁ", valor: 201673.37 },
        { obm: "23ª CIBM - IPAMERI", valor: 160666.62 },
        { obm: "25ª CIBM - BELA VISTA DE GOIÁS", valor: 174110.03 },
        { obm: "26ª CIBM - VALPARAÍSO DE GOIÁS", valor: 653031.75 },
        { obm: "2º PBM - SILVÂNIA", valor: 241434.4 },
        { obm: "3ª CIBM - SANTA HELENA", valor: 374060.54 },
        { obm: "3º BBM - ANÁPOLIS", valor: 1854120.53 },
        { obm: "3º PBM STO. A. DO DESCOBERTO", valor: 96629.71 },
        { obm: "4º BBM - RIO VERDE", valor: 2167126.03 },
        { obm: "4º PBM - CAMPOS BELOS", valor: 151927.52 },
        { obm: "5ª CIBM - PALMEIRAS DE GOIÁS", valor: 237933.34 },
        { obm: "5º BBM - LUZIÂNIA", valor: 771725.24 },
        { obm: "6ª CIBM - NIQUELÂNDIA", valor: 202165.97 },
        { obm: "6º BBM - ITUMBIARA", valor: 1123800.58 },
        { obm: "7ª CIBM - INHUMAS", valor: 240313.24 },
        { obm: "7º BBM - APARECIDA DE GOIÂNIA", valor: 2403852.55 },
        { obm: "8ª CIBM - CRISTALINA", valor: 635585.45 },
        { obm: "9ª CIBM - PLANALTINA", valor: 326248.05 },
        { obm: "9º BBM - CALDAS NOVAS", valor: 923068.84 },
        { obm: "CAT", valor: 10313204.37 },
        { obm: "Total geral", valor: 32495850.18 },
      ],
    },
    {
      ano: 2024,
      dados: [
        { obm: "10ª CIBM - POSSE", valor: 167285.05 },
        { obm: "10º BBM - CATALÃO", valor: 1030421.86 },
        { obm: "11ª CIBM - URUAÇU", valor: 416747.44 },
        { obm: "11º BBM - PORANGATU", valor: 270633.79 },
        { obm: "12ª CIBM - MORRINHOS", valor: 402236.68 },
        { obm: "12º BBM - CIDADE DE GOIÁS", valor: 218249.42 },
        { obm: "13ª CIBM - IPORÁ", valor: 238043.68 },
        { obm: "13º BBM - JATAÍ", valor: 807734.19 },
        { obm: "14ª CIBM - PIRES DO RIO", valor: 160471.39 },
        { obm: "14º BBM - SENADOR CANEDO", valor: 541400.0 },
        { obm: "15ª CIBM - QUIRINÓPOLIS", valor: 416725.04 },
        { obm: "15º BBM - TRINDADE", valor: 484491.95 },
        { obm: "16ª CIBM - GOIATUBA", valor: 281531.73 },
        { obm: "16º BBM - MINEIROS", valor: 597777.18 },
        { obm: "17ª CIBM - ITABERAÍ", valor: 280150.49 },
        { obm: "17º BBM - PIRENÓPOLIS", valor: 413852.48 },
        { obm: "18ª CIBM - CERES", valor: 311867.04 },
        { obm: "18º BBM - GOIANÉSIA", valor: 571972.43 },
        { obm: "19ª CIBM - SÃO LUÍS M. BELOS", valor: 219474.58 },
        { obm: "19º BBM - FORMOSA", valor: 667912.64 },
        { obm: "1ª CIBM - MINAÇU", valor: 124582.51 },
        { obm: "1º PBM - ARUANÃ", valor: 142115.4 },
        { obm: "20ª CIBM - GOIANIRA", valor: 177653.33 },
        { obm: "20º BBM-ÁGUAS LINDAS DE GOIÁS", valor: 704472.51 },
        { obm: "21ª CIBM - NERÓPOLIS", valor: 246896.85 },
        { obm: "22ª CIBM - S. M. DO ARAGUAIA", valor: 175447.79 },
        { obm: "22º BBM - JARAGUÁ", valor: 192488.21 },
        { obm: "23ª CIBM - IPAMERI", valor: 188836.33 },
        { obm: "25ª CIBM - BELA VISTA DE GOIÁS", valor: 199721.65 },
        { obm: "26ª CIBM - VALPARAÍSO DE GOIÁS", valor: 753969.12 },
        { obm: "2º PBM - SILVÂNIA", valor: 336148.81 },
        { obm: "3ª CIBM - SANTA HELENA", valor: 355338.04 },
        { obm: "3º BBM - ANÁPOLIS", valor: 2048655.36 },
        { obm: "3º PBM STO. A. DO DESCOBERTO", valor: 101577.67 },
        { obm: "4º BBM - RIO VERDE", valor: 2224284.04 },
        { obm: "4º PBM - CAMPOS BELOS", valor: 119137.3 },
        { obm: "5ª CIBM - PALMEIRAS DE GOIÁS", valor: 317210.89 },
        { obm: "5º BBM - LUZIÂNIA", valor: 801203.91 },
        { obm: "6ª CIBM - NIQUELÂNDIA", valor: 184762.41 },
        { obm: "6º BBM - ITUMBIARA", valor: 1142792.99 },
        { obm: "7ª CIBM - INHUMAS", valor: 274003.18 },
        { obm: "7º BBM - APARECIDA DE GOIÂNIA", valor: 2560383.68 },
        { obm: "8ª CIBM - CRISTALINA", valor: 752158.93 },
        { obm: "9ª CIBM - PLANALTINA", valor: 308765.76 },
        { obm: "9º BBM - CALDAS NOVAS", valor: 901439.64 },
        { obm: "CAT", valor: 10419727.88 },
        { obm: "Total geral", valor: 34252753.25 },
      ],
    },
  ],
  por_secao: [
    {
      ano: 2022,
      goiania: {
        projetos: 1299965.78,
        vistoria: 7562587.04,
        credenciamento: 57765.61,
        total: 8920318.43,
      },
      interior: {
        projetos: 2703197.58,
        vistoria: 16144521.11,
        credenciamento: 106429.41,
        total: 18954148.10,
      },
      total: {
        projetos: 4003163.36,
        vistoria: 23707108.15,
        credenciamento: 164195.02,
        total: 27874466.53,
      },
    },
    {
      ano: 2023,
      goiania: {
        projetos: 1394553.65,
        vistoria: 8834048.16,
        credenciamento: 84602.56,
        total: 10313204.37,
      },
      interior: {
        projetos: 3085086.1,
        vistoria: 18968204.12,
        credenciamento: 129355.59,
        total: 22182645.81,
      },
      total: {
        projetos: 4479639.75,
        vistoria: 27802252.28,
        credenciamento: 213958.15,
        total: 32495850.18,
      },
    },
    {
      ano: 2024,
      goiania: {
        projetos: 1828123.78,
        vistoria: 8501689.62,
        credenciamento: 89914.48,
        total: 10419727.88,
      },
      interior: {
        projetos: 4187174.73,
        vistoria: 19513531.25,
        credenciamento: 132319.39,
        total: 23833025.37,
      },
      total: {
        projetos: 6015298.51,
        vistoria: 28015220.87,
        credenciamento: 222233.87,
        total: 34252753.25,
      },
    },
  ],
  evolucao: [
    {
      periodo: "2022-2023",
      // Calculado: 32495850.18 - 27874466.53
      crescimento_nominal: 4621384.00,
      // Calculado: (4621384 / 27874466.53) * 100
      crescimento_percentual: 16.57,
    },
    {
      periodo: "2023-2024",
      // Calculado: 34252753.25 - 32495850.18
      crescimento_nominal: 1756903.07,
      // Calculado: (1756903.07 / 32495850.18) * 100
      crescimento_percentual: 5.41,
    },
  ],
};

// Para usar no seu código:
// console.log(data);

// Função para formatar valores em reais
function formatCurrency(value) {
  /* ... código original ... */
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
  }).format(value);
}
// Função para formatar valores em reais de forma abreviada
function formatCurrencyShort(value) {
  /* ... código original ... */
  if (value >= 1000000) {
    return "R$ " + (value / 1000000).toFixed(1) + " mi";
  } else if (value >= 1000) {
    return "R$ " + (value / 1000).toFixed(1) + " mil";
  } else {
    return "R$ " + value.toFixed(2);
  }
}
// Função para formatar percentuais
function formatPercentage(value) {
  /* ... código original ... */
  return new Intl.NumberFormat("pt-BR", {
    style: "percent",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value / 100);
}
// Configurações padrão para data labels
const dataLabelsConfig = {
  /* ... código original ... */ color: "#333",
  font: { weight: "bold" },
  formatter: function (value) {
    return formatCurrencyShort(value);
  },
};
// Cores para os gráficos
const chartColors = {
  /* ... código original ... */ blue: "rgba(54, 162, 235, 0.7)",
  red: "rgba(255, 99, 132, 0.7)",
  green: "rgba(75, 192, 192, 0.7)",
  yellow: "rgba(255, 206, 86, 0.7)",
  purple: "rgba(153, 102, 255, 0.7)",
  orange: "rgba(255, 159, 64, 0.7)",
  pink: "rgba(255, 105, 180, 0.7)",
  lime: "rgba(50, 205, 50, 0.7)",
  teal: "rgba(0, 128, 128, 0.7)",
  brown: "rgba(165, 42, 42, 0.7)",
  grey: "rgba(128, 128, 128, 0.7)",
  navy: "rgba(0, 0, 128, 0.7)",
};
const colorPalette = Object.values(chartColors);
let colorIndex = 0;
// Adicione esta linha após as outras declarações de variáveis
let includeCAT = false; // Estado inicial: não mostrar CAT
let includeJatai = false; // Estado inicial: mostrar Jataí

function getNextColor() {
  /* ... código original ... */
  const color = colorPalette[colorIndex % colorPalette.length];
  colorIndex++;
  return color;
}
function resetColorIndex() {
  colorIndex = 0;
}

// --- Funções da Aba "Visão Geral" (sem a tabela) ---
function createYearlyServiceCharts() {
  /* ... código original ... */
  const anos = [2022, 2023, 2024];
  const projetosData = anos.map((_, i) => data.por_secao[i].total.projetos);
  const projetosCtx = document
    .getElementById("projetosYearlyChart")
    .getContext("2d");
  new Chart(projetosCtx, {
    type: "bar",
    data: {
      labels: anos,
      datasets: [
        {
          label: "Projetos",
          data: projetosData,
          backgroundColor: chartColors.red,
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Projetos",
          font: { size: 16, weight: "bold" },
        },
        tooltip: {
          callbacks: {
            label: (ctx) => "Valor: " + formatCurrency(ctx.raw),
          },
        },
        datalabels: { ...dataLabelsConfig, anchor: "end", align: "top" },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { callback: (val) => formatCurrencyShort(val) },
        },
      },
    },
  });
  const vistoriasData = anos.map((_, i) => data.por_secao[i].total.vistoria);
  const vistoriasCtx = document
    .getElementById("vistoriasYearlyChart")
    .getContext("2d");
  new Chart(vistoriasCtx, {
    type: "bar",
    data: {
      labels: anos,
      datasets: [
        {
          label: "Vistorias",
          data: vistoriasData,
          backgroundColor: chartColors.blue,
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Vistorias",
          font: { size: 16, weight: "bold" },
        },
        tooltip: {
          callbacks: {
            label: (ctx) => "Valor: " + formatCurrency(ctx.raw),
          },
        },
        datalabels: { ...dataLabelsConfig, anchor: "end", align: "top" },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { callback: (val) => formatCurrencyShort(val) },
        },
      },
    },
  });
  const credenciamentoData = anos.map(
    (_, i) => data.por_secao[i].total.credenciamento
  );
  const credenciamentoCtx = document
    .getElementById("credenciamentoYearlyChart")
    .getContext("2d");
  new Chart(credenciamentoCtx, {
    type: "bar",
    data: {
      labels: anos,
      datasets: [
        {
          label: "Credenciamento",
          data: credenciamentoData,
          backgroundColor: chartColors.yellow,
          borderColor: "rgba(255, 206, 86, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Credenciamento",
          font: { size: 16, weight: "bold" },
        },
        tooltip: {
          callbacks: {
            label: (ctx) => "Valor: " + formatCurrency(ctx.raw),
          },
        },
        datalabels: { ...dataLabelsConfig, anchor: "end", align: "top" },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { callback: (val) => formatCurrencyShort(val) },
        },
      },
    },
  });
}
function createPieCharts() {
  /* ... código original ... */
  const anos = [2022, 2023, 2024];
  anos.forEach((ano, index) => {
    const dadosAno = data.por_secao[index];
    const ctx = document.getElementById(`pieChart${ano}`).getContext("2d");
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Projetos", "Vistorias", "Credenciamento"],
        datasets: [
          {
            data: [
              dadosAno.total.projetos,
              dadosAno.total.vistoria,
              dadosAno.total.credenciamento,
            ],
            backgroundColor: [
              chartColors.red,
              chartColors.blue,
              chartColors.yellow,
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: `${ano}`,
            font: { size: 16, weight: "bold" },
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const valor = context.raw;
                const porcentagem =
                  ((valor / dadosAno.total.total) * 100).toFixed(2) + "%";
                return `${context.label}: ${formatCurrency(
                  valor
                )} (${porcentagem})`;
              },
            },
          },
          legend: { position: "bottom" },
          datalabels: {
            color: "#fff",
            font: { weight: "bold", size: 12 },
            formatter: function (value, context) {
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = ((value / total) * 100).toFixed(1) + "%";
              return percentage;
            },
          },
        },
      },
    });
  });
}
function createServiceLocationPieCharts() {
  /* ... código original ... */
  const createChart = (id, title, dataGetter) => {
    const goianiaData = data.por_secao.map((item) => dataGetter(item.goiania));
    const interiorData = data.por_secao.map((item) =>
      dataGetter(item.interior)
    );
    const ctx = document.getElementById(id).getContext("2d");
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: ["Goiânia", "Interior"],
        datasets: [
          {
            data: [
              goianiaData.reduce((s, v) => s + v, 0),
              interiorData.reduce((s, v) => s + v, 0),
            ],
            backgroundColor: [chartColors.blue, chartColors.red],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: title,
            font: { size: 16, weight: "bold" },
          },
          tooltip: {
            callbacks: {
              label: function (context) {
                const valor = context.raw;
                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                const porcentagem = ((valor / total) * 100).toFixed(2) + "%";
                return `${context.label}: ${formatCurrency(
                  valor
                )} (${porcentagem})`;
              },
            },
          },
          legend: { position: "bottom" },
          datalabels: {
            color: "#fff",
            font: { weight: "bold", size: 12 },
            formatter: function (value, context) {
              const total = context.dataset.data.reduce((a, b) => a + b, 0);
              const percentage = ((value / total) * 100).toFixed(1) + "%";
              return percentage;
            },
          },
        },
      },
    });
  };
  createChart("pieChartVistorias", "Vistorias", (loc) => loc.vistoria);
  createChart("pieChartProjetos", "Projetos", (loc) => loc.projetos);
  createChart(
    "pieChartCredenciamento",
    "Credenciamento",
    (loc) => loc.credenciamento
  );
}
function createLocationChart() {
  /* ... código original ... */
  const anos = [2022, 2023, 2024];
  const goianiaData = anos.map((_, i) => data.por_secao[i].goiania.total);
  const interiorData = anos.map((_, i) => data.por_secao[i].interior.total);
  const ctx = document.getElementById("locationChart").getContext("2d");
  new Chart(ctx, {
    type: "bar",
    data: {
      labels: anos,
      datasets: [
        {
          label: "Goiânia",
          data: goianiaData,
          backgroundColor: chartColors.blue,
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 1,
        },
        {
          label: "Interior",
          data: interiorData,
          backgroundColor: chartColors.red,
          borderColor: "rgba(255, 99, 132, 1)",
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Comparativo: Goiânia vs Interior",
          font: { size: 16 },
        },
        tooltip: {
          callbacks: {
            label: (ctx) => ctx.dataset.label + ": " + formatCurrency(ctx.raw),
          },
        },
        datalabels: {
          color: "#fff",
          font: { weight: "bold" },
          formatter: (val) => formatCurrencyShort(val),
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { callback: (val) => formatCurrencyShort(val) },
        },
      },
    },
  });
}
function createYearlyComparisonChart() {
  /* ... código original ... */
/ ... código original ... */
const anos = [2022, 2023, 2024];
const totais = anos.map(
(_, i) =>
data.por_organizacao[i].dados.find((item) => item.obm === "Total geral")
.valor
);
  // --- END OF CORRECTION ---

  const ctx = document.getElementById("yearlyComparisonChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: anos,
      datasets: [
        {
          label: "Arrecadação Total",
          data: totais,
          borderColor: chartColors.blue,
          backgroundColor: "rgba(053, 192, 255, 0.2)",
          fill: true,
          tension: 0.1,
          pointRadius: 6,
          pointHoverRadius: 8,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: "Evolução da Arrecadação Anual",
          font: { size: 16 },
        },
        tooltip: {
          callbacks: {
            label: (ctx) => "Total: " + formatCurrency(ctx.raw),
          },
        },
        datalabels: {
          align: "top",
          anchor: "end",
          color: "#333",
          formatter: (val) => formatCurrencyShort(val),
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { callback: (val) => formatCurrencyShort(val) },
        },
      },
    },
  });
}
// --- Fim Funções da Aba "Visão Geral" ---

// --- Função da Aba "Detalhamento OBM" ---
function populateTable(initialYear, finalYear) {
  const tableBody = document.querySelector("#detailedTable tbody");
  if (!tableBody) {
    // Adiciona verificação caso a aba não esteja ativa ainda
    console.warn("Tabela de detalhamento não encontrada no DOM neste momento.");
    return;
  }
  tableBody.innerHTML = ""; // Limpa tabela

  const initialIndex = data.por_organizacao.findIndex(
    (d) => d.ano === initialYear
  );
  const finalIndex = data.por_organizacao.findIndex((d) => d.ano === finalYear);

  if (initialIndex === -1 || finalIndex === -1) {
    console.error("Ano inválido selecionado para tabela");
    return;
  }

  // Atualiza o cabeçalho da coluna de variação
  const variationHeader = document.getElementById("variationHeader");
  if (variationHeader)
    variationHeader.textContent = `Variação ${initialYear}-${finalYear}`;

  const allOBMs = new Set();
  data.por_organizacao.forEach((ano) =>
    ano.dados.forEach((item) => {
      if (item.obm !== "Total geral") allOBMs.add(item.obm);
    })
  );

  // Cria mapas para acesso rápido aos valores
  const dataMapInitial = new Map(
    data.por_organizacao[initialIndex].dados.map((item) => [
      item.obm,
      item.valor,
    ])
  );
  const dataMapFinal = new Map(
    data.por_organizacao[finalIndex].dados.map((item) => [item.obm, item.valor])
  );
  // Mapas para todos os anos para preencher as colunas fixas
  const dataMap2022 = new Map(
    data.por_organizacao
      .find((d) => d.ano === 2022)
      ?.dados.map((item) => [item.obm, item.valor]) || []
  );
  const dataMap2023 = new Map(
    data.por_organizacao
      .find((d) => d.ano === 2023)
      ?.dados.map((item) => [item.obm, item.valor]) || []
  );
  const dataMap2024 = new Map(
    data.por_organizacao
      .find((d) => d.ano === 2024)
      ?.dados.map((item) => [item.obm, item.valor]) || []
  );

  const sortedOBMs = Array.from(allOBMs).sort((a, b) => {
    // Ordena pelo valor do ano final selecionado, decrescente
    return (dataMapFinal.get(b) || 0) - (dataMapFinal.get(a) || 0);
  });

  sortedOBMs.forEach((obm) => {
    const valueInitial = dataMapInitial.get(obm) || 0;
    const valueFinal = dataMapFinal.get(obm) || 0;
    let variation = 0;
    let variationClass = "";

    if (valueInitial > 0) {
      variation = ((valueFinal - valueInitial) / valueInitial) * 100;
      variationClass = variation < 0 ? "growth-negative" : "growth-positive";
    } else if (valueFinal > 0) {
      variation = Infinity; // Ou algum indicador de crescimento a partir de zero
      variationClass = "growth-positive";
    }

    const row = document.createElement("tr");
    row.innerHTML = `
              <td>${obm}</td>
              <td>${formatCurrency(dataMap2022.get(obm) || 0)}</td>
              <td>${formatCurrency(dataMap2023.get(obm) || 0)}</td>
              <td>${formatCurrency(dataMap2024.get(obm) || 0)}</td>
              <td class="${variationClass}">${
      valueInitial > 0
        ? variation.toFixed(2) + "%"
        : valueFinal > 0
        ? "Novo"
        : "-"
    }</td>
          `;
    tableBody.appendChild(row);
  });

  // Adiciona linha de Total Geral
  const totalRow = document.createElement("tr");
  totalRow.style.fontWeight = "bold";
  totalRow.style.backgroundColor = "#f8f8f8";

  const totalValue2022 =
    data.por_organizacao
      .find((d) => d.ano === 2022)
      ?.dados.find((item) => item.obm === "Total geral")?.valor || 0;
  const totalValue2023 =
    data.por_organizacao
      .find((d) => d.ano === 2023)
      ?.dados.find((item) => item.obm === "Total geral")?.valor || 0;
  const totalValue2024 =
    data.por_organizacao
      .find((d) => d.ano === 2024)
      ?.dados.find((item) => item.obm === "Total geral")?.valor || 0;
  const totalValueInitial =
    data.por_organizacao[initialIndex].dados.find(
      (item) => item.obm === "Total geral"
    )?.valor || 0;
  const totalValueFinal =
    data.por_organizacao[finalIndex].dados.find(
      (item) => item.obm === "Total geral"
    )?.valor || 0;

  let totalVariation = 0;
  let totalVariationClass = "";
  if (totalValueInitial > 0) {
    totalVariation =
      ((totalValueFinal - totalValueInitial) / totalValueInitial) * 100;
    totalVariationClass =
      totalVariation < 0 ? "growth-negative" : "growth-positive";
  }

  totalRow.innerHTML = `
          <td>Total Geral</td>
          <td>${formatCurrency(totalValue2022)}</td>
          <td>${formatCurrency(totalValue2023)}</td>
          <td>${formatCurrency(totalValue2024)}</td>
          <td class="${totalVariationClass}">${
    totalValueInitial > 0 ? totalVariation.toFixed(2) + "%" : "-"
  }</td>
      `;
  tableBody.appendChild(totalRow);
}

// --- Funções e Lógica da Aba "Comparar OBMs" (sem alterações) ---
let obmComparisonChartInstance = null;
let comparedOBMs = [];

function populateOBMDrowpdown() {
  /* ... código original ... */
  const dropdown = document.getElementById("obmAddDropdown");
  while (dropdown.options.length > 1) {
    dropdown.remove(1);
  }
  const allOBMs = new Set();
  data.por_organizacao.forEach((anoData) => {
    anoData.dados.forEach((item) => {
      if (item.obm !== "Total geral") {
        allOBMs.add(item.obm);
      }
    });
  });
  const sortedOBMs = Array.from(allOBMs).sort();
  sortedOBMs.forEach((obm) => {
    const option = document.createElement("option");
    option.value = obm;
    option.textContent = obm;
    dropdown.appendChild(option);
  });
}
function displaySelectedOBMs() {
  /* ... código original ... */
  const listDiv = document.getElementById("selectedOBMList");
  listDiv.innerHTML = "";
  comparedOBMs.forEach((obm) => {
    const itemSpan = document.createElement("span");
    itemSpan.className = "selected-obm-item";
    itemSpan.textContent = obm;
    const removeBtn = document.createElement("button");
    removeBtn.className = "remove-obm-btn";
    removeBtn.textContent = "x";
    removeBtn.title = `Remover ${obm}`;
    removeBtn.onclick = () => removeOBMFromComparison(obm);
    itemSpan.appendChild(removeBtn);
    listDiv.appendChild(itemSpan);
  });
}
function removeOBMFromComparison(obmToRemove) {
  /* ... código original ... */
  comparedOBMs = comparedOBMs.filter((obm) => obm !== obmToRemove);
  displaySelectedOBMs();
  createOrUpdateOBMComparisonChart();
}
function prepareOBMComparisonData() {
  /* ... código original ... */
  const anos = [2022, 2023, 2024];
  const datasets = [];
  resetColorIndex();
  comparedOBMs.forEach((obm) => {
    const obmData = anos.map((ano) => {
      const anoData = data.por_organizacao.find((d) => d.ano === ano);
      const obmEntry = anoData?.dados.find((item) => item.obm === obm);
      return obmEntry ? obmEntry.valor : 0;
    });
    const bgColor = getNextColor();
    const borderColor = bgColor.replace("0.7", "1");
    datasets.push({
      label: obm,
      data: obmData,
      backgroundColor: bgColor,
      borderColor: borderColor,
      borderWidth: 1,
      fill: false,
    });
  });
  return { labels: anos, datasets: datasets };
}
function createOrUpdateOBMComparisonChart() {
  /* ... código original ... */
  const messageElement = document.getElementById("obmComparisonMessage");
  const canvas = document.getElementById("obmComparisonChart");
  const ctx = canvas.getContext("2d");
  const selectedListContainer = document.getElementById(
    "selectedOBMListContainer"
  );

  if (!canvas) return; // Previne erro se a aba não estiver no DOM ainda

  if (obmComparisonChartInstance) {
    obmComparisonChartInstance.destroy();
    obmComparisonChartInstance = null;
  }
  if (comparedOBMs.length === 0) {
    if (messageElement) messageElement.style.display = "block";
    if (canvas) canvas.style.display = "none";
    if (selectedListContainer) selectedListContainer.style.display = "none";
    return;
  }

  if (messageElement) messageElement.style.display = "none";
  if (canvas) canvas.style.display = "block";
  if (selectedListContainer) selectedListContainer.style.display = "block";

  const chartData = prepareOBMComparisonData();
  obmComparisonChartInstance = new Chart(ctx, {
    type: "bar",
    data: chartData,
    options: {
      /* ... opções do gráfico original ... */ responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: `Comparativo Anual de Arrecadação por OBM`,
          font: { size: 16 },
        },
        tooltip: {
          mode: "index",
          intersect: false,
          callbacks: {
            label: function (context) {
              return `${context.dataset.label}: ${formatCurrency(context.raw)}`;
            },
          },
        },
        datalabels: { display: false },
        legend: { position: "bottom" },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: "Arrecadação (R$)" },
          ticks: { callback: (value) => formatCurrencyShort(value) },
        },
        x: { title: { display: true, text: "Ano" } },
      },
    },
  });
}

// --- Controle das Abas (sem alterações na função) ---
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
    tabcontent[i].classList.remove("active");
  }
  tablinks = document.getElementsByClassName("tab-button");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }
  const currentTabContent = document.getElementById(tabName);
  if (currentTabContent) {
    currentTabContent.style.display = "block";
    currentTabContent.classList.add("active");
  }
  if (evt && evt.currentTarget) {
    evt.currentTarget.classList.add("active");
  }

  // Redimensiona o gráfico de comparação APENAS se essa aba for aberta
  if (tabName === "compararOBMs") {
    setTimeout(() => {
      // Verifica se a instância existe ANTES de tentar redimensionar
      if (obmComparisonChartInstance) {
        obmComparisonChartInstance.resize();
      } else {
        // Se não existe, tenta criar (caso seja a primeira vez que abre a aba)
        createOrUpdateOBMComparisonChart();
      }
    }, 10); // Pequeno delay para garantir que a aba está visível
  }
}

// --- Funções da Aba "Rankings e Análises" ---
// Variáveis para armazenar as instâncias dos gráficos de rankings
let topOBMsChartInstance = null;
let bottomOBMsChartInstance = null;

// Função para calcular rankings baseados nos filtros
function calculateRankings(rankingType, initialYear, finalYear) {
  // Obter os dados dos anos selecionados
  const initialIndex = data.por_organizacao.findIndex(d => d.ano === initialYear);
  const finalIndex = data.por_organizacao.findIndex(d => d.ano === finalYear);
  
  if (initialIndex === -1 || finalIndex === -1) {
    console.error("Ano inválido selecionado para rankings");
    return { topOBMs: [], bottomOBMs: [] };
  }
  
  // Mapas para acesso rápido aos valores
  const dataMapInitial = new Map(
    data.por_organizacao[initialIndex].dados.map(item => [item.obm, item.valor])
  );
  const dataMapFinal = new Map(
    data.por_organizacao[finalIndex].dados.map(item => [item.obm, item.valor])
  );
  
  // Lista de todas as OBMs (excluindo o Total geral)
    const allOBMs = Array.from(new Set(
    data.por_organizacao.flatMap(year => 
      year.dados
        .filter(item => {
          // Incluir CAT se o toggle estiver ativado
          if (item.obm === "Total geral") return false;
          if (item.obm === "CAT" && !includeCAT) return false;
          return true;
        })
        .map(item => item.obm)
    )
  ));

  
  // Calcular valor para cada OBM baseado no tipo de ranking
  const rankingData = allOBMs.map(obm => {
    const initialValue = dataMapInitial.get(obm) || 0;
    const finalValue = dataMapFinal.get(obm) || 0;
    let rankingValue = 0;
    
    switch (rankingType) {
      case "arrecadacao":
        rankingValue = finalValue;
        break;
      case "crescimentoNominal":
        rankingValue = finalValue - initialValue;
        break;
      case "crescimentoPercentual":
        rankingValue = initialValue > 0 
          ? ((finalValue - initialValue) / initialValue) * 100 
          : (finalValue > 0 ? 100 : 0);
        break;
    }
    
    return { 
      obm,
      valor: rankingValue,
      initialValue,
      finalValue
    };
  });
  
  // Ordenar dados em ordem decrescente
  const sortedData = [...rankingData].sort((a, b) => b.valor - a.valor);
  
  // Obter top 10 e bottom 10
  const topOBMs = sortedData.slice(0, 10);
  const bottomOBMs = sortedData.slice(-10).reverse(); // Revertemos para exibir do menor para o maior
  
  return { topOBMs, bottomOBMs };
}

// Função para preparar dados para os gráficos
function prepareRankingsChartData(rankingType, rankingsData) {
  const { topOBMs, bottomOBMs } = rankingsData;
  
  // Preparar dados para o gráfico Top 10
  const topLabels = topOBMs.map(item => item.obm);
  const topValues = topOBMs.map(item => item.valor);
  
  // Definir cores baseadas no tipo de ranking e nos valores
  const getColor = (value, type) => {
    if (type === "crescimentoPercentual" || type === "crescimentoNominal") {
      return value >= 0 ? chartColors.green : chartColors.red;
    } else {
      // Para arrecadação total, usar azul para top e vermelho para bottom
      return type === "top" ? chartColors.blue : chartColors.red;
    }
  };
  
  const topColors = topOBMs.map(item => getColor(item.valor, 
    rankingType === "arrecadacao" ? "top" : rankingType));
  
  // Preparar dados para o gráfico Bottom 10
  const bottomLabels = bottomOBMs.map(item => item.obm);
  const bottomValues = bottomOBMs.map(item => item.valor);
  const bottomColors = bottomOBMs.map(item => getColor(item.valor, 
    rankingType === "arrecadacao" ? "bottom" : rankingType));
  
  // Definir formatação baseada no tipo de ranking
  let valueFormatter = (val) => formatCurrency(val);
  let tooltipFormatter = (ctx) => formatCurrency(ctx.raw);
  
  if (rankingType === "crescimentoPercentual") {
    valueFormatter = (val) => val.toFixed(2) + "%";
    tooltipFormatter = (ctx) => ctx.raw.toFixed(2) + "%";
  } else if (rankingType === "crescimentoNominal") {
    valueFormatter = (val) => formatCurrency(val);
    tooltipFormatter = (ctx) => formatCurrency(ctx.raw);
  }
  
  // Criar informações adicionais para o tooltip em crescimentos
  const topTooltipData = topOBMs.map(item => {
    return {
      initialValue: item.initialValue,
      finalValue: item.finalValue
    };
  });
  
  const bottomTooltipData = bottomOBMs.map(item => {
    return {
      initialValue: item.initialValue,
      finalValue: item.finalValue
    };
  });
  
  return {
    top: {
      labels: topLabels,
      values: topValues,
      colors: topColors,
      tooltipData: topTooltipData
    },
    bottom: {
      labels: bottomLabels,
      values: bottomValues,
      colors: bottomColors,
      tooltipData: bottomTooltipData
    },
    formatters: {
      value: valueFormatter,
      tooltip: tooltipFormatter
    },
    rankingType: rankingType
  };
}

// Função para criar ou atualizar os gráficos de rankings
function createOrUpdateRankingsCharts(chartData, rankingType) {
  // Título para o gráfico com base no tipo de ranking
  let chartTitle = "Arrecadação no Ano Final";
  if (rankingType === "crescimentoPercentual") {
    chartTitle = "Crescimento Percentual";
  } else if (rankingType === "crescimentoNominal") {
    chartTitle = "Crescimento Nominal";
  }
  
  // Configurações comuns para ambos os gráficos
  const commonOptions = {
    indexAxis: 'y', // Para barras horizontais
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      duration: 500 // Reduzir a duração da animação para evitar problemas
    },
    plugins: {
      title: {
        display: true,
        text: chartTitle,
        font: { size: 14, weight: 'bold' },
        padding: { top: 10, bottom: 10 }
      },
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          title: function(context) {
            return context[0].label;
          },
          label: function(context) {
            const dataPoint = context.dataIndex;
            const datasetIndex = context.datasetIndex;
            const tooltipData = context.chart.data.datasets[datasetIndex].tooltipData[dataPoint];
            
            // Informações específicas baseadas no tipo de ranking
            let mainLabel = chartData.formatters.tooltip(context);
            
            if (rankingType === "crescimentoPercentual" || rankingType === "crescimentoNominal") {
              const initialValueLabel = "Valor Inicial: " + formatCurrency(tooltipData.initialValue);
              const finalValueLabel = "Valor Final: " + formatCurrency(tooltipData.finalValue);
              return [mainLabel, initialValueLabel, finalValueLabel];
            }
            
            return mainLabel;
          }
        }
      },
      datalabels: {
        color: function(context) {
          // Cores diferentes para valores positivos e negativos
          const value = context.dataset.data[context.dataIndex];
          if ((rankingType === "crescimentoPercentual" || rankingType === "crescimentoNominal") && value < 0) {
            return '#fff'; // Texto branco para valores negativos
          }
          return '#000'; // Texto preto para valores positivos
        },
        anchor: 'end',
        align: 'end',
        formatter: function(value) {
          return chartData.formatters.value(value);
        },
        font: {
          weight: 'bold'
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        ticks: {
          callback: function(value) {
            if (rankingType === "crescimentoPercentual") {
              return value.toFixed(0) + "%";
            } else {
              return formatCurrencyShort(value);
            }
          }
        }
      },
      y: {
        ticks: {
          callback: function(value, index) {
            // Abreviar nomes muito longos para caberem no gráfico
            const label = this.getLabelForValue(value);
            return label.length > 25 ? label.substring(0, 22) + '...' : label;
          }
        }
      }
    }
  };
  
  try {
    // Atualizar/criar gráfico de Top 10
    const topCanvas = document.getElementById('topOBMsChart');
    if (!topCanvas) {
      console.warn('Elemento topOBMsChart não encontrado');
      return;
    }
    
    const topCtx = topCanvas.getContext('2d');
    
    if (topOBMsChartInstance) {
      topOBMsChartInstance.destroy();
      topOBMsChartInstance = null;
    }
    
    // Limpar o canvas antes de desenhar
    topCtx.clearRect(0, 0, topCanvas.width, topCanvas.height);
    
    topOBMsChartInstance = new Chart(topCtx, {
      type: 'bar',
      data: {
        labels: chartData.top.labels,
        datasets: [{
          data: chartData.top.values,
          backgroundColor: chartData.top.colors,
          borderColor: chartData.top.colors.map(color => color.replace('0.7', '1')),
          borderWidth: 1,
          tooltipData: chartData.top.tooltipData,
          maxBarThickness: 30 // Limitar a espessura das barras
        }]
      },
      options: {
        ...commonOptions,
        plugins: {
          ...commonOptions.plugins,
          title: {
            ...commonOptions.plugins.title,
            text: "Top 10 OBMs - " + chartTitle
          }
        }
      }
    });
    
    // Atualizar/criar gráfico de Bottom 10
    const bottomCanvas = document.getElementById('bottomOBMsChart');
    if (!bottomCanvas) {
      console.warn('Elemento bottomOBMsChart não encontrado');
      return;
    }
    
    const bottomCtx = bottomCanvas.getContext('2d');
    
    if (bottomOBMsChartInstance) {
      bottomOBMsChartInstance.destroy();
      bottomOBMsChartInstance = null;
    }
    
    // Limpar o canvas antes de desenhar
    bottomCtx.clearRect(0, 0, bottomCanvas.width, bottomCanvas.height);
    
    bottomOBMsChartInstance = new Chart(bottomCtx, {
      type: 'bar',
      data: {
        labels: chartData.bottom.labels,
        datasets: [{
          data: chartData.bottom.values,
          backgroundColor: chartData.bottom.colors,
          borderColor: chartData.bottom.colors.map(color => color.replace('0.7', '1')),
          borderWidth: 1,
          tooltipData: chartData.bottom.tooltipData,
          maxBarThickness: 30 // Limitar a espessura das barras
        }]
      },
      options: {
        ...commonOptions,
        plugins: {
          ...commonOptions.plugins,
          title: {
            ...commonOptions.plugins.title,
            text: "Bottom 10 OBMs - " + chartTitle
          }
        }
      }
    });
  } catch (error) {
    console.error("Erro ao criar gráficos de rankings:", error);
  }
}

// Função para atualizar os rankings
function updateRankings() {
  const rankingType = document.getElementById('rankingType').value;
  const initialYear = parseInt(document.getElementById('rankingYearInitial').value);
  const finalYear = parseInt(document.getElementById('rankingYearFinal').value);
  
  // Verificar se estamos na aba de Rankings e Análises
  const isTabActive = document.getElementById('rankingsAnalises').classList.contains('active');
  if (!isTabActive) return; // Não atualizar se a aba não estiver ativa
  
  // Limpar qualquer instância de gráfico existente
  if (topOBMsChartInstance) {
    topOBMsChartInstance.destroy();
    topOBMsChartInstance = null;
  }
  
  if (bottomOBMsChartInstance) {
    bottomOBMsChartInstance.destroy();
    bottomOBMsChartInstance = null;
  }
  
  // Aguardar um momento para o DOM se ajustar
  setTimeout(() => {
    // Calcular os rankings
    const rankings = calculateRankings(rankingType, initialYear, finalYear);
    
    // Preparar dados para os gráficos
    const chartData = prepareRankingsChartData(rankingType, rankings);
    
    // Criar ou atualizar os gráficos
    createOrUpdateRankingsCharts(chartData, rankingType);
  }, 50);
}

// --- Inicialização ---
document.addEventListener("DOMContentLoaded", function () {
  // Inicializa gráficos da aba "Visão Geral"
  createYearlyServiceCharts();
  createPieCharts();
  createServiceLocationPieCharts();
  createLocationChart();
  createYearlyComparisonChart();

// Adicione este código junto com os outros event listeners
const catToggle = document.getElementById('includeCATToggle');
if (catToggle) {
  catToggle.addEventListener('change', function() {
    includeCAT = this.checked;
    
    // Atualizar todos os gráficos relevantes
    if (document.getElementById('rankingsAnalises').classList.contains('active')) {
      // Atualizar Rankings
      updateRankings();
      
      // Atualizar Contribuição
      const contributionYear = parseInt(document.getElementById('contributionYear').value);
      createOrUpdateContributionChart(contributionYear);
      
      // Atualizar Performance Relativa
      const performanceYear = parseInt(document.getElementById('performanceYear').value);
      const performanceView = document.getElementById('performanceView').value;
      createOrUpdatePerformanceChart(performanceYear, performanceView);
      
      // Atualizar Quadrantes (se existir)
      if (typeof createOrUpdateQuadrantesChart === 'function') {
        const anoX = document.getElementById('quadranteAnoX').value;
        const periodoY = document.getElementById('quadrantePeriodoY').value;
        createOrUpdateQuadrantesChart(anoX, periodoY);
      }
    }
  });
}
  // Adicione este código logo após o event listener do catToggle
const jataiToggle = document.getElementById('includeJataiToggle');
if (jataiToggle) {
  jataiToggle.addEventListener('change', function() {
    includeJatai = this.checked;
    
    // Atualizar todos os gráficos relevantes
    if (document.getElementById('rankingsAnalises').classList.contains('active')) {
      // Atualizar Rankings
      updateRankings();
      
      // Atualizar Contribuição
      const contributionYear = parseInt(document.getElementById('contributionYear').value);
      createOrUpdateContributionChart(contributionYear);
      
      // Atualizar Performance Relativa
      const performanceYear = parseInt(document.getElementById('performanceYear').value);
      const performanceView = document.getElementById('performanceView').value;
      createOrUpdatePerformanceChart(performanceYear, performanceView);
      
      // Atualizar Quadrantes (se existir)
      if (typeof createOrUpdateQuadrantesChart === 'function') {
        const anoX = document.getElementById('quadranteAnoX').value;
        const periodoY = document.getElementById('quadrantePeriodoY').value;
        createOrUpdateQuadrantesChart(anoX, periodoY);
      }
    }
  });
}
  // Configura e popula tabela da aba "Detalhamento OBM"
  const yearInitialSelect = document.getElementById("yearInitial");
  const yearFinalSelect = document.getElementById("yearFinal");
  // Popula a tabela inicialmente (mesmo que a aba não esteja visível)
  populateTable(
    parseInt(yearInitialSelect.value),
    parseInt(yearFinalSelect.value)
  );

  // Listeners para atualizar tabela da "Detalhamento OBM"
  yearInitialSelect.addEventListener("change", function () {
    const initialYear = parseInt(this.value);
    const finalYear = parseInt(yearFinalSelect.value);
    // Garante que ano final seja sempre maior ou igual ao inicial
    if (initialYear >= finalYear) {
      yearFinalSelect.value = initialYear === 2022 ? "2023" : "2024";
      // Ajusta 2023 se 2024 for selecionado como inicial (só há 2024 depois)
      if (initialYear === 2023 && finalYear <= 2023)
        yearFinalSelect.value = "2024";
    }
    populateTable(initialYear, parseInt(yearFinalSelect.value));
  });
  yearFinalSelect.addEventListener("change", function () {
    const initialYear = parseInt(yearInitialSelect.value);
    const finalYear = parseInt(this.value);
    // Garante que ano inicial seja sempre menor ou igual ao final
    if (finalYear <= initialYear) {
      yearInitialSelect.value = finalYear === 2024 ? "2023" : "2022";
      // Ajusta 2023 se 2022 for selecionado como final (só há 2022 antes)
      if (finalYear === 2023 && initialYear >= 2023)
        yearInitialSelect.value = "2022";
    }
    populateTable(parseInt(yearInitialSelect.value), finalYear);
  });

  // --- Inicialização da Aba "Comparar OBMs" ---
  populateOBMDrowpdown();
  // Não chama displaySelectedOBMs() ou createOrUpdateOBMComparisonChart() aqui
  // Eles serão chamados quando a aba for aberta pela primeira vez ou quando uma OBM for adicionada/removida

  // Adiciona listener ao dropdown para adicionar OBMs
  document
    .getElementById("obmAddDropdown")
    .addEventListener("change", function (event) {
      const selectedOBM = event.target.value;
      if (selectedOBM && !comparedOBMs.includes(selectedOBM)) {
        comparedOBMs.push(selectedOBM);
        displaySelectedOBMs();
        createOrUpdateOBMComparisonChart();
      }
      event.target.selectedIndex = 0; // Reseta dropdown
    });

  // Garante que o estado inicial da aba de comparação esteja correto (escondido)
  const initialCompMsg = document.getElementById("obmComparisonMessage");
  const initialCompCanvas = document.getElementById("obmComparisonChart");
  const initialCompList = document.getElementById("selectedOBMListContainer");
  if (initialCompMsg) initialCompMsg.style.display = "block";
  if (initialCompCanvas) initialCompCanvas.style.display = "none";
  if (initialCompList) initialCompList.style.display = "none";
  
  // --- Funções da Seção "Contribuição para o Total" ---
let contributionChartInstance = null;

// Função para calcular a contribuição de cada OBM para o total do ano
function calculateContributions(year) {
  // Encontrar os dados do ano selecionado
  const yearData = data.por_organizacao.find(d => d.ano === year);
  if (!yearData) {
    console.error("Ano inválido para cálculo de contribuições:", year);
    return { top10: [], others: { count: 0, valor: 0 }, total: 0 };
  }
  
  // Filtrar e mapear os dados (excluindo o total geral e CAT que é duplicado)
  const filteredData = yearData.dados
    .filter(item => {
      // Incluir CAT se o toggle estiver ativado
      if (item.obm === "Total geral") return false;
      if (item.obm === "CAT" && !includeCAT) return false;

      return true;
    })
    .map(item => {
      return {
        obm: item.obm,
        valor: item.valor
      };
    });
  
  // Ordenar por valor decrescente
  filteredData.sort((a, b) => b.valor - a.valor);
  
  // Obter o valor total
  const totalValue = yearData.dados.find(item => item.obm === "Total geral")?.valor || 
    filteredData.reduce((sum, item) => sum + item.valor, 0);
  
  // Calcular a contribuição percentual de cada OBM
  filteredData.forEach(item => {
    item.percentual = (item.valor / totalValue) * 100;
  });
  
  // Separar top 10 e outros
  const top10 = filteredData.slice(0, 10);
  
  // Agrupar os demais em "Outros"
  const others = filteredData.slice(10).reduce(
    (acc, item) => {
      acc.count++;
      acc.valor += item.valor;
      return acc;
    },
    { count: 0, valor: 0 }
  );
  
  // Calcular percentual para "Outros"
  others.percentual = (others.valor / totalValue) * 100;
  
  return { top10, others, total: totalValue };
}

// Função para preparar dados para o gráfico de contribuição
function prepareContributionChartData(contributionData) {
  const { top10, others, total } = contributionData;
  
  // Preparar labels, valores e cores
  const labels = top10.map(item => item.obm);
  if (others.count > 0) {
    labels.push(`Outros (${others.count} OBMs)`);
  }
  
  const values = top10.map(item => item.valor);
  if (others.count > 0) {
    values.push(others.valor);
  }
  
  // Gerar cores para o gráfico (usando cores existentes)
  resetColorIndex(); // Resetar o índice de cores
  const colors = Array(top10.length).fill().map(() => getNextColor());
  
  // Adicionar cor específica para "Outros" (cinza)
  if (others.count > 0) {
    colors.push(chartColors.grey);
  }
  
  // Dados adicionais para tooltip
  const percentages = top10.map(item => item.percentual);
  if (others.count > 0) {
    percentages.push(others.percentual);
  }
  
  return {
    labels,
    values,
    colors,
    percentages,
    total
  };
}

// Função para criar ou atualizar o gráfico de contribuição
function createOrUpdateContributionChart(year) {
  // Verificar se estamos na aba correta
  const isTabActive = document.getElementById('rankingsAnalises').classList.contains('active');
  if (!isTabActive) return;
  
  // Calcular os dados de contribuição
  const contributionData = calculateContributions(year);
  
  // Preparar os dados para o gráfico
  const chartData = prepareContributionChartData(contributionData);
  
  // Referência ao canvas
  const canvas = document.getElementById('contributionChart');
  if (!canvas) {
    console.warn('Elemento contributionChart não encontrado');
    return;
  }
  
  const ctx = canvas.getContext('2d');
  
  // Destruir instância anterior
  if (contributionChartInstance) {
    contributionChartInstance.destroy();
    contributionChartInstance = null;
  }
  
  // Limpar o canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Criar nova instância
  contributionChartInstance = new Chart(ctx, {
    type: 'doughnut', // Usar doughnut para ter buraco no meio
    data: {
      labels: chartData.labels,
      datasets: [{
        data: chartData.values,
        backgroundColor: chartData.colors,
        borderColor: chartData.colors.map(color => color.replace('0.7', '1')),
        borderWidth: 1,
        percentages: chartData.percentages
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '50%', // Tamanho do "buraco" no meio do donut
      plugins: {
        title: {
          display: true,
          text: `Contribuição para o Total - ${year}`,
          font: { size: 16, weight: 'bold' },
          padding: { top: 10, bottom: 15 }
        },
        legend: {
          position: 'right',
          labels: {
            boxWidth: 12,
            padding: 15
          }
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const value = context.raw;
              const percentage = context.dataset.percentages[context.dataIndex];
              return [
                `${context.label}: ${formatCurrency(value)}`,
                `${percentage.toFixed(2)}% do total`
              ];
            }
          }
        },
        datalabels: {
          color: '#fff',
          font: { weight: 'bold', size: 11 },
          formatter: function(value, context) {
            const percentage = context.dataset.percentages[context.dataIndex];
            return percentage > 3 ? percentage.toFixed(1) + '%' : ''; // Só mostra label se for > 3% para evitar sobreposição
          }
        }
      }
    }
  });
  
  // Atualizar o resumo textual
  updateContributionSummary(contributionData);
}

// Função para atualizar o resumo textual
function updateContributionSummary(contributionData) {
  const { top10, others, total } = contributionData;
  
  // Calcular o total das top 10
  const top10Total = top10.reduce((sum, item) => sum + item.valor, 0);
  const top10Percentage = (top10Total / total) * 100;
  
  const summaryElement = document.getElementById('contributionSummary');
  if (!summaryElement) return;
  
  summaryElement.innerHTML = `
    <p>As <strong>10 OBMs</strong> com maior arrecadação contribuem com <strong>${formatCurrency(top10Total)}</strong> 
    ou <strong>${top10Percentage.toFixed(2)}%</strong> do total.</p>
    ${others.count > 0 ? 
      `<p>As demais <strong>${others.count} OBMs</strong> contribuem com <strong>${formatCurrency(others.valor)}</strong> 
      ou <strong>${others.percentual.toFixed(2)}%</strong> do total.</p>` : 
      ''}
    <p>Total geral: <strong>${formatCurrency(total)}</strong></p>
  `;
}

// --- Funções da Seção "Performance Relativa à Média" ---
let performanceChartInstance = null;

// Função para calcular a performance relativa à média
function calculatePerformanceData(year, viewMode) {
  // Encontrar os dados do ano selecionado
  const yearData = data.por_organizacao.find(d => d.ano === year);
  if (!yearData) {
    console.error("Ano inválido para cálculo de performance:", year);
    return { obmData: [], media: 0 };
  }
  
  // Filtrar e mapear os dados (excluindo o total geral e CAT)
    const filteredData = yearData.dados
    .filter(item => {
      // Incluir CAT se o toggle estiver ativado
      if (item.obm === "Total geral") return false;
      if (item.obm === "CAT" && !includeCAT) return false;

      return true;
    })
    .map(item => {
      return {
        obm: item.obm,
        valor: item.valor
      };
    });

  
  // Calcular a média de arrecadação por OBM
  const totalArrecadacao = filteredData.reduce((sum, item) => sum + item.valor, 0);
  const mediaArrecadacao = totalArrecadacao / filteredData.length;
  
  // Calcular o desvio de cada OBM em relação à média
  filteredData.forEach(item => {
    item.desvio = item.valor - mediaArrecadacao;
    item.desvioPercentual = (item.desvio / mediaArrecadacao) * 100;
  });
  
  // Ordenar por desvio (do maior positivo ao maior negativo)
  filteredData.sort((a, b) => b.desvio - a.desvio);
  
  // Limitar o número de OBMs conforme o modo de visualização
  let obmData = filteredData;
  if (viewMode === 'top20') {
    // Pegar as 10 de maior valor positivo e as 10 de menor valor negativo
    const positivasTop = filteredData.filter(item => item.desvio > 0).slice(0, 10);
    const negativasBottom = filteredData.filter(item => item.desvio < 0).slice(-10).reverse();
    obmData = [...positivasTop, ...negativasBottom];
  }
  
  return { obmData, media: mediaArrecadacao };
}

// Função para criar ou atualizar o gráfico de performance
function createOrUpdatePerformanceChart(year, viewMode) {
  // Verificar se estamos na aba correta
  const isTabActive = document.getElementById('rankingsAnalises').classList.contains('active');
  if (!isTabActive) return;
  
  // Calcular os dados de performance
  const { obmData, media } = calculatePerformanceData(year, viewMode);
  
  // Preparar dados para o gráfico
  const labels = obmData.map(item => item.obm);
  const values = obmData.map(item => item.desvio);
  
  // Cores baseadas no desvio (positivo: verde, negativo: vermelho)
  const colors = values.map(value => value >= 0 ? chartColors.green : chartColors.red);
  
  // Referência ao canvas
  const canvas = document.getElementById('performanceChart');
  if (!canvas) {
    console.warn('Elemento performanceChart não encontrado');
    return;
  }
  
  const ctx = canvas.getContext('2d');
  
  // Destruir instância anterior
  if (performanceChartInstance) {
    performanceChartInstance.destroy();
    performanceChartInstance = null;
  }
  
  // Limpar o canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Criar nova instância do gráfico
  performanceChartInstance = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        data: values,
        backgroundColor: colors,
        borderColor: colors.map(color => color.replace('0.7', '1')),
        borderWidth: 1,
        // Dados adicionais para tooltip
        originalValues: obmData.map(item => item.valor),
        desviosPercentuais: obmData.map(item => item.desvioPercentual)
      }]
    },
    options: {
      indexAxis: 'y', // Barras horizontais
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: `Performance Relativa à Média - ${year}`,
          font: { size: 16, weight: 'bold' },
          padding: { top: 10, bottom: 15 }
        },
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            title: function(context) {
              return context[0].label;
            },
            label: function(context) {
              const dataIndex = context.dataIndex;
              const desvio = context.raw;
              const valor = context.dataset.originalValues[dataIndex];
              const desvioPercentual = context.dataset.desviosPercentuais[dataIndex];
              
              return [
                `Arrecadação: ${formatCurrency(valor)}`,
                `Desvio da média: ${formatCurrency(desvio)}`,
                `Desvio percentual: ${desvioPercentual.toFixed(2)}%`
              ];
            }
          }
        },
        datalabels: {
          align: 'end',
          anchor: 'end',
          color: '#000',
          formatter: function(value) {
            return formatCurrencyShort(value);
          },
          font: {
            weight: 'bold'
          }
        }
      },
      scales: {
        x: {
          grid: {
            color: function(context) {
              if (context.tick.value === 0) {
                return 'rgba(0, 0, 0, 0.5)'; // Linha mais escura para o valor zero
              }
              return 'rgba(0, 0, 0, 0.1)';
            },
            lineWidth: function(context) {
              if (context.tick.value === 0) {
                return 2; // Linha mais grossa para o valor zero
              }
              return 1;
            }
          },
          ticks: {
            callback: function(value) {
              return formatCurrencyShort(value);
            }
          },
          title: {
            display: true,
            text: 'Desvio em relação à média (R$)',
            font: {
              weight: 'bold'
            }
          }
        },
        y: {
          title: {
            display: true,
            text: 'OBMs',
            font: {
              weight: 'bold'
            }
          }
        }
      }
    }
  });
  
  // Atualizar o resumo textual
  updatePerformanceSummary(obmData, media, year);
}

// Função para atualizar o resumo textual
function updatePerformanceSummary(obmData, media, year) {
  const summaryElement = document.getElementById('performanceSummary');
  if (!summaryElement) return;
  
  // Calcular estatísticas
  const acimaDaMedia = obmData.filter(item => item.valor > media).length;
  const abaixoDaMedia = obmData.filter(item => item.valor < media).length;
  const totalOBMs = obmData.length;
  
  // Obter o maior desvio positivo e negativo
  const maiorDesvioPositivo = obmData.reduce((max, item) => 
    item.desvio > max.desvio ? item : max, { desvio: 0 });
  
  const maiorDesvioNegativo = obmData.reduce((min, item) => 
    item.desvio < min.desvio ? item : min, { desvio: 0 });
  
  summaryElement.innerHTML = `
    <p>No ano de <strong>${year}</strong>, a média de arrecadação por OBM foi de <strong>${formatCurrency(media)}</strong>.</p>
    <p><strong>${acimaDaMedia}</strong> OBMs ficaram acima da média, enquanto <strong>${abaixoDaMedia}</strong> ficaram abaixo.</p>
    <p>A OBM com maior desvio positivo foi <strong>${maiorDesvioPositivo.obm}</strong> com <strong>${formatCurrency(maiorDesvioPositivo.desvio)}</strong> acima da média.</p>
    <p>A OBM com maior desvio negativo foi <strong>${maiorDesvioNegativo.obm}</strong> com <strong>${formatCurrency(Math.abs(maiorDesvioNegativo.desvio))}</strong> abaixo da média.</p>
  `;
}

// --- Inicialização da Aba "Rankings e Análises" ---
  // Inicializar o gráfico de rankings quando a aba for aberta pela primeira vez
  const rankingYearInitialSelect = document.getElementById("rankingYearInitial");
  const rankingYearFinalSelect = document.getElementById("rankingYearFinal");
  const rankingTypeSelect = document.getElementById("rankingType");
  const updateRankingsBtn = document.getElementById("updateRankingsBtn");
  
  // Garantir lógica de anos para os filtros da aba de Rankings
  if (rankingYearInitialSelect && rankingYearFinalSelect) {
    rankingYearInitialSelect.addEventListener("change", function() {
      const initialYear = parseInt(this.value);
      const finalYear = parseInt(rankingYearFinalSelect.value);
      
      if (initialYear >= finalYear) {
        rankingYearFinalSelect.value = initialYear === 2022 ? "2023" : "2024";
      }
      
      // Atualizar rankings automaticamente
      updateRankings();
    });
    
    rankingYearFinalSelect.addEventListener("change", function() {
      const initialYear = parseInt(rankingYearInitialSelect.value);
      const finalYear = parseInt(this.value);
      
      if (finalYear <= initialYear) {
        rankingYearInitialSelect.value = finalYear === 2024 ? "2023" : "2022";
      }
      
      // Atualizar rankings automaticamente
      updateRankings();
    });
  }
  
  // Adicionar evento para quando a aba de Rankings for aberta
  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
      if (this.textContent.trim() === 'Rankings e Análises') {
        // Inicializar os rankings quando a aba for aberta
        setTimeout(() => {
          // Destruir as instâncias anteriores antes de recriar
          if (topOBMsChartInstance) {
            topOBMsChartInstance.destroy();
            topOBMsChartInstance = null;
          }
          if (bottomOBMsChartInstance) {
            bottomOBMsChartInstance.destroy();
            bottomOBMsChartInstance = null;
          }
          updateRankings();
          
          // Inicializar o gráfico de contribuição com o ano selecionado
          const contributionYear = parseInt(document.getElementById('contributionYear').value);
          createOrUpdateContributionChart(contributionYear);
          
          // Inicializar o gráfico de performance relativa
          const performanceYear = parseInt(document.getElementById('performanceYear').value);
          const performanceView = document.getElementById('performanceView').value;
          createOrUpdatePerformanceChart(performanceYear, performanceView);
        }, 200);
      }
    });
  });
  
  // Adicionar eventos para o controle do tipo de ranking
  if (rankingTypeSelect) {
    rankingTypeSelect.addEventListener('change', updateRankings);
  }
  
  // Os eventos para os selects de ano já foram configurados acima
  
  // Configuração e evento para o dropdown de ano da seção de contribuição
  const contributionYearSelect = document.getElementById('contributionYear');
  if (contributionYearSelect) {
    contributionYearSelect.addEventListener('change', function() {
      const selectedYear = parseInt(this.value);
      createOrUpdateContributionChart(selectedYear);
    });
  }
  
  // Configuração e eventos para os controles da seção de performance relativa
  const performanceYearSelect = document.getElementById('performanceYear');
  const performanceViewSelect = document.getElementById('performanceView');
  
  if (performanceYearSelect && performanceViewSelect) {
    // Evento para o dropdown de ano
    performanceYearSelect.addEventListener('change', function() {
      const selectedYear = parseInt(this.value);
      const viewMode = performanceViewSelect.value;
      createOrUpdatePerformanceChart(selectedYear, viewMode);
    });
    
    // Evento para o dropdown de visualização
    performanceViewSelect.addEventListener('change', function() {
      const selectedYear = parseInt(performanceYearSelect.value);
      const viewMode = this.value;
      createOrUpdatePerformanceChart(selectedYear, viewMode);
    });
  }

  // Define a aba inicial como ativa (Visão Geral) - Opcional, já feito com 'active' no HTML
  // openTab(null, 'visaoGeral');
  
  // --- Funções da Seção "Análise de Quadrantes" ---
  let quadrantesChartInstance = null;

  // Função para calcular os dados para análise de quadrantes
  function calculateQuadrantesData(anoX, periodoY) {
    // Validar período
    const anos = periodoY.split('-').map(ano => parseInt(ano));
    if (anos.length !== 2) {
      console.error("Formato de período inválido:", periodoY);
      return { obmData: [], mediaX: 0, mediaY: 0 };
    }
    const anoInicial = anos[0];
    const anoFinal = anos[1];
    
    // Obter índices dos anos
    const anoXIndex = data.por_organizacao.findIndex(y => y.ano === parseInt(anoX));
    const anoInicialIndex = data.por_organizacao.findIndex(y => y.ano === anoInicial);
    const anoFinalIndex = data.por_organizacao.findIndex(y => y.ano === anoFinal);
    
    if (anoXIndex === -1 || anoInicialIndex === -1 || anoFinalIndex === -1) {
      console.error("Ano não encontrado nos dados");
      return { obmData: [], mediaX: 0, mediaY: 0 };
    }
    
    // Criar mapas para acesso rápido aos valores
    const dataMapX = new Map(data.por_organizacao[anoXIndex].dados.map(item => [item.obm, item.valor]));
    const dataMapInicial = new Map(data.por_organizacao[anoInicialIndex].dados.map(item => [item.obm, item.valor]));
    const dataMapFinal = new Map(data.por_organizacao[anoFinalIndex].dados.map(item => [item.obm, item.valor]));
    
    // Obter a lista de OBMs (excluindo Total geral e CAT)
    const obms = Array.from(new Set(
    data.por_organizacao.flatMap(year => 
      year.dados
        .filter(item => {
          // Incluir CAT se o toggle estiver ativado
          if (item.obm === "Total geral") return false;
          if (item.obm === "CAT" && !includeCAT) return false;

          return true;
        })
        .map(item => item.obm)
    )
  ));

    
    // Calcular os valores para cada OBM
    const obmData = obms.map(obm => {
      const valorX = dataMapX.get(obm) || 0; // Arrecadação absoluta
      
      const valorInicial = dataMapInicial.get(obm) || 0;
      const valorFinal = dataMapFinal.get(obm) || 0;
      
      // Calcular o crescimento percentual
      let crescimentoY = 0;
      if (valorInicial > 0) {
        crescimentoY = ((valorFinal - valorInicial) / valorInicial) * 100;
      } else if (valorFinal > 0) {
        crescimentoY = 100; // Crescimento a partir de zero (infinito, mas limitamos a 100%)
      }
      
      return {
        obm,
        valorX,
        valorY: crescimentoY,
        valorInicial,
        valorFinal
      };
    });
    
    // Filtrar apenas OBMs com dados relevantes (que tenham valor no ano X)
    const filteredData = obmData.filter(item => item.valorX > 0);
    
    // Calcular médias para as linhas divisórias
    const mediaX = filteredData.reduce((sum, item) => sum + item.valorX, 0) / filteredData.length;
    const mediaY = filteredData.reduce((sum, item) => sum + item.valorY, 0) / filteredData.length;
    
    return { obmData: filteredData, mediaX, mediaY };
  }

  // Função para criar ou atualizar o gráfico de quadrantes
  function createOrUpdateQuadrantesChart(anoX, periodoY) {
    // Verificar se estamos na aba correta
    const isTabActive = document.getElementById('rankingsAnalises').classList.contains('active');
    if (!isTabActive) return;
    
    // Calcular os dados para o gráfico
    const { obmData, mediaX, mediaY } = calculateQuadrantesData(anoX, periodoY);
    
    if (obmData.length === 0) {
      console.error("Nenhum dado disponível para análise de quadrantes");
      return;
    }
    
    // Função para obter apenas o nome principal da OBM sem identificadores
    const getShortOBMName = (obmName) => {
      // Verifica se o nome contém um hífen que separa o código da localidade
      if(obmName.includes(' - ')) {
        // Retorna apenas a parte da localidade (após o hífen)
        return obmName.split(' - ')[1];
      }
      // Se não tiver hífen, retorna o nome como está
      return obmName;
    };
    
    // Preparar dados para o gráfico
    const datasets = [{
      label: 'OBMs',
      data: obmData.map(item => ({
        x: item.valorX,
        y: item.valorY,
        obm: item.obm,
        obmShort: getShortOBMName(item.obm),
        valorInicial: item.valorInicial,
        valorFinal: item.valorFinal
      })),
      backgroundColor: obmData.map(item => {
        // Definir a cor com base no quadrante
        if (item.valorX >= mediaX && item.valorY >= mediaY) {
          return 'rgba(75, 192, 192, 0.7)'; // Q1: Estrelas (Verde)
        } else if (item.valorX < mediaX && item.valorY >= mediaY) {
          return 'rgba(54, 162, 235, 0.7)'; // Q2: Emergentes (Azul)
        } else if (item.valorX < mediaX && item.valorY < mediaY) {
          return 'rgba(255, 99, 132, 0.7)'; // Q3: Atenção (Vermelho)
        } else {
          return 'rgba(255, 159, 64, 0.7)'; // Q4: Estabelecidas (Laranja)
        }
      }),
      borderColor: 'rgba(0, 0, 0, 0.1)',
      borderWidth: 1,
      pointRadius: 8,
      pointHoverRadius: 10
    }];
    
    // Referência ao canvas
    const canvas = document.getElementById('quadrantesChart');
    if (!canvas) {
      console.warn('Elemento quadrantesChart não encontrado');
      return;
    }
    
    const ctx = canvas.getContext('2d');
    
    // Destruir instância anterior
    if (quadrantesChartInstance) {
      quadrantesChartInstance.destroy();
      quadrantesChartInstance = null;
    }
    
    // Limpar o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Criar nova instância do gráfico
    quadrantesChartInstance = new Chart(ctx, {
      type: 'scatter',
      data: { datasets },
      options: {
        // Armazenar dados dos quadrantes para uso posterior (ex: após resetar zoom)
        _quadrantData: {
          mediaX: mediaX,
          mediaY: mediaY
        },
        responsive: true,
        maintainAspectRatio: false,
        // Configuração para evitar que dados sejam exibidos sobre os pontos
        elements: {
          point: {
            // Garantir que não haja texto interno nos pontos
            hoverBackgroundColor: 'transparent',
            borderWidth: 1
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: `Arrecadação em ${anoX} (R$)`,
              font: { weight: 'bold' }
            },
            ticks: {
              callback: (value) => formatCurrencyShort(value)
            },
            grid: {
              color: (context) => context.tick.value === mediaX ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)',
              lineWidth: (context) => context.tick.value === mediaX ? 2 : 1
            },
            min: 0,
            // Usar escala ajustada para todas as OBMs (sem CAT)
            suggestedMax: obmData.reduce((max, item) => Math.max(max, item.valorX), 0) * 1.1
          },
          y: {
            title: {
              display: true,
              text: `Crescimento ${periodoY} (%)`,
              font: { weight: 'bold' }
            },
            ticks: {
              callback: (value) => value.toFixed(1) + '%'
            },
            grid: {
              color: (context) => context.tick.value === mediaY ? 'rgba(0, 0, 0, 0.5)' : 'rgba(0, 0, 0, 0.1)',
              lineWidth: (context) => context.tick.value === mediaY ? 2 : 1
            },
            suggestedMin: Math.min(obmData.reduce((min, item) => Math.min(min, item.valorY), 0), -10)
          }
        },
        plugins: {
          tooltip: {
            callbacks: {
              title: (context) => {
                // Usar o nome completo da OBM no título
                return context[0].raw.obm;
              },
              label: (context) => {
                const raw = context.raw;
                return [
                  `Arrecadação ${anoX}: ${formatCurrency(raw.x)}`,
                  `Crescimento ${periodoY}: ${raw.y.toFixed(2)}%`,
                  `De ${formatCurrency(raw.valorInicial)} para ${formatCurrency(raw.valorFinal)}`
                ];
              }
            }
          },
          legend: {
            display: false
          },
          // Desativar o plugin datalabels para evitar exibição automática de dados sobre os pontos
          datalabels: {
            display: false
          },
          zoom: {
            pan: {
              enabled: true,
              mode: 'xy',
              modifierKey: null // Permite arrastar sem precisar segurar uma tecla modificadora
            },
            zoom: {
              wheel: {
                enabled: true,
                speed: 0.1 // Velocidade reduzida para maior precisão
              },
              pinch: {
                enabled: true
              },
              mode: 'xy',
              onZoomComplete: function({chart}) {
                // Redesenhar as linhas e labels quando o zoom for completado
                setTimeout(() => {
                  drawQuadrantLines();
                  addQuadrantLabels();
                }, 50);
              }
            },
            limits: {
              x: {min: 'original', max: 'original'},
              y: {min: 'original', max: 'original'}
            }
          }
        }
      }
    });
    
    // Adicionar apenas as linhas de média (divisórias dos quadrantes) sem texto
    const drawQuadrantLines = () => {
      try {
        const chart = quadrantesChartInstance;
        const ctx = chart.ctx;
        const xScale = chart.scales.x;
        const yScale = chart.scales.y;
        
        // Salvar o estado do contexto
        ctx.save();
        
        // Configurar estilo da linha
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
        ctx.setLineDash([3, 3]);
        
        // Linha Vertical (divide os quadrantes baseado no eixo X)
        ctx.beginPath();
        ctx.moveTo(xScale.getPixelForValue(mediaX), yScale.getPixelForValue(yScale.max));
        ctx.lineTo(xScale.getPixelForValue(mediaX), yScale.getPixelForValue(yScale.min));
        ctx.stroke();
        
        // Linha Horizontal (divide os quadrantes baseado no eixo Y)
        ctx.beginPath();
        ctx.moveTo(xScale.getPixelForValue(xScale.min), yScale.getPixelForValue(mediaY));
        ctx.lineTo(xScale.getPixelForValue(xScale.max), yScale.getPixelForValue(mediaY));
        ctx.stroke();
        
        // Restaurar o estado do contexto
        ctx.restore();
      } catch (error) {
        console.error("Erro ao desenhar linhas de quadrantes:", error);
      }
    };
    
    // Função para adicionar labels aos quadrantes (simplificada - apenas números dos quadrantes)
    const addQuadrantLabels = () => {
      try {
        const chart = quadrantesChartInstance;
        const ctx = chart.ctx;
        const xScale = chart.scales.x;
        const yScale = chart.scales.y;
        
        // Calcular posições
        const maxX = obmData.reduce((max, item) => Math.max(max, item.valorX), 0);
        const maxY = obmData.reduce((max, item) => Math.max(max, item.valorY), 0);
        const minY = obmData.reduce((min, item) => Math.min(min, item.valorY), 0);
        
        // Ajustar posições para que não fiquem no extremo do gráfico
        const q1X = mediaX + (maxX - mediaX) * 0.75;
        const q1Y = mediaY + (maxY - mediaY) * 0.75;
        
        const q2X = mediaX * 0.25;
        const q2Y = mediaY + (maxY - mediaY) * 0.75;
        
        const q3X = mediaX * 0.25;
        const q3Y = mediaY * 0.25 + minY * 0.5;
        
        const q4X = mediaX + (maxX - mediaX) * 0.75;
        const q4Y = mediaY * 0.25 + minY * 0.5;
        
        // Salvar o estado do contexto
        ctx.save();
        
        // Configurações de texto - Números mais visíveis para os quadrantes
        ctx.font = "bold 16px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        
        // Q1: Estrelas
        ctx.fillStyle = 'rgba(75, 192, 192, 0.7)';
        ctx.fillText("Q1", xScale.getPixelForValue(q1X), yScale.getPixelForValue(q1Y));
        
        // Q2: Emergentes
        ctx.fillStyle = 'rgba(54, 162, 235, 0.7)';
        ctx.fillText("Q2", xScale.getPixelForValue(q2X), yScale.getPixelForValue(q2Y));
        
        // Q3: Atenção
        ctx.fillStyle = 'rgba(255, 99, 132, 0.7)';
        ctx.fillText("Q3", xScale.getPixelForValue(q3X), yScale.getPixelForValue(q3Y));
        
        // Q4: Estabelecidas
        ctx.fillStyle = 'rgba(255, 159, 64, 0.7)';
        ctx.fillText("Q4", xScale.getPixelForValue(q4X), yScale.getPixelForValue(q4Y));
        
        // Restaurar o estado do contexto
        ctx.restore();
      } catch (error) {
        console.error("Erro ao adicionar labels aos quadrantes:", error);
      }
    };
    
    // Aguardar o gráfico ser renderizado e então adicionar as linhas e labels
    quadrantesChartInstance.options.animation = {
      onComplete: function() {
        drawQuadrantLines();
        addQuadrantLabels();
        
        // Adicionar rótulos com APENAS os nomes das localidades (sem códigos, só ex: "TRINDADE")
        const chart = quadrantesChartInstance;
        const ctx = chart.ctx;
        const xScale = chart.scales.x;
        const yScale = chart.scales.y;
        
        // Configurar estilo do texto - fonte maior para melhor visualização
        ctx.save();
        ctx.font = "bold 11px Arial";
        ctx.fillStyle = 'rgba(0, 0, 0, 0.9)';
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        
        // Criar um mapa para evitar sobreposição de rótulos
        let labelMap = new Map();
        
        // Calcular posições ideais dos rótulos
        chart.data.datasets[0].data.forEach(point => {
          const x = xScale.getPixelForValue(point.x);
          const y = yScale.getPixelForValue(point.y);
          
          // CAT já foi excluído do gráfico, não precisamos mais dessa verificação
          
          // Chave para este ponto (grid mais grosso para evitar sobreposições)
          const key = Math.round(x/20) + "_" + Math.round(y/20);
          
          // Se este ponto estiver próximo de outro já rotulado, não adicionar outro rótulo
          if (!labelMap.has(key)) {
            labelMap.set(key, {
              x: x,
              y: y,
              label: point.obmShort
            });
          }
        });
        
        // Desenhar os rótulos (apenas os não sobrepostos)
        labelMap.forEach(info => {
          // Desenhar apenas o nome da localidade (abreviado se necessário)
          // Posicionar o texto logo abaixo do ponto
          ctx.fillText(info.label, info.x, info.y + 10);
        });
        
        ctx.restore();
      }
    };
  }

  // O botão de atualização foi removido, agora a atualização é automática

  // Adicionar eventos para os selects de quadrantes
  const quadranteAnoXSelect = document.getElementById('quadranteAnoX');
  const quadrantePeriodoYSelect = document.getElementById('quadrantePeriodoY');
  
  if (quadranteAnoXSelect) {
    quadranteAnoXSelect.addEventListener('change', function() {
      // Atualizar automaticamente o gráfico ao mudar o ano X
      if (document.getElementById('rankingsAnalises').classList.contains('active')) {
        const periodoY = quadrantePeriodoYSelect.value;
        createOrUpdateQuadrantesChart(this.value, periodoY);
      }
    });
  }
  
  if (quadrantePeriodoYSelect) {
    quadrantePeriodoYSelect.addEventListener('change', function() {
      // Atualizar automaticamente o gráfico ao mudar o período Y
      if (document.getElementById('rankingsAnalises').classList.contains('active')) {
        const anoX = quadranteAnoXSelect.value;
        createOrUpdateQuadrantesChart(anoX, this.value);
      }
    });
  }
  
  // Adicionar evento para o botão de resetar zoom
  const resetZoomBtn = document.getElementById('resetZoomBtn');
  if (resetZoomBtn) {
    resetZoomBtn.addEventListener('click', function() {
      if (quadrantesChartInstance) {
        // Resetar o zoom
        quadrantesChartInstance.resetZoom();
        
        // Redesenhar as linhas e labels após resetar
        setTimeout(() => {
          const drawQuadrantLines = () => {
            try {
              const chart = quadrantesChartInstance;
              const ctx = chart.ctx;
              const xScale = chart.scales.x;
              const yScale = chart.scales.y;
              
              // Desenhar apenas as linhas divisórias simples, sem texto
              ctx.save();
              ctx.lineWidth = 1;
              ctx.strokeStyle = 'rgba(0, 0, 0, 0.4)';
              ctx.setLineDash([3, 3]);
              
              ctx.beginPath();
              ctx.moveTo(xScale.getPixelForValue(chart.options._quadrantData.mediaX), yScale.getPixelForValue(yScale.max));
              ctx.lineTo(xScale.getPixelForValue(chart.options._quadrantData.mediaX), yScale.getPixelForValue(yScale.min));
              ctx.stroke();
              
              ctx.beginPath();
              ctx.moveTo(xScale.getPixelForValue(xScale.min), yScale.getPixelForValue(chart.options._quadrantData.mediaY));
              ctx.lineTo(xScale.getPixelForValue(xScale.max), yScale.getPixelForValue(chart.options._quadrantData.mediaY));
              ctx.stroke();
              
              ctx.restore();
            } catch (error) {
              console.error("Erro ao redesenhar linhas após resetar zoom:", error);
            }
          };
          
          drawQuadrantLines();
        }, 100);
      }
    });
  }

  // Inicializar o gráfico de quadrantes quando a aba Rankings e Análises for aberta
  document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', function() {
      if (this.textContent.trim() === 'Rankings e Análises') {
        // Adicionar inicialização do gráfico de quadrantes
        setTimeout(() => {
          const anoX = document.getElementById('quadranteAnoX').value;
          const periodoY = document.getElementById('quadrantePeriodoY').value;
          createOrUpdateQuadrantesChart(anoX, periodoY);
        }, 300);
      }
    });
  });
});
