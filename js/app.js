/* ======================================================================
       BANCO DE DADOS: EXATAMENTE 30 QUESTÕES RIGOROSAS
       - 10 Fáceis (1 a 10)
       - 10 Médias (11 a 20)
       - 10 Difíceis (21 a 30)
       ====================================================================== */
    const QUIZ_QUESTIONS = [
      // -------------------------------------------------------------
      // 10 QUESTÕES FÁCEIS (1 - 10)
      // -------------------------------------------------------------
      {
        id: 1,
        difficulty: 'facil',
        difficultyLabel: 'Fácil',
        topic: 'Comunicação de Dados',
        question: 'Em um sistema de comunicação de dados, qual componente representa formalmente o conjunto de regras e convenções que governa a transmissão e interpretação das mensagens entre os dispositivos?',
        options: [
          'A) O Meio de Transmissão (canal físico ou sem fio).',
          'B) O Protocolo de Comunicação.',
          'C) O Conversor Analógico-Digital do transmissor.',
          'D) A Largura de Banda contratada na interface de rede.'
        ],
        correct: 1, // B
        explanation: 'O Protocolo é o conjunto formal de regras, sintaxes, semânticas e sincronização que governa a troca de informações entre entidades comunicantes. Sem protocolo, dois nós podem trocar sinais elétricos ou ópticos, mas nenhum dos lados conseguirá compreender ou estruturar os dados recebidos.'
      },
      {
        id: 2,
        difficulty: 'facil',
        difficultyLabel: 'Fácil',
        topic: 'Tipos de Rede',
        question: 'Uma rede de computadores restrita geograficamente a um único escritório, residência ou prédio comercial é classificada tecnicamente como:',
        options: [
          'A) WAN (Wide Area Network).',
          'B) MAN (Metropolitan Area Network).',
          'C) LAN (Local Area Network).',
          'D) SAN (Storage Area Network).'
        ],
        correct: 2, // C
        explanation: 'Uma LAN (Local Area Network ou Rede Local) cobre uma extensão geográfica limitada e contígua (uma sala, andar, casa ou prédio). Caracteriza-se por elevadas taxas de transferência de dados e baixíssima latência quando comparada a redes metropolitanas (MAN) ou de longa distância (WAN).'
      },
      {
        id: 3,
        difficulty: 'facil',
        difficultyLabel: 'Fácil',
        topic: 'Modelo OSI',
        question: 'Qual camada do Modelo OSI é estritamente responsável por definir as características elétricas, mecânicas, temporais e a transmissão de bits não estruturados através do meio físico?',
        options: [
          'A) Camada de Enlace de Dados.',
          'B) Camada Física.',
          'C) Camada de Rede.',
          'D) Camada de Transporte.'
        ],
        correct: 1, // B
        explanation: 'A Camada Física (Camada 1 do Modelo OSI) trata diretamente da transmissão bruta de fluxos de bits sobre o canal de comunicação. É ela quem define níveis de voltagem, temporização de pulso, conectores físicos (como RJ45), tipos de cabo e modulação de ondas eletromagnéticas.'
      },
      {
        id: 4,
        difficulty: 'facil',
        difficultyLabel: 'Fácil',
        topic: 'Topologias de Rede',
        question: 'Em qual topologia de rede todos os nós finais conectam-se diretamente a um dispositivo centralizador (como um switch), de forma que o rompimento do cabo de uma estação não afeta a comunicação das outras?',
        options: [
          'A) Topologia em Barramento (Bus).',
          'B) Topologia em Anel (Ring).',
          'C) Topologia em Estrela (Star).',
          'D) Topologia Ponto a Ponto Pura.'
        ],
        correct: 2, // C
        explanation: 'Na topologia em Estrela (Star), cada nó é interligado individualmente ao nó central (switch ou concentrador). Se um link específico for rompido, apenas aquela estação fica isolada, mantendo o restante da rede totalmente operacional. É o padrão predominante nas redes locais modernas.'
      },
      {
        id: 5,
        difficulty: 'facil',
        difficultyLabel: 'Fácil',
        topic: 'Modelo TCP/IP',
        question: 'Quantas camadas possui a arquitetura do modelo de referência TCP/IP clássico (definido originalmente pela RFC 1122)?',
        options: [
          'A) 3 camadas.',
          'B) 4 camadas.',
          'C) 5 camadas.',
          'D) 7 camadas.'
        ],
        correct: 1, // B
        explanation: 'O modelo clássico TCP/IP é estruturado em 4 camadas fundamentais: 1) Camada de Acesso à Rede (Host-to-Network), 2) Camada de Internet (Rede), 3) Camada de Transporte e 4) Camada de Aplicação. (Diferencia-se do OSI que possui 7 camadas).'
      },
      {
        id: 6,
        difficulty: 'facil',
        difficultyLabel: 'Fácil',
        topic: 'Comunicação de Dados',
        question: 'Na teoria da comunicação de dados, o caminho físico (seja cabo de cobre, fibra óptica ou espaço livre com ondas de rádio) por onde viaja o sinal eletromagnético é denominado:',
        options: [
          'A) Meio ou Canal de Transmissão.',
          'B) Protocolo de Acesso ao Barramento.',
          'C) Quadro de Dados (Data Frame).',
          'D) Gateway de Comunicação.'
        ],
        correct: 0, // A
        explanation: 'O Meio de Transmissão (ou Canal) é o suporte material ou etéreo pelo qual o sinal físico se propaga da fonte até o destino. Pode ser guiado (par trançado, coaxial, fibra) ou não-guiado (espectro eletromagnético de radiofrequência).'
      },
      {
        id: 7,
        difficulty: 'facil',
        difficultyLabel: 'Fácil',
        topic: 'Equipamentos',
        question: 'O Hub é considerado um equipamento de qual camada do Modelo OSI?',
        options: [
          'A) Camada 1 - Física.',
          'B) Camada 2 - Enlace de Dados.',
          'C) Camada 3 - Rede.',
          'D) Camada 4 - Transporte.'
        ],
        correct: 0, // A
        explanation: 'O Hub opera na Camada 1 (Física). Ele funciona como um repetidor elétrico multiporta: simplesmente recebe o sinal elétrico em uma de suas portas e o regenera/replica para todas as outras portas conectadas, sem inspecionar endereços MAC ou IP e sem criar domínios de colisão separados.'
      },
      {
        id: 8,
        difficulty: 'facil',
        difficultyLabel: 'Fácil',
        topic: 'Cálculo de IP',
        question: 'Qual é a máscara de sub-rede padrão (default subnet mask) para endereços IPv4 pertencentes à tradicional Classe C?',
        options: [
          'A) 255.0.0.0 (/8).',
          'B) 255.255.0.0 (/16).',
          'C) 255.255.255.0 (/24).',
          'D) 255.255.255.240 (/28).'
        ],
        correct: 2, // C
        explanation: 'Na arquitetura original de classes (Classful IPv4), as redes de Classe C utilizam 24 bits para a identificação da rede (NetID) e 8 bits para hosts (HostID), correspondendo à máscara padrão 255.255.255.0 (notação CIDR /24).'
      },
      {
        id: 9,
        difficulty: 'facil',
        difficultyLabel: 'Fácil',
        topic: 'Modelo OSI',
        question: 'Qual é o nome da Unidade de Dados de Protocolo (PDU) correspondente à Camada de Transporte quando opera com o protocolo orientado a conexão TCP?',
        options: [
          'A) Quadro (Frame).',
          'B) Pacote (Packet).',
          'C) Segmento (Segment).',
          'D) Bit.'
        ],
        correct: 2, // C
        explanation: 'A PDU da Camada de Transporte é denominada Segmento (Segment) no protocolo TCP (ou Datagrama no UDP). No Enlace (Camada 2) temos Quadros (Frames), na Rede (Camada 3) temos Pacotes (Packets) e na Física (Camada 1) temos Bits.'
      },
      {
        id: 10,
        difficulty: 'facil',
        difficultyLabel: 'Fácil',
        topic: 'Tipos de Rede',
        question: 'A tecnologia sem fio Bluetooth, comumente utilizada para conectar fones de ouvido, mouses e relógios inteligentes a smartphones em curtas distâncias, forma uma rede do tipo:',
        options: [
          'A) WAN (Wide Area Network).',
          'B) MAN (Metropolitan Area Network).',
          'C) PAN (Personal Area Network).',
          'D) WLAN empresarial.'
        ],
        correct: 2, // C
        explanation: 'O Bluetooth forma uma Rede de Área Pessoal (PAN - Personal Area Network, ou WPAN), caracterizada por abranger o espaço pessoal imediato em torno de um usuário (geralmente até 10 metros de raio).'
      },

      // -------------------------------------------------------------
      // 10 QUESTÕES MÉDIAS (11 - 20)
      // -------------------------------------------------------------
      {
        id: 11,
        difficulty: 'medio',
        difficultyLabel: 'Médio',
        topic: 'Equipamentos & Domínios',
        question: 'Um switch Ethernet de Camada 2 que possui 24 portas ativas interligando computadores cria, por padrão (em uma rede sem VLANs configuradas), quantos domínios de colisão e quantos domínios de broadcast?',
        options: [
          'A) 1 domínio de colisão e 1 domínio de broadcast.',
          'B) 24 domínios de colisão e 24 domínios de broadcast.',
          'C) 24 domínios de colisão e 1 domínio de broadcast.',
          'D) 1 domínio de colisão e 24 domínios de broadcast.'
        ],
        correct: 2, // C
        explanation: 'Cada porta de um switch opera de modo microsegmentado em Camada 2, criando um domínio de colisão independente por porta (24 portas = 24 domínios de colisão). Por padrão, todo quadro de broadcast (destino FF:FF:FF:FF:FF:FF) é propagado para todas as portas da mesma VLAN, logo existe apenas 1 domínio de broadcast.'
      },
      {
        id: 12,
        difficulty: 'medio',
        difficultyLabel: 'Médio',
        topic: 'Ethernet',
        question: 'Por que o mecanismo de detecção de colisões CSMA/CD é automaticamente desativado e desnecessário em enlaces Ethernet modernos operando em Full-Duplex através de switches?',
        options: [
          'A) Porque os switches bloqueiam qualquer quadro que apresente colisão na camada de transporte.',
          'B) Porque existem vias e pares físicos independentes e dedicados para transmissão (Tx) e recepção (Rx), eliminando a possibilidade de colisões físicas no meio.',
          'C) Porque o cabeçalho IP assume o controle de acesso ao meio físico da placa de rede.',
          'D) Porque as conexões Full-Duplex utilizam exclusivamente ondas de rádio moduladas.'
        ],
        correct: 1, // B
        explanation: 'No modo Full-Duplex ponto-a-ponto entre a estação e a porta do switch, há condutores dedicados para transmissão (Tx) e outros para recepção (Rx). Como os sinais não colidem no mesmo condutor compartilhado, o mecanismo CSMA/CD torna-se obsoleto e é desligado.'
      },
      {
        id: 13,
        difficulty: 'medio',
        difficultyLabel: 'Médio',
        topic: 'Modelos de Referência',
        question: 'As camadas de Sessão, Apresentação e Aplicação do Modelo OSI de 7 camadas correspondem a qual camada no modelo TCP/IP clássico de 4 camadas?',
        options: [
          'A) Camada de Internet.',
          'B) Camada de Transporte.',
          'C) Camada de Aplicação.',
          'D) Camada de Interface de Rede.'
        ],
        correct: 2, // C
        explanation: 'No modelo TCP/IP, toda a responsabilidade de formatação/apresentação de dados, controle de diálogo/sessão e interação direta com o aplicativo final do usuário é condensada em uma única camada: a Camada de Aplicação.'
      },
      {
        id: 14,
        difficulty: 'medio',
        difficultyLabel: 'Médio',
        topic: 'Ethernet',
        question: 'Qual é a velocidade nominal de transmissão e a especificação IEEE oficial correspondente ao padrão Fast Ethernet sobre par trançado?',
        options: [
          'A) 10 Mbps – IEEE 802.3a.',
          'B) 100 Mbps – IEEE 802.3u (100BASE-TX).',
          'C) 1.000 Mbps – IEEE 802.3ab (1000BASE-T).',
          'D) 10 Gbps – IEEE 802.3an (10GBASE-T).'
        ],
        correct: 1, // B
        explanation: 'O padrão Fast Ethernet foi ratificado pelo IEEE em 1995 sob a norma IEEE 802.3u, estabelecendo a velocidade de 100 Mbps (tendo o 100BASE-TX sobre cabo de par trançado Cat5 como a implementação mais difundida).'
      },
      {
        id: 15,
        difficulty: 'medio',
        difficultyLabel: 'Médio',
        topic: 'Equipamentos',
        question: 'Qual é a diferença fundamental no comportamento de encaminhamento e isolamento entre um Switch L2 convencional e um Roteador L3?',
        options: [
          'A) O switch isola domínios de broadcast, enquanto o roteador propaga todos os broadcasts recebidos.',
          'B) O switch comuta quadros com base no endereço físico MAC e propaga broadcasts; já o roteador encaminha pacotes com base no endereço lógico IP e bloqueia por padrão a propagação de broadcasts.',
          'C) O switch atua em sinais analógicos brutos e o roteador atua exclusivamente em sinais ópticos.',
          'D) O roteador não possui tabela de encaminhamento própria, necessitando de flooding constante.'
        ],
        correct: 1, // B
        explanation: 'Switches operam na Camada 2 (Enlace), encaminhando quadros com base no endereço MAC gravado em sua tabela CAM; quando recebem um broadcast, replicam para todas as portas. Roteadores operam na Camada 3 (Rede), consultando tabelas de rotas baseadas em IPs e contendo broadcasts dentro de cada sub-rede.'
      },
      {
        id: 16,
        difficulty: 'medio',
        difficultyLabel: 'Médio',
        topic: 'Topologias de Rede',
        question: 'Em redes antigas que utilizavam topologia em barramento físico com cabo coaxial (10BASE2), qual era a função essencial dos terminadores resistivos de 50 Ohms colocados em cada extremidade do cabo?',
        options: [
          'A) Fornecer energia elétrica contínua para amplificar as placas de rede das estações.',
          'B) Absorver a energia do sinal elétrico ao atingir o fim da linha, impedindo a reflexão da onda que corromperia os dados com interferência e colisões.',
          'C) Criptografar as transmissões para evitar espionagem no barramento.',
          'D) Converter a modulação coaxial para o padrão fibra óptica.'
        ],
        correct: 1, // B
        explanation: 'Os terminadores resistivos casam a impedância da linha (50 Ohms no coaxial) e absorvem completamente a onda eletromagnética ao atingir o fim físico do cabo. Se faltasse um terminador, a onda refletiria de volta pelo condutor, gerando colisão fantasma e destruindo os sinais em trânsito.'
      },
      {
        id: 17,
        difficulty: 'medio',
        difficultyLabel: 'Médio',
        topic: 'Cálculo de IP',
        question: 'Convertendo o octeto binário 11010000 para a base decimal, obtém-se o valor:',
        options: [
          'A) 192.',
          'B) 208.',
          'C) 212.',
          'D) 224.'
        ],
        correct: 1, // B
        explanation: 'Somando os pesos decimais das posições onde o bit é 1: Bit 7 (peso 128) = 128; Bit 6 (peso 64) = 64; Bit 5 (peso 32) = 0; Bit 4 (peso 16) = 16; demais bits = 0. Cálculo: 128 + 64 + 16 = 208.'
      },
      {
        id: 18,
        difficulty: 'medio',
        difficultyLabel: 'Médio',
        topic: 'Cálculo de IP',
        question: 'Qual das faixas de endereços IPv4 a seguir corresponde a endereços privados reservados pela norma RFC 1918 (portanto, não roteáveis na Internet pública)?',
        options: [
          'A) 192.169.0.0 até 192.169.255.255.',
          'B) 172.16.0.0 até 172.31.255.255 (/12).',
          'C) 100.64.0.0 até 100.127.255.255.',
          'D) 11.0.0.0 até 11.255.255.255.'
        ],
        correct: 1, // B
        explanation: 'A RFC 1918 define três faixas para redes privadas: 10.0.0.0/8 (10.0.0.0 a 10.255.255.255), 172.16.0.0/12 (172.16.0.0 a 172.31.255.255) e 192.168.0.0/16 (192.168.0.0 a 192.168.255.255). A faixa 172.16.0.0 a 172.31.255.255 é a classe B privada.'
      },
      {
        id: 19,
        difficulty: 'medio',
        difficultyLabel: 'Médio',
        topic: 'Equipamentos',
        question: 'Qual é o diferencial técnico de um Gateway (porta de ligação) quando comparado a um roteador convencional de Camada 3?',
        options: [
          'A) O gateway atua exclusivamente na camada física, regenerando o sinal por meio de circuitos PLL.',
          'B) O gateway é capaz de converter e traduzir formatos de dados e regras de protocolos em camadas superiores (Sessão, Apresentação e Aplicação), integrando pilhas e arquiteturas heterogêneas.',
          'C) O gateway opera apenas na camada de enlace de dados, analisando apenas endereços MAC de 48 bits.',
          'D) O gateway rejeita qualquer conexão que utilize criptografia SSL/TLS.'
        ],
        correct: 1, // B
        explanation: 'Enquanto o roteador encaminha pacotes transparentemente em Camada 3 (Rede) com base em IP, um Gateway de Aplicação atua em camadas mais altas (4 a 7), realizando tradução semântica de protocolos incompatíveis (ex: conversão entre protocolos legados IBM SNA e TCP/IP, ou gateway VoIP).'
      },
      {
        id: 20,
        difficulty: 'medio',
        difficultyLabel: 'Médio',
        topic: 'Ethernet',
        question: 'O endereço físico MAC (Media Access Control) é formado por quantos bits e qual fração dele corresponde ao OUI (Organizationally Unique Identifier) do fabricante?',
        options: [
          'A) 32 bits no total; os primeiros 16 bits identificam o fabricante.',
          'B) 48 bits no total; os primeiros 24 bits (3 primeiros bytes) formam o OUI atribuído pelo IEEE ao fabricante.',
          'C) 64 bits no total; os primeiros 32 bits identificam o país de origem.',
          'D) 128 bits no total; seguindo o mesmo padrão do endereço IPv6.'
        ],
        correct: 1, // B
        explanation: 'O endereço MAC padrão possui 48 bits (6 octetos, representados em hexadecimal, ex: 00:1A:2B:3C:4D:5E). Os primeiros 24 bits (3 octetos) constituem o OUI (identificador único da empresa fabricante atribuído pelo IEEE), e os 24 bits finais são atribuídos pelo fabricante para identificar aquela placa de rede específica.'
      },

      // -------------------------------------------------------------
      // 10 QUESTÕES DIFÍCEIS (21 - 30)
      // -------------------------------------------------------------
      {
        id: 21,
        difficulty: 'dificil',
        difficultyLabel: 'Difícil',
        topic: 'Cálculo de IP (CIDR)',
        question: 'Dado o endereço IPv4 com máscara CIDR 192.168.10.75/27, quais são, respectivamente, o Endereço de Rede, o Endereço de Broadcast e o número de Hosts Válidos dessa sub-rede?',
        options: [
          'A) Rede: 192.168.10.0 | Broadcast: 192.168.10.63 | 62 hosts.',
          'B) Rede: 192.168.10.64 | Broadcast: 192.168.10.95 | 30 hosts.',
          'C) Rede: 192.168.10.64 | Broadcast: 192.168.10.127 | 30 hosts.',
          'D) Rede: 192.168.10.32 | Broadcast: 192.168.10.63 | 30 hosts.'
        ],
        correct: 1, // B
        explanation: 'Máscara /27 possui 27 bits 1 e 5 bits de host (32 - 27 = 5). Tamanho do bloco = 2^5 = 32. Os blocos no 4º octeto são múltiplos de 32: 0, 32, 64, 96... Como o IP é .75, ele cai no bloco que inicia em 64. Logo: Endereço de Rede = 192.168.10.64. A próxima rede é 96, portanto o Broadcast é 192.168.10.95 (96 - 1). Hosts válidos = 2^5 - 2 = 32 - 2 = 30 (faixa de .65 a .94).'
      },
      {
        id: 22,
        difficulty: 'dificil',
        difficultyLabel: 'Difícil',
        topic: 'Cálculo de IP (Ponto a Ponto)',
        question: 'Para configurar um enlace serial ponto-a-ponto entre dois roteadores sem desperdiçar endereços IPv4, foi alocada a sub-rede 10.0.0.12/30. Quais são os únicos endereços IPs utilizáveis que podem ser configurados nas interfaces dos dois roteadores?',
        options: [
          'A) 10.0.0.12 e 10.0.0.13.',
          'B) 10.0.0.13 e 10.0.0.14.',
          'C) 10.0.0.14 e 10.0.0.15.',
          'D) 10.0.0.11 e 10.0.0.12.'
        ],
        correct: 1, // B
        explanation: 'Uma sub-rede /30 possui 2 bits de host (2^2 = 4 endereços no bloco: 12, 13, 14, 15). O primeiro endereço (10.0.0.12) é o Endereço de Rede. O último endereço (10.0.0.15) é o Endereço de Broadcast. Sobram exatamente 2 endereços válidos para os roteadores: 10.0.0.13 e 10.0.0.14.'
      },
      {
        id: 23,
        difficulty: 'dificil',
        difficultyLabel: 'Difícil',
        topic: 'Cálculo de IP (Super-rede/VLSM)',
        question: 'Um provedor alocou o bloco IPv4 172.20.16.0/22 para uma filial. Quantos endereços de hosts válidos essa rede comporta e qual é o seu endereço de broadcast?',
        options: [
          'A) 510 hosts válidos; Broadcast: 172.20.17.255.',
          'B) 1.022 hosts válidos; Broadcast: 172.20.19.255.',
          'C) 2.046 hosts válidos; Broadcast: 172.20.23.255.',
          'D) 1.024 hosts válidos; Broadcast: 172.20.20.0.'
        ],
        correct: 1, // B
        explanation: 'Prefixo /22 deixa 32 - 22 = 10 bits de host. Quantidade de hosts válidos = 2^10 - 2 = 1024 - 2 = 1.022 hosts. A máscara em decimal é 255.255.252.0. O salto no 3º octeto é 256 - 252 = 4. O bloco iniciou em 172.20.16.0 e abrange 4 octetos (16, 17, 18 e 19). A próxima rede começará em 172.20.20.0, portanto o Broadcast é 172.20.19.255.'
      },
      {
        id: 24,
        difficulty: 'dificil',
        difficultyLabel: 'Difícil',
        topic: 'Ethernet & Comutação',
        question: 'Em relação aos métodos de comutação em switches Ethernet, qual é a principal vantagem e o principal risco/desvantagem do método Cut-Through comparado ao Store-and-Forward?',
        options: [
          'A) O Cut-Through calcula o CRC completo antes do encaminhamento, garantindo menor latência mas maior consumo de buffer.',
          'B) O Cut-Through inicia a transmissão imediatamente após ler os primeiros 6 bytes (endereço MAC de destino), garantindo latência ultra-baixa, mas corre o risco de propagar quadros corrompidos ou fragmentos de colisão (runts).',
          'C) O Cut-Through armazena o quadro inteiro na memória Flash antes de enviar, evitando loops de spanning tree.',
          'D) O Store-and-Forward não faz checagem de erros por FCS, sendo preferido para redes VoIP sensíveis à latência.'
        ],
        correct: 1, // B
        explanation: 'No método Cut-Through, o switch não espera o quadro inteiro chegar: ao ler o MAC de destino (primeiros 6 bytes), já começa a comutar para a porta de saída, reduzindo a latência drasticamente. O ponto negativo é que o campo FCS (verificação de erro CRC) fica no fim do quadro, logo quadros com erros físicos ou runts são propagados pela rede sem serem descartados pelo switch.'
      },
      {
        id: 25,
        difficulty: 'dificil',
        difficultyLabel: 'Difícil',
        topic: 'Ethernet Avançado',
        question: 'O mecanismo de Controle de Fluxo padronizado pelo IEEE 802.3x em enlaces Ethernet Full-Duplex utiliza "Pause Frames". Qual é a lógica exata de funcionamento desse recurso?',
        options: [
          'A) O switch força a interface a entrar em colisão proposital enviando um jamming signal no cabo.',
          'B) Quando o buffer de recepção de um equipamento está prestes a transbordar, ele envia um quadro de controle MAC com opcode 0x0001 (Pause Frame) ao transmissor solicitando que este cesse o envio de dados pelo tempo especificado.',
          'C) O receptor altera a velocidade física da porta de 1 Gbps para 10 Mbps temporariamente até o esvaziamento da fila.',
          'D) O switch descarta silenciosamente os quadros excedentes e solicita retransmissão por mensagens ICMP Source Quench.'
        ],
        correct: 1, // B
        explanation: 'O padrão IEEE 802.3x Flow Control previne a perda de pacotes por estouro de buffer (buffer overflow) em enlaces Full-Duplex. Quando a fila de entrada atinge um limiar crítico, o dispositivo receptor envia um Pause Frame (EtherType 0x8808 com opcode 0x0001) para o endereço multicast 01-80-C2-00-00-01, especificando quantos "quanta" de tempo o remetente deve esperar antes de enviar novos dados.'
      },
      {
        id: 26,
        difficulty: 'dificil',
        difficultyLabel: 'Difícil',
        topic: 'Ethernet & CSMA/CD',
        question: 'No protocolo CSMA/CD em redes Ethernet Half-Duplex, o que as estações fazem imediatamente após detectarem uma colisão e emitirem o sinal de reforço (Jamming Signal)?',
        options: [
          'A) Aumentam a potência do sinal de voltagem para sobrepor a transmissão da outra estação no barramento.',
          'B) Executam o algoritmo Truncated Binary Exponential Backoff, sorteando um tempo de espera aleatório dentro de uma janela que dobra a cada colisão consecutiva para evitar colisões repetidas.',
          'C) Solicitam ao roteador mais próximo uma ficha (token) de autorização de transmissão.',
          'D) Reinicializam a interface de rede e cancelam a conexão TCP ativa.'
        ],
        correct: 1, // B
        explanation: 'No algoritmo de Recuo Binário Exponencial Truncado (Truncated Binary Exponential Backoff), a estação sorteia um número inteiro aleatório R dentro do intervalo [0, 2^k - 1], onde k = min(nº de colisões, 10). Ela aguarda R tempos de slot (slot time = 512 bits) antes de tentar transmitir novamente. Isso dispersa probabilisticamente os transmissores no tempo e previne re-colisões em cascata.'
      },
      {
        id: 27,
        difficulty: 'dificil',
        difficultyLabel: 'Difícil',
        topic: 'Cálculo de IP (VLSM)',
        question: 'Uma filial corporativa precisa interligar 5 servidores locais e 1 interface de gateway do roteador, exigindo exatamente 6 endereços IPv4 válidos para hosts. Qual é a menor máscara CIDR que atende a essa demanda sem desperdício de endereços?',
        options: [
          'A) /30.',
          'B) /29.',
          'C) /28.',
          'D) /27.'
        ],
        correct: 1, // B
        explanation: 'Para 6 hosts válidos, precisamos da fórmula: 2^h - 2 >= 6 -> 2^h >= 8 -> h = 3 bits de host. Prefixo CIDR = 32 - 3 = /29 (máscara 255.255.255.248). Uma sub-rede /29 possui 2^3 = 8 endereços no total, dos quais 1 é rede, 1 é broadcast e restam exatamente 8 - 2 = 6 endereços utilizáveis. Uma /30 suportaria apenas 2 hosts (insuficiente).'
      },
      {
        id: 28,
        difficulty: 'dificil',
        difficultyLabel: 'Difícil',
        topic: 'Ethernet & Comutação',
        question: 'O método de comutação Fragment-Free (também chamado de Modified Cut-Through) aguarda a recepção dos primeiros 64 bytes do quadro Ethernet antes de iniciar o encaminhamento. Por que o valor de 64 bytes foi historicamente escolhido?',
        options: [
          'A) Porque é o tamanho fixo da soma dos cabeçalhos IPv4, TCP e Ethernet somados.',
          'B) Porque 64 bytes é o tamanho mínimo de um quadro Ethernet válido; fragmentos gerados por colisões na rede (runts) são sempre menores que 64 bytes, permitindo filtrá-los sem a latência total do Store-and-Forward.',
          'C) Porque os primeiros 64 bytes contêm a assinatura digital de integridade do switch de destino.',
          'D) Porque após 64 bytes o quadro é automaticamente criptografado pela placa de rede.'
        ],
        correct: 1, // B
        explanation: 'O padrão IEEE 802.3 estipula 64 bytes (512 bits) como o tamanho mínimo para um quadro Ethernet válido (determinado pelo slot time necessário para detectar colisões no pior caso de propagação). Qualquer fragmento menor que 64 bytes (chamado de "runt") decorre de uma colisão. O Fragment-Free inspeciona os primeiros 64 bytes e descarta runts com latência inferior ao Store-and-Forward.'
      },
      {
        id: 29,
        difficulty: 'dificil',
        difficultyLabel: 'Difícil',
        topic: 'Cálculo de IP (CIDR)',
        question: 'Dada a sub-rede IPv4 172.16.50.144/28, qual é o endereço IP do último host válido utilizável e qual é o endereço de broadcast dessa sub-rede?',
        options: [
          'A) Último Host: 172.16.50.158 | Broadcast: 172.16.50.159.',
          'B) Último Host: 172.16.50.159 | Broadcast: 172.16.50.160.',
          'C) Último Host: 172.16.50.174 | Broadcast: 172.16.50.175.',
          'D) Último Host: 172.16.50.150 | Broadcast: 172.16.50.151.'
        ],
        correct: 0, // A
        explanation: 'Prefixo /28 deixa 32 - 28 = 4 bits de host. O tamanho do bloco é 2^4 = 16. Os blocos no 4º octeto avançam de 16 em 16: ... 128, 144, 160. A sub-rede dada é 172.16.50.144 (Endereço de Rede). A próxima rede começa em .160, logo o Endereço de Broadcast é 172.16.50.159 (160 - 1). O último host utilizável é o endereço imediatamente anterior ao broadcast: 172.16.50.158.'
      },
      {
        id: 30,
        difficulty: 'dificil',
        difficultyLabel: 'Difícil',
        topic: 'Topologias & Redundância',
        question: 'Em uma topologia em Malha Completa (Full Mesh) de alta disponibilidade contendo N = 8 roteadores de núcleo interligados diretamente entre si por links dedicados, quantos enlaces físicos no total são necessários?',
        options: [
          'A) 16 enlaces.',
          'B) 28 enlaces.',
          'C) 56 enlaces.',
          'D) 64 enlaces.'
        ],
        correct: 1, // B
        explanation: 'O número de conexões ponto-a-ponto necessárias para uma malha completa com N nós é dado pela fórmula combinatória: L = [N × (N - 1)] / 2. Para N = 8 roteadores: L = (8 × 7) / 2 = 56 / 2 = 28 enlaces dedicados.'
      }
    ];

    /* ======================================================================
       ESTADO DA APLICAÇÃO (STATE MANAGEMENT)
       ====================================================================== */
    let currentQuestionIdx = 0;
    let userAnswers = new Array(30).fill(null); // Armazena o índice da alternativa escolhida (0 a 3)
    let isQuizCompleted = false;

    /* ======================================================================
       NAVEGAÇÃO ENTRE SEÇÕES (SPA TABS)
       ====================================================================== */
    function switchSection(sectionId) {
      document.getElementById('section-teoria').style.display = 'none';
      document.getElementById('section-quiz').style.display = 'none';
      document.getElementById('section-resultado').style.display = 'none';

      document.getElementById('nav-teoria-btn').classList.remove('active');
      document.getElementById('nav-quiz-btn').classList.remove('active');
      const resNav = document.getElementById('nav-resultado-btn');
      if (resNav) resNav.classList.remove('active');

      if (sectionId === 'teoria') {
        document.getElementById('section-teoria').style.display = 'block';
        document.getElementById('nav-teoria-btn').classList.add('active');
      } else if (sectionId === 'quiz') {
        document.getElementById('section-quiz').style.display = 'block';
        document.getElementById('nav-quiz-btn').classList.add('active');
        renderQuestion(currentQuestionIdx);
        renderSidebarGrid();
      } else if (sectionId === 'resultado') {
        if (!isQuizCompleted) {
          alert('Você ainda não finalizou o quiz! Responda às questões e clique em "Finalizar e Ver Gabarito".');
          switchSection('quiz');
          return;
        }
        document.getElementById('section-resultado').style.display = 'block';
        if (resNav) {
          resNav.style.display = 'inline-flex';
          resNav.classList.add('active');
        }
        renderResultsView();
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /* ======================================================================
       ACCORDION E FILTROS DO RESUMO TEÓRICO
       ====================================================================== */
    function toggleAccordion(id) {
      const item = document.getElementById(id);
      if (!item) return;
      item.classList.toggle('open');
    }

    function expandAllTeoria() {
      document.querySelectorAll('.accordion-item').forEach(el => el.classList.add('open'));
    }

    function collapseAllTeoria() {
      document.querySelectorAll('.accordion-item').forEach(el => el.classList.remove('open'));
    }

    function filterTeoria() {
      const query = document.getElementById('teoria-search').value.toLowerCase().trim();
      const items = document.querySelectorAll('.accordion-item');

      items.forEach(item => {
        const text = item.innerText.toLowerCase();
        if (query === '' || text.includes(query)) {
          item.style.display = 'block';
          if (query !== '') item.classList.add('open');
        } else {
          item.style.display = 'none';
        }
      });
    }

    /* ======================================================================
       CALCULADORA DE SUB-REDE IPV4
       ====================================================================== */
    function runCalculator() {
      const ipStr = document.getElementById('calc-ip').value.trim();
      const cidr = parseInt(document.getElementById('calc-cidr').value, 10);

      // Validação básica de IPv4
      const parts = ipStr.split('.');
      if (parts.length !== 4) {
        alert('Por favor, informe um endereço IPv4 válido no formato X.X.X.X');
        return;
      }
      for (let p of parts) {
        const n = parseInt(p, 10);
        if (isNaN(n) || n < 0 || n > 255) {
          alert('Octeto inválido: ' + p + '. Cada octeto deve estar entre 0 e 255.');
          return;
        }
      }

      // Converte IP para inteiro 32 bits não sinalizado
      const ipNum = ((parseInt(parts[0], 10) << 24) |
                     (parseInt(parts[1], 10) << 16) |
                     (parseInt(parts[2], 10) << 8)  |
                     (parseInt(parts[3], 10))) >>> 0;

      // Máscara 32 bits
      const maskNum = cidr === 0 ? 0 : ((0xFFFFFFFF << (32 - cidr)) >>> 0);

      // Rede e Broadcast
      const netNum = (ipNum & maskNum) >>> 0;
      const bcastNum = (netNum | (~maskNum >>> 0)) >>> 0;

      function numToIp(num) {
        return [
          (num >>> 24) & 255,
          (num >>> 16) & 255,
          (num >>> 8) & 255,
          num & 255
        ].join('.');
      }

      const totalHosts = Math.pow(2, 32 - cidr);
      const validHosts = cidr >= 31 ? 0 : totalHosts - 2;

      document.getElementById('res-rede').innerText = numToIp(netNum);
      document.getElementById('res-broadcast').innerText = numToIp(bcastNum);
      document.getElementById('res-primeiro').innerText = (validHosts > 0) ? numToIp(netNum + 1) : 'N/A';
      document.getElementById('res-ultimo').innerText = (validHosts > 0) ? numToIp(bcastNum - 1) : 'N/A';
      document.getElementById('res-hosts').innerText = validHosts + ' hosts válidos (' + totalHosts + ' IPs totais)';
      document.getElementById('res-mascara').innerText = numToIp(maskNum);
    }

    /* ======================================================================
       LÓGICA DO QUIZ (30 QUESTÕES)
       ====================================================================== */
    function renderQuestion(index) {
      const q = QUIZ_QUESTIONS[index];
      if (!q) return;

      document.getElementById('q-current-num').innerText = index + 1;
      document.getElementById('q-topic-tag').innerText = q.topic;
      document.getElementById('q-text-content').innerText = q.question;

      // Badge de Dificuldade
      const badge = document.getElementById('q-diff-badge');
      badge.className = 'diff-badge ' + q.difficulty;
      badge.innerText = (q.difficulty === 'facil' ? '🟢 Nível Fácil' :
                         q.difficulty === 'medio' ? '🟡 Nível Médio' : '🔴 Nível Difícil');

      // Barra de progresso contínua
      const progressPercent = ((index + 1) / 30) * 100;
      document.getElementById('quiz-progress-bar').style.width = progressPercent + '%';

      // Renderização das Alternativas
      const container = document.getElementById('q-options-container');
      container.innerHTML = '';

      const letters = ['A', 'B', 'C', 'D'];
      q.options.forEach((optText, optIdx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn' + (userAnswers[index] === optIdx ? ' selected' : '');
        btn.onclick = () => selectOption(optIdx);

        btn.innerHTML = `
          <div class="opt-letter">${letters[optIdx]}</div>
          <div class="opt-text">${optText}</div>
        `;
        container.appendChild(btn);
      });

      // Botões de navegação
      document.getElementById('btn-prev-q').disabled = (index === 0);

      const nextBtn = document.getElementById('btn-next-q');
      const finishBtn = document.getElementById('btn-finish-q');

      if (index === 29) {
        nextBtn.style.display = 'none';
        finishBtn.style.display = 'inline-flex';
      } else {
        nextBtn.style.display = 'inline-flex';
        finishBtn.style.display = 'none';
      }

      renderSidebarGrid();
    }

    function selectOption(optionIndex) {
      userAnswers[currentQuestionIdx] = optionIndex;
      renderQuestion(currentQuestionIdx);
      updateHeaderBadge();
    }

    function nextQuestion() {
      if (currentQuestionIdx < 29) {
        currentQuestionIdx++;
        renderQuestion(currentQuestionIdx);
      }
    }

    function prevQuestion() {
      if (currentQuestionIdx > 0) {
        currentQuestionIdx--;
        renderQuestion(currentQuestionIdx);
      }
    }

    function jumpToQuestion(idx) {
      currentQuestionIdx = idx;
      renderQuestion(currentQuestionIdx);
    }

    function updateHeaderBadge() {
      const answeredCount = userAnswers.filter(a => a !== null).length;
      document.getElementById('header-quiz-badge').innerText = `${answeredCount}/30`;
      document.getElementById('sidebar-answered-count').innerText = `${answeredCount}/30`;
      document.getElementById('stat-answered').innerText = answeredCount;
      document.getElementById('stat-pending').innerText = 30 - answeredCount;
    }

    function renderSidebarGrid() {
      const grid = document.getElementById('question-nav-grid');
      grid.innerHTML = '';

      for (let i = 0; i < 30; i++) {
        const dot = document.createElement('button');
        dot.className = 'q-dot' + 
                        (i === currentQuestionIdx ? ' active' : '') + 
                        (userAnswers[i] !== null ? ' answered' : '');
        dot.innerText = i + 1;
        dot.title = `Questão ${i + 1} (${QUIZ_QUESTIONS[i].difficultyLabel}) - ${userAnswers[i] !== null ? 'Respondida' : 'Pendente'}`;
        dot.onclick = () => jumpToQuestion(i);
        grid.appendChild(dot);
      }

      updateHeaderBadge();
    }

    function promptFinishQuiz() {
      const unanswered = userAnswers.filter(a => a === null).length;
      if (unanswered > 0) {
        const conf = confirm(`Você ainda tem ${unanswered} questão(ões) sem resposta. Deseja realmente finalizar o quiz e ver o resultado agora?`);
        if (!conf) return;
      }

      isQuizCompleted = true;
      switchSection('resultado');
    }

    /* ======================================================================
       TELA DE RESULTADOS E FEEDBACK DETALHADO
       ====================================================================== */
    function renderResultsView() {
      let correctCount = 0;
      let wrongCount = 0;

      let easyCorrect = 0;
      let medCorrect = 0;
      let hardCorrect = 0;

      QUIZ_QUESTIONS.forEach((q, idx) => {
        const uAns = userAnswers[idx];
        const isRight = (uAns === q.correct);

        if (isRight) {
          correctCount++;
          if (q.difficulty === 'facil') easyCorrect++;
          if (q.difficulty === 'medio') medCorrect++;
          if (q.difficulty === 'dificil') hardCorrect++;
        } else {
          wrongCount++;
        }
      });

      const percentage = Math.round((correctCount / 30) * 100);

      // Score text & elements
      document.getElementById('final-percentage').innerText = percentage + '%';
      document.getElementById('metric-score-text').innerText = `${correctCount} / 30`;
      document.getElementById('metric-correct-count').innerText = correctCount;
      document.getElementById('metric-wrong-count').innerText = wrongCount;
      document.getElementById('metric-diff-breakdown').innerText = `${easyCorrect}/10 | ${medCorrect}/10 | ${hardCorrect}/10`;

      // Animação do anel SVG circular (perímetro aproximado = 2 * PI * 60 = 377)
      const circleOffset = 377 - (377 * (percentage / 100));
      setTimeout(() => {
        const bar = document.getElementById('score-bar');
        bar.style.strokeDashoffset = circleOffset;
        bar.style.stroke = percentage >= 70 ? 'var(--status-easy)' : percentage >= 50 ? 'var(--status-medium)' : 'var(--status-hard)';
      }, 100);

      // Mensagem motivacional
      const titleEl = document.getElementById('final-verdict-title');
      const descEl = document.getElementById('final-verdict-desc');

      if (percentage >= 85) {
        titleEl.innerText = 'Excelente! Conhecimento de Especialista! 🏆';
        descEl.innerText = 'Você demonstrou domínio completo dos fundamentos, cálculos de sub-rede CIDR e arquiteturas de redes. Está muito bem preparado para a prova!';
      } else if (percentage >= 65) {
        titleEl.innerText = 'Bom Desempenho! Aprovado! 🚀';
        descEl.innerText = 'Você compreendeu bem a maioria dos conceitos. Revise as questões que errou abaixo, com atenção especial aos cálculos avançados e detalhes do CSMA/CD.';
      } else {
        titleEl.innerText = 'Atenção aos Detalhes! Hora de Revisar 📚';
        descEl.innerText = 'Não desanime! Revise com cuidado o "Resumo Teórico" acima e leia atentamente os comentários técnicos de cada questão abaixo antes da sua prova.';
      }

      renderFeedbackCards('todos');
    }

    function renderFeedbackCards(filterType) {
      const container = document.getElementById('feedback-items-container');
      container.innerHTML = '';

      const letters = ['A', 'B', 'C', 'D'];

      QUIZ_QUESTIONS.forEach((q, idx) => {
        const uAns = userAnswers[idx];
        const isRight = (uAns === q.correct);

        // Aplicação dos filtros
        if (filterType === 'erros' && isRight) return;
        if (filterType === 'acertos' && !isRight) return;
        if (filterType === 'facil' && q.difficulty !== 'facil') return;
        if (filterType === 'medio' && q.difficulty !== 'medio') return;
        if (filterType === 'dificil' && q.difficulty !== 'dificil') return;

        const card = document.createElement('article');
        card.className = `feedback-card ${isRight ? 'correct-item' : 'wrong-item'}`;

        const userPickText = (uAns !== null) ? q.options[uAns] : 'Não respondida';
        const correctPickText = q.options[q.correct];

        card.innerHTML = `
          <div class="fb-header">
            <div class="fb-num-badge">
              <span>Questão ${q.id}</span>
              <span class="diff-badge ${q.difficulty}">${q.difficultyLabel}</span>
              <span style="font-size: 0.8rem; font-weight: normal; color: var(--text-muted);">${q.topic}</span>
            </div>
            <div class="fb-status-tag ${isRight ? 'correct' : 'wrong'}">
              ${isRight ? '✅ Você Acertou' : '❌ Você Errou'}
            </div>
          </div>

          <h4 class="fb-question-title">${q.question}</h4>

          <div class="fb-answers-grid">
            <div class="answer-box user-pick ${isRight ? 'correct' : 'wrong'}">
              <div class="answer-box-label">
                ${isRight ? '✅ Sua Resposta (Correta):' : '❌ Sua Resposta:'}
              </div>
              <div>${userPickText}</div>
            </div>

            <div class="answer-box correct-gabarito">
              <div class="answer-box-label" style="color: var(--status-easy);">
                🎯 Gabarito Oficial:
              </div>
              <div>${correctPickText}</div>
            </div>
          </div>

          <div class="fb-explanation-box">
            <div class="fb-explanation-title">
              💡 Explicação Técnica e Fundamentação Teórica:
            </div>
            <div class="fb-explanation-text">
              ${q.explanation}
            </div>
          </div>
        `;

        container.appendChild(card);
      });

      if (container.children.length === 0) {
        container.innerHTML = `
          <div style="text-align: center; padding: 3rem; color: var(--text-muted);">
            Nenhuma questão encontrada para este filtro.
          </div>
        `;
      }
    }

    function filterFeedback(type, btnElement) {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      if (btnElement) btnElement.classList.add('active');
      renderFeedbackCards(type);
    }

    function restartQuiz() {
      if (confirm('Deseja realmente reiniciar o simulado? Suas respostas atuais serão limpas.')) {
        userAnswers = new Array(30).fill(null);
        currentQuestionIdx = 0;
        isQuizCompleted = false;
        
        const resNav = document.getElementById('nav-resultado-btn');
        if (resNav) resNav.style.display = 'none';

        switchSection('quiz');
      }
    }

    /* ======================================================================
       TEMA CLARO / ESCURO
       ====================================================================== */
    function toggleTheme() {
      const currentTheme = document.body.getAttribute('data-theme');
      const themeBtn = document.getElementById('theme-btn');

      if (currentTheme === 'light') {
        document.body.removeAttribute('data-theme');
        themeBtn.innerText = '🌙';
        localStorage.setItem('redemaster-theme', 'dark');
      } else {
        document.body.setAttribute('data-theme', 'light');
        themeBtn.innerText = '☀️';
        localStorage.setItem('redemaster-theme', 'light');
      }
    }

    // Inicialização ao carregar
    window.addEventListener('DOMContentLoaded', () => {
      // Carregar preferência de tema salva
      const savedTheme = localStorage.getItem('redemaster-theme');
      if (savedTheme === 'light') {
        document.body.setAttribute('data-theme', 'light');
        document.getElementById('theme-btn').innerText = '☀️';
      }

      // Executar cálculo inicial da calculadora de sub-rede
      runCalculator();

      // Preparar quiz
      renderSidebarGrid();
    });
