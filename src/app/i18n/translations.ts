export enum Languages {
  RU,
  EN,
}

export const translations = {
  [Languages.RU]: {
    menu: ['О нас', 'Дорожная карта', 'Чеканка', 'Команда', 'F.A.Q.'],
    hero: {
      subtitle: '10 000 лошадей, покоряющих  метавселенную',
      button: 'Чеканка Hippy Horse',
    },
    about: [
      {
        title: 'Описание проекта',
        substitle:
          'Собственная криптовалюта, система депозита NFT и экономика GameFi!',
        text: 'Проект будет выпущен на блокчейне Polygon, будет отчеканено 1500 предпродажных билетов и 10 000 NFT. После завершения этапа минта мы выпустим собственную криптовалюту, которую можно будет добывать через систему депозита NFT. Затем наша команда создаст серию тематических мобильных игр, часть прибыли от которых будет ежемесячно инвестироваться в нашу криптовалюту, обеспечивая ей постоянный приток ликвидности, а держателям NFT - пассивный доход.',
        color: '#BBEE91',
        background: '#5DB6F8',
        image: 'nft-green.png',
      },
      {
        title: 'Новый образ мышления',
        substitle: 'Не картинка, а пассивный доход',
        text: 'Мы пересматриваем NFT как актив и добавляем возможность депозита токена на нашем сайте с целью получения пассивного дохода в нашей собственной криптовалюте. Больше редких NFT - больше токенов вы получите. В криптовалюту проекта на постоянной основе будет вливаться  прибыль от наших  GameFi проектов.',
        color: '#FFFFFF',
        background: '#FFB5F7',
        image: 'nft-red.png',
      },
      {
        title: 'Наши большие цели',
        substitle: 'Метаверс на подходе!',
        text: 'Нашей долгосрочной стратегической целью является создание серии мобильных игр, прибыль от которых будет обеспечивать постоянные крипто-дивиденды для наших инвесторов НАВСЕГДА.',
        color: '#0092FF',
        background: '#BBEE91',
        image: 'nft-blue.png',
      },
    ],
    roadmap: {
      title: 'Дорожная карта',
      events: [
        {
          title: 'Предпродажа и сообщество',
          text: 'Лошади растут в числе! Для продолжения нам необходимо набрать не менее 10 000 подписчиков в наших официальных группах в соцсетях. В этот период доступны для продажи предпродажные билеты. Каждый из них имеет свои преимущества для ранних инвесторов, такие как ценовые скидки, повышенный шанс редкости, мерч и многое другое.',
          date: '1-й этап ',
          color: '#0092FF',
        },
        {
          title: 'Чеканка лошадей',
          text: 'Лошади присоединяются к метаверсу! NFT доступны для торговли на таких торговых площадках, как Opensea.',
          date: '2-й этап',
          color: '#FF322F',
        },
        {
          title: 'Разработка криптовалюты',
          text: 'Когда не менее 25% лошадей встретят своих новых владельцев, мы начнем разработку нашего собственного криптовалютного смарт-контракта. Будет проведено частное ICO для владельцев лошадей, затем публичное ICO на Coinlist или аналогичной платформе, затем выпуск на публичных торговых площадках. На этом этапе проекта мы также опубликуем whitepaper нашего токена, где вы сможете получить более подробную информацию об экономике нашей криптовалюты. Криптовалюта ВСЕГДА будет получать ликвидность от наших проектов GameFi.',
          date: '3-й этап',
          color: '#489609',
        },
        {
          title: 'Система депозитов',
          text: 'Владельцы Hippy horses смогут отправить  на депозит свой NFT на нашем сайте, чтобы получить токен Hippy horses (собственную криптовалюту проекта). Количество получаемых токенов будет зависеть от редкости вашей лошади. ',
          date: '3.5 этап',
          color: '#FF322F',
        },
        {
          title: 'Разработка криптовалюты',
          text: 'Для перехода к этому этапу необходимо продать 40% NFT и/или завершить хотя бы 1 этап ICO. Мы планируем создать серию мобильных игр, 50-80% прибыли от которых каждый месяц будет реинвестироваться в криптовалюту нашего проект  (сюда входит прибыль от рекламы, донаты и т.д.). Это означает, что криптовалюта проекта будет постоянно расти в ликвидности, поэтому держатели NFT также постоянно будут получать пассивный доход от своих токенов.',
          date: '4-й этап',
          color: '#0092FF',
        },
      ],
    },
    telegramLead: {
      text: 'Подпишитесь на наш Telegram, чтобы быть чатсью сообщества',
      button: 'Войти в чат',
      icon: 'telegram-36.png',
      background: '#5DB6F8',
      buttonColor: 'black',
      buttonBackground: '#BBEE91',
    },
    mintTicket: {
      title: 'Чеканка купонов',
      tickets: [
        {
          name: 'Бронзовый',
          cost: 0.0077,
          minted: 123,
          supply: 1000,
          description: 'Предоставляют 10% скидку к  цене NFT токена.',
          color: '#B6531C',
          type: 'bronze',
        },
        {
          name: 'Золотой',
          cost: 0.012,
          minted: 232,
          supply: 1000,
          description:
            'Предоставляют 10% скидку к цене NFT токена, увеличенный шанс необычных характеристик, увеличенный шанс редких характеристик.',
          color: '#FFE600',
          type: 'gold',
        },
        {
          name: 'Алмазный',
          cost: 0.02,
          minted: 127,
          supply: 1000,
          description:
            'Предоставляют 15% скидку к цене NFT токена, гарантированно нестандартные характеристики, гораздо более высокий шанс редких характеристик, повышенный шанс мистических характеристик. Также после окончания монетного двора владельцы этих билетов получат официальный мерч проекта.',
          color: '#72DDFF',
          type: 'diamond',
        },
      ],
      type: 'тип',
      minted: 'отчеканено',
      supply: 'всего',
      cost: 'цена',
      howMuch: 'Сколько билетов отчеканить?',
      button: 'Отчеканить',
    },
    mintNFT: {
      title: 'Чеканка NFT',
      subtitle: 'Получите уникальную коллекционку',
      mintedText: 'отчеканено',
      mintedAmount: '521',
      supplyText: 'всего',
      supplyAmount: '10,000',
      costText: 'цена',
      cost: '0.07 ETH',
      howMuch: 'Сколько отчеканить?',
      button: 'Отчеканить',
    },
    discordLead: {
      text: 'Заходите в наш Discord, чтобы узнавать новости первым',
      button: 'Присоединиться',
      icon: 'discord-naked.png',
      background: '#5DB6F8',
      buttonColor: 'black',
      buttonBackground: '#BBEE91',
    },
    team: {
      title: 'Команда',
      members: [
        {
          name: 'Тео',
          description: 'Оснвоатель, медиа-менеджер',
          img: 'Teo.png',
        },
        {
          name: 'Исаак',
          description: 'Дизайнер, фронт-енд разработчик',
          img: 'Isaac.png',
        },
        {
          name: 'Стэн',
          description: 'Блокчейн разработчик',
          img: 'Stan.png',
        },
      ],
    },
    ambassadors: {
      title: '',
      people: [
        {
          channelName: '',
          subscribers: '',
          link: '',
        },
        {
          channelName: '',
          subscribers: '',
          link: '',
        },
        {
          channelName: '',
          subscribers: '',
          link: '',
        },
      ],
    },
    faq: {
      title: 'F.A.Q.',
      questions: [
        {
          question: 'How do I buy an NFT?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique pharetra ipsum tincidunt consectetur tincidunt. Sem facilisi malesuada imperdiet lectus. Volutpat sapien erat facilisis elit massa in. Rutrum feugiat quis nulla velit elit.',
        },
        {
          question: 'Is it a good investment?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique pharetra ipsum tincidunt consectetur tincidunt. Sem facilisi malesuada imperdiet lectus. Volutpat sapien erat facilisis elit massa in. Rutrum feugiat quis nulla velit elit.',
        },
        {
          question: 'How much will it cost later?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique pharetra ipsum tincidunt consectetur tincidunt. Sem facilisi malesuada imperdiet lectus. Volutpat sapien erat facilisis elit massa in. Rutrum feugiat quis nulla velit elit.',
        },
        {
          question: 'What the future of the project is?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique pharetra ipsum tincidunt consectetur tincidunt. Sem facilisi malesuada imperdiet lectus. Volutpat sapien erat facilisis elit massa in. Rutrum feugiat quis nulla velit elit.',
        },
        {
          question: 'How to participate in presale ?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique pharetra ipsum tincidunt consectetur tincidunt. Sem facilisi malesuada imperdiet lectus. Volutpat sapien erat facilisis elit massa in. Rutrum feugiat quis nulla velit elit.',
        },
      ],
    },
    footer: {
      menu: {
        blockName: 'Меню',
        items: ['О нас', 'Дорожная карта', 'Чеканка', 'Команда', 'F.A.Q.'],
      },
      additional: {
        blockName: 'Дополнительно',
        items: [{ text: 'Смарт контракт', link: 'etherscan.com' }],
      },
      copyright: 'Копирайт “Hippy Horses”, 2022',
    },
  },
  [Languages.EN]: {
    menu: ['About', 'Roadmap', 'Mint', 'Team', 'F.A.Q.'],
    hero: {
      subtitle: '10,000 horses vibing in the metaverse.',
      button: 'Mint Hippy Horse',
    },
    about: [
      {
        title: 'Project description',
        substitle: 'Own cryptocurrency,  staking system & GameFi economics!',
        text: `Project will be released on Polygon blockchain, there will be minted 1500 presale tickets and 10,000 NFT's. After mint stage is completed, we will release our own cryptocurrency, which can be mined via NFT staking system and will always receive real cash liquidity from  our games profit.`,
        color: '#BBEE91',
        background: '#5DB6F8',
        image: 'nft-green.png',
      },
      {
        title: 'New way of thinking',
        substitle: 'Not a picture, but a passive income',
        text: 'We reconsidering NFT as an asset an adding an opportunity to stake it on our website and receive passive income in our own cryptocurrency. More rare your NFT - more tokens you get. Tokens on their side, will be powered by our GameFi profits.',
        color: '#FFFFFF',
        background: '#FFB5F7',
        image: 'nft-red.png',
      },
      {
        title: 'Our big goals',
        substitle: 'Metaverse incoming!',
        text: 'Our long term strategy is to create a series of mobile games, profit from which will grant constant crypto-dividends for our investors FOREVER.',
        color: '#0092FF',
        background: '#BBEE91',
        image: 'nft-blue.png',
      },
    ],
    roadmap: {
      title: 'Roadmap',
      events: [
        {
          title: 'Presale & community',
          text: 'Horses are growing in strength! We need to reach at least 10,000 followers on our socials to continue. During this period presale tickets are available for purchase. Each of them has it own benifits for early investors, such as minting price discounts, increased rarity chance, merch and more.',
          date: '1st stage ',
          color: '#0092FF',
        },
        {
          title: 'Mint',
          text: `Horses are joining the metaverse! NFT's are available for trading on marketplaces such as Opensea.`,
          date: '2nd stage',
          color: '#FF322F',
        },
        {
          title: 'Cryptocurrency development',
          text: 'When at least 25% of Horses met their new owners we begin developing of our own cryptocurrency smart-contract. There will  be a private ICO for horses holders, then public ICO on Coinlist or similar platform, then release on public marketplaces. On this stage of project we will also publish the whitepaper of our token, where you will be able to get more detailed info about the economics of our cryptocurrency. Cryptocurrency will ALWAYS receive liqudity from our GameFi projects.',
          date: '3rd stage',
          color: '#489609',
        },
        {
          title: 'Staking system',
          text: `Hippy horses owners will be able to stake their NFT's on our website in order to receive Hippy horses token (own cryptocurrency of the project). Amount of tokens you receive will depend on your horse's rarity.`,
          date: '3.5 stage',
          color: '#0092FF',
        },
        {
          title: 'Game development',
          text: `To enter this stage 40% of NFT's need to be sold and/or 1stage of ICO need to be completed. We are planning to create series of mobile games, 50-80% of profits of which every month will be reinvested in cryptocurrency of our project (That includes ad profits, donations etc.) . It means that cryptocurrency of the project will always be 
growing in liquidity, so NFT holders will also always receive passive income from their tokens.`,
          date: '4th stage',
          color: '#FF322F',
        },
      ],
    },
    telegramLead: {
      text: 'Join our Telegram to be part of the community',
      button: 'Join chat',
      icon: 'telegram-36.png',
      background: '#5DB6F8',
      buttonColor: 'black',
      buttonBackground: '#BBEE91',
    },
    mintTicket: {
      title: 'Mint Ticket',
      tickets: [
        {
          name: 'Bronze',
          cost: 0.0077,
          minted: 123,
          supply: 1000,
          description: 'Provide 10% discount to the mint price.',
          color: '#B6531C',
          type: 'bronze',
        },
        {
          name: 'Golden',
          cost: 0.012,
          minted: 232,
          supply: 1000,
          description:
            'Provide 10% of discount to the mint price, increased chance of uncommon features, increased chance of rare features.',
          color: '#FFE600',
          type: 'gold',
        },
        {
          name: 'Diamond',
          cost: 0.02,
          minted: 127,
          supply: 1000,
          description:
            'Provide 15% of discount to the mint price, guaranteed uncomon feature, much more increased chance of rare feature, increased chance of mystic feature. Also after the mint owners of those tickets will receive official merch of the project.',
          color: '#72DDFF',
          type: 'diamond',
        },
      ],
      type: 'type',
      minted: 'minted',
      supply: 'supply',
      cost: 'cost',
      howMuch: 'How much would you like to mint?',
      button: 'Mint',
    },
    mintNFT: {
      title: 'Mint NFT',
      subtitle: 'Get your unique collectible',
      mintedText: 'minted',
      mintedAmount: 432,
      supplyText: 'supply',
      supplyAmount: '10,000',
      costText: 'cost',
      cost: 0.02,
      howMuch: 'How much would you like to mint?',
      button: 'Mint',
    },
    discordLead: {
      text: 'Follow our discord to be the first to know news',
      button: 'Join server',
      icon: 'discord-naked.png',
      background: '#BF5FCD',
      buttonColor: 'white',
      buttonBackground: 'black',
    },
    team: {
      title: 'Team',
      members: [
        {
          name: 'Teo',
          description: 'CEO, media-manager',
          img: 'Teo.png',
        },
        {
          name: 'Isaac',
          description: 'Designer, frontend developer',
          img: 'Isaac.png',
        },
        {
          name: 'Stan',
          description: 'Blockchain developer',
          img: 'Stan.png',
        },
      ],
    },
    ambassadors: {
      title: 'Ambassadors',
      people: [
        {
          channelName: 'Channel',
          numberOfSubscribers: 412,
          subscribers: ' k subs',
          link: 'youtube.com',
        },
        {
          channelName: 'Channel',
          numberOfSubscribers: 602,
          subscribers: ' k subs',
          link: 'youtube.com',
        },
        {
          channelName: 'Channel',
          numberOfSubscribers: 370,
          subscribers: ' k subs',
          link: 'youtube.com',
        },
      ],
    },
    faq: {
      title: 'F.A.Q.',
      questions: [
        {
          question: 'How do I buy an NFT?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique pharetra ipsum tincidunt consectetur tincidunt. Sem facilisi malesuada imperdiet lectus. Volutpat sapien erat facilisis elit massa in. Rutrum feugiat quis nulla velit elit.',
        },
        {
          question: 'Is it a good investment?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique pharetra ipsum tincidunt consectetur tincidunt. Sem facilisi malesuada imperdiet lectus. Volutpat sapien erat facilisis elit massa in. Rutrum feugiat quis nulla velit elit.',
        },
        {
          question: 'How much will it cost later?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique pharetra ipsum tincidunt consectetur tincidunt. Sem facilisi malesuada imperdiet lectus. Volutpat sapien erat facilisis elit massa in. Rutrum feugiat quis nulla velit elit.',
        },
        {
          question: 'What the future of the project is?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique pharetra ipsum tincidunt consectetur tincidunt. Sem facilisi malesuada imperdiet lectus. Volutpat sapien erat facilisis elit massa in. Rutrum feugiat quis nulla velit elit.',
        },
        {
          question: 'How to participate in presale ?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tristique pharetra ipsum tincidunt consectetur tincidunt. Sem facilisi malesuada imperdiet lectus. Volutpat sapien erat facilisis elit massa in. Rutrum feugiat quis nulla velit elit.',
        },
      ],
    },
    footer: {
      menu: {
        blockName: 'Menu',
        items: ['About', 'Roadmap', 'Mint', 'Team', 'F.A.Q.'],
      },
      additional: {
        blockName: 'Additional',
        items: [{ text: 'Smart contract', link: 'etherscan.com' }],
      },
      copyright: 'Copyright “Hippy Horses”, 2022',
    },
  },
};
