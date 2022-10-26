import humberger_1 from '../images/humberger/product-bg-1.png'
import humberger_2 from '../images/humberger/product-bg-2.png'
import humberger_3 from '../images/humberger/product-bg-3.png'
import humberger_4 from '../images/humberger/product-bg-4.png'
import humberger_5 from '../images/humberger/product-bg-5.png'
import humberger_6 from '../images/humberger/product-bg-6.png'

import pizza_1 from '../images/pizza/product-pz-1.png'
import pizza_2 from '../images/pizza/product-pz-2.png'
import pizza_3 from '../images/pizza/product-pz-3.png'
import pizza_4 from '../images/pizza/product-pz-4.png'
import pizza_5 from '../images/pizza/product-pz-5.png'
import pizza_6 from '../images/pizza/product-pz-6.png'
import pizza_7 from '../images/pizza/product-pz-7.png'
import pizza_8 from '../images/pizza/product-pz-8.png'
import pizza_9 from '../images/pizza/product-pz-9.png'
import pizza_10 from '../images/pizza/product-pz-10.png'

import juice_1 from '../images/juice/product-juice-1.png'
import juice_2 from '../images/juice/product-juice-2.png'
import juice_3 from '../images/juice/product-juice-3.png'
import juice_4 from '../images/juice/product-juice-4.png'
import juice_5 from '../images/juice/product-juice-5.png'
import juice_6 from '../images/juice/product-juice-6.png'



