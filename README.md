
# Calculadora Pediátrica

Uma calculadora web para auxiliar profissionais de saúde no cálculo de doses e volumes de medicamentos em emergências pediátricas. Desenvolvida com React, Vite e Tailwind CSS.

![Calculadora Pediátrica Screenshot](https://raw.githubusercontent.com/paulpessoa/calculadora-pediatrica/refs/heads/main/public/images/home.png)

## 🚀 Funcionalidades

- Cálculo automático baseado no peso da criança
- Interface dividida em abas para diferentes tipos de medicações:
  - Medicações Primárias
  - Medicações de Uso Limitado
  - Medicações para Fibrilação
  - Medicações para Intubação
- Campos para dados do paciente:
  - Nome
  - Registro
  - Idade
  - Peso (kg)
- Cálculos precisos para medicações essenciais:
  - Soro Fisiológico
  - Adrenalina (múltiplas doses e apresentações)
  - Bicarbonato
  - Atropina

## 🛠️ Tecnologias Utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/) - Componentes React reutilizáveis

## 📋 Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## ⚙️ Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/calculadora-pediatrica.git
```

2. Entre no diretório do projeto:
```bash
cd calculadora-pediatrica
```

3. Instale as dependências:
```bash
npm install
# ou
yarn install
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
```

## 🎯 Uso

1. Preencha os dados do paciente nos campos apropriados
2. O peso é o campo mais importante pois todos os cálculos são baseados nele
3. Navegue entre as abas para encontrar as medicações desejadas
4. Os resultados são atualizados automaticamente conforme o peso é alterado

## 📦 Estrutura do Projeto

```
calculadora-pediatrica/
├── src/
│   ├── components/
│   │   ├── Calculator.tsx
│   │   ├── PatientForm.tsx
│   │   └── MedicationCard.tsx
│   ├── lib/
│   │   └── calculations.ts
│   ├── App.tsx
│   └── main.tsx
├── public/
├── index.html
└── package.json
```

## 🔄 Integração com Google Sheets

Esta calculadora foi desenvolvida a partir de uma planilha Google, permitindo:
- Fácil atualização das fórmulas de cálculo
- Validação dos resultados
- Manutenção simplificada dos dados

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## ✨ Agradecimentos

- Equipe médica que contribuiu com as fórmulas e validações
- Comunidade React e Tailwind pelo suporte
- Contribuidores do projeto shadcn/ui

## 📞 Suporte

Para suporte, envie um email para [seu-email@dominio.com] ou abra uma issue no repositório.



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
