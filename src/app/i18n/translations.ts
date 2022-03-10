export enum Languages {
  RU,
  EN,
}

export const translations = {
  [Languages.RU]: {
    menu: ['О нас', 'Планы', 'Минт', 'Команда', 'F.A.Q.'],
    hero: {
      subtitle: 'Русский подзаголов',
      button: 'Минт Hippy Horse',
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
      title: '',
      events: [
        {
          title: '',
          text: '',
          date: '',
          color: '',
        },
        {
          title: '',
          text: '',
          date: '',
          color: '',
        },
        {
          title: '',
          text: '',
          date: '',
          color: '',
        },
      ],
    },
    telegramLead: {
      text: 'Join our Telegram to be part of the community',
      button: 'Join chat',
      icon: '',
      background: '#5DB6F8',
      buttonColor: 'black',
      buttonBackground: '#BBEE91',
    },
    mintTicket: {
      title: '',
      tickets: [
        {
          name: '',
          cost: '',
          description: '',
        },
        {
          name: '',
          cost: '',
          description: '',
        },
        {
          name: '',
          cost: '',
          description: '',
        },
      ],
      type: '',
      minted: '',
      supply: '',
      cost: '',
      howMuch: '',
      button: '',
    },
    mintNFT: {
      title: '',
      subtitle: '',
      mintedText: '',
      mintedAmount: '',
      supplyText: '',
      supplyAmount: '',
      costText: '',
      cost: '',
      howMuch: '',
      button: '',
    },
    discordLead: {
      text: 'Join our Telegram to be part of the community',
      button: 'Join chat',
      icon: '',
      background: '#5DB6F8',
      buttonColor: 'black',
      buttonBackground: '#BBEE91',
    },
    team: {
      title: '',
      members: [
        {
          name: '',
          description: '',
          img: '',
        },
        {
          name: '',
          description: '',
          img: '',
        },
        {
          name: '',
          description: '',
          img: '',
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
      title: '',
      questions: [
        {
          question: '',
          answer: '',
        },
        {
          question: '',
          answer: '',
        },
        {
          question: '',
          answer: '',
        },
        {
          question: '',
          answer: '',
        },
        {
          question: '',
          answer: '',
        },
      ],
    },
    footer: {
      menu: '',
      additional: '',
      copyright: '',
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
          description: 'Give you acces to mint 1 uncommon NFT.',
          color: '#B6531C',
          type: 'bronze',
        },
        {
          name: 'Golden',
          cost: 0.02,
          minted: 232,
          supply: 1000,
          description: 'Give you acces to mint 1 rare NFT.',
          color: '#FFE600',
          type: 'gold',
        },
        {
          name: 'Diamond',
          cost: 0.04,
          minted: 127,
          supply: 1000,
          description: 'Give you acces to mint 1 extra rare NFT!',
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
          img: 'bogdan.png',
        },
        {
          name: 'Slava',
          description: 'Designer, frontend developer',
          img: 'slava.png',
        },
        {
          name: 'Andrew',
          description: 'Blockchain developer',
          img: 'andrew.png',
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