const products = [
    {
        id: 1,
        name: 'Humberger-1 ',
        discription: 'one of the best berger in the wolrd A hamburger or burger is an American fast food. It is a type of sandwich with a patty of cooked ground meat between the two halves of a bun. Tomatoes, onions, cheese, salad and dips may also be added. The hamburger may be eaten without a knife and fork, so it is a fast food which can be eaten anywhere',
        category: 'hamburger',
        currency: 'vnd',
        currentQuantity: 4,
        price: 30000,
        size: [
            {
                name: 'small',
                price: 30000
            },
            {
                name: 'mid',
                price: 35000
            },
            {
                name: 'lag',
                price: 40000
            }
        ],
        imageUrl: humberger_1
    },
    {
        id: 2,
        name: 'humberger_2',
        discription: 'one of the best berger in the wolrd A hamburger or burger is an American fast food. It is a type of sandwich with a patty of cooked ground meat between the two halves of a bun. Tomatoes, onions, cheese, salad and dips may also be added. The hamburger may be eaten without a knife and fork, so it is a fast food which can be eaten anywhere',
        category: 'hamburger',
        currency: 'vnd',
        currentQuantity: 4,
        price: 30000,
        size: [
            {
                name: 'small',
                price: 30000
            },
            {
                name: 'mid',
                price: 35000
            },
            {
                name: 'lag',
                price: 40000
            }
        ],
        imageUrl: humberger_2
    },
    {
        id: 3,
        name: 'Humberger-3',
        discription: 'one of the best berger in the wolrd A hamburger or burger is an American fast food. It is a type of sandwich with a patty of cooked ground meat between the two halves of a bun. Tomatoes, onions, cheese, salad and dips may also be added. The hamburger may be eaten without a knife and fork, so it is a fast food which can be eaten anywhere',
        category: 'hamburger',
        currency: 'vnd',
        currentQuantity: 4,
        price: 100000,
        size: [
            {
                name: 'small',
                price: 300000
            },
            {
                name: 'mid',
                price: 35000
            },
            {
                name: 'lag',
                price: 40000
            }
        ],
        imageUrl: humberger_3
    },
    {
        id: 4,
        name: 'a',
        discription: 'one of the best berger in the wolrd A hamburger or burger is an American fast food. It is a type of sandwich with a patty of cooked ground meat between the two halves of a bun. Tomatoes, onions, cheese, salad and dips may also be added. The hamburger may be eaten without a knife and fork, so it is a fast food which can be eaten anywhere',
        category: 'hamburger',
        currency: 'vnd',
        currentQuantity: 4,
        price: 30000,
        size: [
            {
                name: 'small',
                price: 30000
            },
            {
                name: 'mid',
                price: 35000
            },
            {
                name: 'lag',
                price: 40000
            }
        ],
        imageUrl: humberger_4
    },
    {
        id: 5,
        name: 'Humberger-5',
        discription: 'one of the best berger in the wolrd A hamburger or burger is an American fast food. It is a type of sandwich with a patty of cooked ground meat between the two halves of a bun. Tomatoes, onions, cheese, salad and dips may also be added. The hamburger may be eaten without a knife and fork, so it is a fast food which can be eaten anywhere',
        category: 'hamburger',
        currency: 'vnd',
        currentQuantity: 4,
        price: 30000,
        size: [
            {
                name: 'small',
                price: 30000
            },
            {
                name: 'mid',
                price: 35000
            },
            {
                name: 'lag',
                price: 40000
            }
        ],
        imageUrl: humberger_5
    },
    {
        id: 6,
        name: 'Humberger-6',
        discription: 'one of the best berger in the wolrd A hamburger or burger is an American fast food. It is a type of sandwich with a patty of cooked ground meat between the two halves of a bun. Tomatoes, onions, cheese, salad and dips may also be added. The hamburger may be eaten without a knife and fork, so it is a fast food which can be eaten anywhere',
        category: 'hamburger',
        currency: 'vnd',
        currentQuantity: 4,
        price: 30000,
        size: [
            {
                name: 'small',
                price: 30000
            },
            {
                name: 'mid',
                price: 35000
            },
            {
                name: 'lag',
                price: 40000
            }
        ],
        imageUrl: humberger_6
    },
    // pizza
    {
        id: 7,
        name: 'pizza-1',
        discription: 'one of the best pizza in the wolrd In restaurants, pizza can be baked in an oven with fire bricks above the heat source, an electric deck oven, a conveyor belt oven, or, in traditional style in a wood or coal-fired brick oven. The pizza is slid into the oven on a long paddle, called a peel, and baked directly on hot bricks, a screen (a round metal grate, typically aluminum), or whatever the oven surface is',
        category: 'pizza',
        currency: 'vnd',
        currentQuantity: 4,
        price: 30000,
        size: [
            {
                name: 'small',
                price: 30000
            },
            {
                name: 'mid',
                price: 35000
            },
            {
                name: 'lag',
                price: 40000
            }
        ],
        imageUrl: pizza_1
    },
    {
        id: 8,
        name: 'pizza-2',
        discription: 'one of the best pizza in the wolrd In restaurants, pizza can be baked in an oven with fire bricks above the heat source, an electric deck oven, a conveyor belt oven, or, in traditional style in a wood or coal-fired brick oven. The pizza is slid into the oven on a long paddle, called a peel, and baked directly on hot bricks, a screen (a round metal grate, typically aluminum), or whatever the oven surface is',
        category: 'pizza',
        currency: 'vnd',
        currentQuantity: 4,
        price: 30000,
        size: [
            {
                name: 'small',
                price: 30000
            },
            {
                name: 'mid',
                price: 35000
            },
            {
                name: 'lag',
                price: 40000
            }
        ],
        imageUrl: pizza_2
    },
    {
        id: 9,
        name: 'pizza-3',
        discription: 'one of the best pizza in the wolrd In restaurants, pizza can be baked in an oven with fire bricks above the heat source, an electric deck oven, a conveyor belt oven, or, in traditional style in a wood or coal-fired brick oven. The pizza is slid into the oven on a long paddle, called a peel, and baked directly on hot bricks, a screen (a round metal grate, typically aluminum), or whatever the oven surface is',
        category: 'pizza',
        currency: 'vnd',
        currentQuantity: 4,
        price: 30000,
        size: [
            {
                name: 'small',
                price: 30000
            },
            {
                name: 'mid',
                price: 35000
            },
            {
                name: 'lag',
                price: 40000
            }
        ],
        imageUrl: pizza_3
    },
    {
        id: 10,
        name: 'pizza-4',
        discription: 'one of the best pizza in the wolrd In restaurants, pizza can be baked in an oven with fire bricks above the heat source, an electric deck oven, a conveyor belt oven, or, in traditional style in a wood or coal-fired brick oven. The pizza is slid into the oven on a long paddle, called a peel, and baked directly on hot bricks, a screen (a round metal grate, typically aluminum), or whatever the oven surface is',
        category: 'pizza',
        currency: 'vnd',
        currentQuantity: 4,
        price: 30000,
        size: [
            {
                name: 'small',
                price: 30000
            },
            {
                name: 'mid',
                price: 35000
            },
            {
                name: 'lag',
                price: 40000
            }
        ],
        imageUrl: pizza_4
    },
    {
        id: 11,
        name: 'pizza-5',
        discription: 'one of the best pizza in the wolrd In restaurants, pizza can be baked in an oven with fire bricks above the heat source, an electric deck oven, a conveyor belt oven, or, in traditional style in a wood or coal-fired brick oven. The pizza is slid into the oven on a long paddle, called a peel, and baked directly on hot bricks, a screen (a round metal grate, typically aluminum), or whatever the oven surface is',
        category: 'pizza',
        currency: 'vnd',
        currentQuantity: 4,
        price: 30000,
        size: [
            {
                name: 'small',
                price: 30000
            },
            {
                name: 'mid',
                price: 35000
            },
            {
                name: 'lag',
                price: 40000
            }
        ],
        imageUrl: pizza_5
    },
    {
        id: 12,
        name: 'pizza-6',
        discription: 'one of the best pizza in the wolrd In restaurants, pizza can be baked in an oven with fire bricks above the heat source, an electric deck oven, a conveyor belt oven, or, in traditional style in a wood or coal-fired brick oven. The pizza is slid into the oven on a long paddle, called a peel, and baked directly on hot bricks, a screen (a round metal grate, typically aluminum), or whatever the oven surface is',
        category: 'pizza',
        currency: 'vnd',
        currentQuantity: 4,
        price: 30000,
        size: [
            {
                name: 'small',
                price: 30000
            },
            {
                name: 'mid',
                price: 35000
            },
            {
                name: 'lag',
                price: 40000
            }
        ],
        imageUrl: pizza_6
    },
    {
        id: 13,
        name: 'pizza-7',
        discription: 'one of the best pizza in the wolrd In restaurants, pizza can be baked in an oven with fire bricks above the heat source, an electric deck oven, a conveyor belt oven, or, in traditional style in a wood or coal-fired brick oven. The pizza is slid into the oven on a long paddle, called a peel, and baked directly on hot bricks, a screen (a round metal grate, typically aluminum), or whatever the oven surface is',
        category: 'pizza',
        currency: 'vnd',
        currentQuantity: 4,
        price: 30000,
        size: [
            {
                name: 'small',
                price: 30000
            },
            {
                name: 'mid',
                price: 35000
            },
            {
                name: 'lag',
                price: 40000
            }
        ],
        imageUrl: pizza_7
    },
    {
        id: 14,
        name: 'pizza-8',
        discription: 'one of the best pizza in the wolrd In restaurants, pizza can be baked in an oven with fire bricks above the heat source, an electric deck oven, a conveyor belt oven, or, in traditional style in a wood or coal-fired brick oven. The pizza is slid into the oven on a long paddle, called a peel, and baked directly on hot bricks, a screen (a round metal grate, typically aluminum), or whatever the oven surface is',
        category: 'pizza',
        currency: 'vnd',
        currentQuantity: 4,
        price: 30000,
        size: [
            {
                name: 'small',
                price: 30000
            },
            {
                name: 'mid',
                price: 35000
            },
            {
                name: 'lag',
                price: 40000
            }
        ],
        imageUrl: pizza_8
    },
    {
        id: 15,
        name: 'pizza-9',
        discription: 'one of the best pizza in the wolrd In restaurants, pizza can be baked in an oven with fire bricks above the heat source, an electric deck oven, a conveyor belt oven, or, in traditional style in a wood or coal-fired brick oven. The pizza is slid into the oven on a long paddle, called a peel, and baked directly on hot bricks, a screen (a round metal grate, typically aluminum), or whatever the oven surface is',
        category: 'pizza',
        currency: 'vnd',
        currentQuantity: 4,
        price: 30000,
        size: [
            {
                name: 'small',
                price: 30000
            },
            {
                name: 'mid',
                price: 35000
            },
            {
                name: 'lag',
                price: 40000
            }
        ],
        imageUrl: pizza_9
    },
    {
        id: 16,
        name: 'pizza-10',
        discription: 'one of the best pizza in the wolrd In restaurants, pizza can be baked in an oven with fire bricks above the heat source, an electric deck oven, a conveyor belt oven, or, in traditional style in a wood or coal-fired brick oven. The pizza is slid into the oven on a long paddle, called a peel, and baked directly on hot bricks, a screen (a round metal grate, typically aluminum), or whatever the oven surface is',
        category: 'pizza',
        currency: 'vnd',
        currentQuantity: 4,
        price: 30000,
        size: [
            {
                name: 'small',
                price: 30000
            },
            {
                name: 'mid',
                price: 35000
            },
            {
                name: 'lag',
                price: 40000
            }
        ],
        imageUrl: pizza_10
    },
    // juice
    {
        id: 17,
        name: 'pizza-10',
        discription: 'one of the best juice in the wolrd In restaurants, pizza can be baked in an oven with fire bricks above the heat source, an electric deck oven, a conveyor belt oven, or, in traditional style in a wood or coal-fired brick oven. The pizza is slid into the oven on a long paddle, called a peel, and baked directly on hot bricks, a screen (a round metal grate, typically aluminum), or whatever the oven surface is',
        category: 'juice',
        currency: 'vnd',
        currentQuantity: 4,
        price: 10000,
        size: [
            {
                name: 'small',
                price: 10000
            },
            {
                name: 'mid',
                price: 20000
            },
            {
                name: 'lag',
                price: 30000
            }
        ],
        imageUrl: juice_1
    },
    {
        id: 18,
        name: 'pizza-10',
        discription: 'one of the best juice in the wolrd In restaurants, pizza can be baked in an oven with fire bricks above the heat source, an electric deck oven, a conveyor belt oven, or, in traditional style in a wood or coal-fired brick oven. The pizza is slid into the oven on a long paddle, called a peel, and baked directly on hot bricks, a screen (a round metal grate, typically aluminum), or whatever the oven surface is',
        category: 'juice',
        currency: 'vnd',
        currentQuantity: 4,
        price: 10000,
        size: [
            {
                name: 'small',
                price: 10000
            },
            {
                name: 'mid',
                price: 20000
            },
            {
                name: 'lag',
                price: 30000
            }
        ],
        imageUrl: juice_2
    },
    {
        id: 19,
        name: 'pizza-10',
        discription: 'one of the best juice in the wolrd In restaurants, pizza can be baked in an oven with fire bricks above the heat source, an electric deck oven, a conveyor belt oven, or, in traditional style in a wood or coal-fired brick oven. The pizza is slid into the oven on a long paddle, called a peel, and baked directly on hot bricks, a screen (a round metal grate, typically aluminum), or whatever the oven surface is',
        category: 'juice',
        currency: 'vnd',
        currentQuantity: 4,
        price: 10000,
        size: [
            {
                name: 'small',
                price: 10000
            },
            {
                name: 'mid',
                price: 20000
            },
            {
                name: 'lag',
                price: 30000
            }
        ],
        imageUrl: juice_3
    },
    {
        id: 20,
        name: 'pizza-10',
        discription: 'one of the best juice in the wolrd In restaurants, pizza can be baked in an oven with fire bricks above the heat source, an electric deck oven, a conveyor belt oven, or, in traditional style in a wood or coal-fired brick oven. The pizza is slid into the oven on a long paddle, called a peel, and baked directly on hot bricks, a screen (a round metal grate, typically aluminum), or whatever the oven surface is',
        category: 'juice',
        currency: 'vnd',
        currentQuantity: 4,
        price: 10000,
        size: [
            {
                name: 'small',
                price: 10000
            },
            {
                name: 'mid',
                price: 20000
            },
            {
                name: 'lag',
                price: 30000
            }
        ],
        imageUrl: juice_4
    },
    {
        id: 21,
        name: 'pizza-10',
        discription: 'one of the best juice in the wolrd In restaurants, pizza can be baked in an oven with fire bricks above the heat source, an electric deck oven, a conveyor belt oven, or, in traditional style in a wood or coal-fired brick oven. The pizza is slid into the oven on a long paddle, called a peel, and baked directly on hot bricks, a screen (a round metal grate, typically aluminum), or whatever the oven surface is',
        category: 'juice',
        currency: 'vnd',
        currentQuantity: 4,
        price: 10000,
        size: [
            {
                name: 'small',
                price: 10000
            },
            {
                name: 'mid',
                price: 20000
            },
            {
                name: 'lag',
                price: 30000
            }
        ],
        imageUrl: juice_5
    },
    {
        id: 22,
        name: 'pizza-10',
        discription: 'one of the best juice in the wolrd In restaurants, pizza can be baked in an oven with fire bricks above the heat source, an electric deck oven, a conveyor belt oven, or, in traditional style in a wood or coal-fired brick oven. The pizza is slid into the oven on a long paddle, called a peel, and baked directly on hot bricks, a screen (a round metal grate, typically aluminum), or whatever the oven surface is',
        category: 'juice',
        currency: 'vnd',
        currentQuantity: 4,
        price: 10000,
        size: [
            {
                name: 'small',
                price: 10000
            },
            {
                name: 'mid',
                price: 20000
            },
            {
                name: 'lag',
                price: 30000
            }
        ],
        imageUrl: juice_6
    }
]

export default products;