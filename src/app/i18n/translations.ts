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
        text: 'Проект будет выпущен на блокчейне Polygon, будет отчеканено 1500 предпродажных билетов и 10 000 NFT. После завершения этапа минта мы выпустим собственную криптовалюту, которую можно будет добывать через систему депозита NFT и всегда получать реальную денежную ликвидность от прибыли наших мобильных игр.',
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
        text: 'Лошади растут в числе! Для продолжения нам необходимо набрать не менее 10 000 подписчиков в наших офицмальнвх группах в соцсетях. В этот период доступны для продажи предпродажные билеты. Каждый из них имеет свои преимущества для ранних инвесторов, такие как ценовые скидки, повышенный шанс редкости, мерч и многое другое.',
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
          text: 'Лошади растут в числе! Для продолжения нам необходимо набрать не менее 10 000 подписчиков в наших офицмальнвх группах в соцсетях. В этот период доступны для продажи предпродажные билеты. Каждый из них имеет свои преимущества для ранних инвесторов, такие как ценовые скидки, повышенный шанс редкости, мерч и многое другое.',
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
      text: 'подпишитесь на наш Telegram, чтобы быть чатсью сообщества',
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
          cost: 0.01,
          minted: 123,
          supply: 1000,
          description:
            'Предоставляют 10% скидку к  цене NFT токена.',
          color: '#B6531C',
          type: 'bronze',
        },
        {
          name: 'Золотой',
          cost: 0.02,
          minted: 232,
          supply: 1000,
          description:
            'Предоставляют 10% скидку к цене NFT токена, увеличенный шанс необычных характеристик, увеличенный шанс редких характеристик.',
          color: '#FFE600',
          type: 'gold',
        },
        {
          name: 'Алмазный',
          cost: 0.04,
          minted: 127,
          supply: 1000,
          description: 'Предоставляют 15% скидку к цене NFT токена, гарантированно нестандартные характеристики, гораздо более высокий шанс редких характеристик, повышенный шанс мистических характеристик. Также после окончания монетного двора владельцы этих билетов получат официальный мерч проекта.',
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
      text: 'Заходите в наш DIscord, чтобы узнавать новости первым',
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
          name: 'Богдан',
          description: 'Оснвоатель, медиа-менеджер',
          img: 'Bogdan.png',
        },
        {
          name: 'Слава',
          description: 'Дизайнер, фронт-енд разработчик',
          img: 'Slava.png',
        },
        {
          name: 'Андрей',
          description: 'Блокчейн разработчик',
          img: 'Andrew.png',
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
      subtitle: 'Probably the best project you ever seen',
      button: 'Mint Hippy Horse',
    },
    about: [
      {
        title: 'Project description',
        substitle: 'God’s blessing for NFT world',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At urna felis turpis nullam placerat erat. \n\nScelerisque bibendum congue at fermentum. Scelerisque bibendum congue at fermentum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. At urna felis turpis nullam placerat erat.',
        color: '#BBEE91',
        background: '#5DB6F8',
        image: 'nft-green.png',
      },
      {
        title: 'New way of thinking',
        substitle: 'We love crypto so we are gonna improve it!',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At urna felis turpis nullam placerat erat. Scelerisque bibendum congue at fermentum.',
        color: '#FFFFFF',
        background: '#FFB5F7',
        image: 'nft-red.png',
      },
      {
        title: 'Our big goals',
        substitle: 'Change the world of crypto',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At urna felis turpis nullam placerat erat. Scelerisque bibendum congue at fermentum.',
        color: '#0092FF',
        background: '#BBEE91',
        image: 'nft-blue.png',
      },
    ],
    roadmap: {
      title: 'Roadmap',
      events: [
        {
          title: 'Project start',
          text: 'Iaculis blandit molestie morbi gravida erat nulla. Libero, ut egestas adipiscing nulla pulvinar metus aenean id. Ut lacus semper donec donec tortor.',
          date: '1 quarter 2022',
          color: '#0092FF',
        },
        {
          title: 'Presale',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Bibendum sit id a nunc porttitor venenatis. Dui massa egestas vestibulum massa sapien aliquam vel mauris, congue.',
          date: '2 quarter 2022',
          color: '#FF322F',
        },
        {
          title: 'Public sale',
          text: 'Id proin ornare nunc bibendum mauris, laoreet. Diam tortor eu aliquam malesuada enim eget vitae faucibus. Purus enim sed metus et nibh pulvinar aliquet.',
          date: '3 quarter 2022',
          color: '#489609',
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
          cost: 0.01,
          minted: 123,
          supply: 1000,
          description: 'Provide 10% discount to the mint price.',
          color: '#B6531C',
          type: 'bronze',
        },
        {
          name: 'Golden',
          cost: 0.02,
          minted: 232,
          supply: 1000,
          description:
            'Provide 10% of discount to the mint price, increased chance of uncommon features, increased chance of rare features.',
          color: '#FFE600',
          type: 'gold',
        },
        {
          name: 'Diamond',
          cost: 0.04,
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
          name: 'Bogdan',
          description: 'CEO, media-manager',
          img: 'Bogdan.png',
        },
        {
          name: 'Slava',
          description: 'Designer, frontend developer',
          img: 'Slava.png',
        },
        {
          name: 'Andrew',
          description: 'Blockchain developer',
          img: 'Andrew.png',
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
        items: ['About', 'Roadmap', 'Mint', 'Team', 'Ambassadors', 'F.A.Q.'],
      },
      additional: {
        blockName: 'Additional',
        items: [{ text: 'Smart contract', link: 'etherscan.com' }],
      },
      copyright: 'Copyright “Hippy Horses”, 2022',
    },
  },
};
